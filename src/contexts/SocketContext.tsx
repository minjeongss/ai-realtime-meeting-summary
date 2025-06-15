import type {
  EntireSummaryResponse,
  TemporalSummaryResponse,
} from "@/types/SocketResponse";
import type { ReactNode } from "react";
import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

interface SocketContextType {
  participants: string[];
  temporalSummary: TemporalSummaryResponse | null;
  entireSummary: EntireSummaryResponse | null;
  startConnection: (meetingId: string, userId: string) => void;
  endRecording: () => void;
  endConnection: () => void;
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketProviderProps {
  children: ReactNode;
}

const SocketProvider = ({ children }: SocketProviderProps) => {
  const socketRef = useRef<WebSocket | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const participantsRef = useRef<string[]>([]);
  const currentMeetingIdRef = useRef<string>("");
  const [participants, setParticipants] = useState<string[]>([]);
  const [temporalSummary, setTemporalSummary] =
    useState<TemporalSummaryResponse | null>(null);
  const [entireSummary, setEntireSummary] =
    useState<EntireSummaryResponse | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const recordingInterval = useRef<ReturnType<typeof setInterval>>(null);
  const navigate = useNavigate();

  const startConnection = (meetingId: string, userId: string) => {
    // 기존 연결이 있다면 종료
    if (socketRef.current) {
      socketRef.current.close();
    }

    currentMeetingIdRef.current = meetingId;
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      console.log("WebSocket 연결 성공");
      setIsConnected(true);
      socket.send(
        JSON.stringify({
          type: "join",
          meetingId,
          userId,
        })
      );
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case "joined":
          participantsRef.current = message.participants;
          setParticipants(message.participants);
          socketRef.current?.send(
            JSON.stringify({
              type: "start_recording",
              meetingId: meetingId,
            })
          );
          break;
        case "recording_started":
          startVoiceCapture();
          break;
        case "recording_already_started":
          startVoiceCapture();
          break;
        case "pdf_link":
          setTemporalSummary(message);
          setEntireSummary(message);
          break;
        case "recording_stopped":
          endVoiceCapture();
          break;
        case "meeting_ended":
          navigateToSummary();
          break;
      }
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
      setIsConnected(false);
    };

    socket.onerror = (error) => {
      console.error("WebSocket 오류:", error);
      setIsConnected(false);
    };

    socketRef.current = socket;
  };

  const endRecording = () => {
    const meetingId = currentMeetingIdRef.current;

    socketRef.current?.send(
      JSON.stringify({
        type: "stop_recording",
        meetingId: meetingId,
      })
    );
    socketRef.current?.send(
      JSON.stringify({
        type: "end_meeting",
        meetingId: meetingId,
      })
    );

    // 연결 정리
    endVoiceCapture();
    setIsConnected(false);
  };

  const endConnection = () => {
    socketRef.current?.close();
    socketRef.current = null;
  };

  const navigateToSummary = () => {
    navigate("/summary", {
      state: {
        time: "00:00:00-00:00:00",
        participants: participantsRef.current.length,
      },
    });
  };

  const startVoiceCapture = async () => {
    try {
      // 미디어 입력 장치 접근: 마이크(오디오)
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 44100,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      audioStreamRef.current = audioStream;

      // 오디오 녹화
      const mediaRecorder = new MediaRecorder(audioStream, {
        mimeType: "audio/webm;codecs=opus",
      });
      mediaRecorderRef.current = mediaRecorder;

      // 데이터 처리 이벤트 헨들러 등록
      let audioChunks: Blob[] = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      // 녹화 중지 이벤트 헨들러 등록
      mediaRecorder.onstop = () => {
        if (audioChunks.length === 0) return;

        // 오디오 형태 blob으로 변경
        const completeBlob = new Blob(audioChunks, {
          type: "audio/webm",
        });

        // socket에 오디오 전송
        completeBlob.arrayBuffer().then((buffer) => {
          const socket = socketRef.current;
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(
              JSON.stringify({
                type: "complete_audio_file",
                meetingId: currentMeetingIdRef.current,
                size: buffer.byteLength,
              })
            );
            socket.send(buffer);
          }
        });
        audioChunks = [];
      };

      // socket 오디오 주기적 전송
      recordingInterval.current = setInterval(() => {
        if (mediaRecorder && mediaRecorder.state === "recording") {
          // 녹음 중지
          mediaRecorder.stop();
          // 녹음 재시작
          setTimeout(() => {
            mediaRecorder.start();
          }, 100);
        }
      }, 5000);

      mediaRecorder.start();
    } catch (error) {
      // 미디어 입력 실패
      console.log("마이크 접근 오류: ", error);
    }
  };

  const endVoiceCapture = () => {
    if (recordingInterval.current) {
      clearInterval(recordingInterval.current);
      recordingInterval.current = null;
    }
    const stream = audioStreamRef.current;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== "inactive") {
      recorder.stop();
    }
    audioStreamRef.current = null;
    mediaRecorderRef.current = null;
  };

  // 컴포넌트 unmount될 때 정리
  useEffect(() => {
    return () => {
      endVoiceCapture();
      socketRef.current?.close();
    };
  }, []);

  const contextValue: SocketContextType = {
    participants,
    temporalSummary,
    entireSummary,
    startConnection,
    endRecording,
    endConnection,
    isConnected,
  };

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
