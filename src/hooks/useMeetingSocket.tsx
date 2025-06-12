import { useEffect, useRef, useState } from "react";

interface UseMeetingSocketProps {
  meetingId: string;
  userId: string;
}

const useMeetingSocket = ({ meetingId, userId }: UseMeetingSocketProps) => {
  const socketRef = useRef<WebSocket | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [paricipants, setParticipants] = useState<string[]>([]);

  const startConnection = () => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      console.log("WebSocket 연결 성공");

      //meetingId, userId 설정 전송
      const joinMessage = {
        type: "join",
        meetingId,
        userId,
      };
      socket.send(JSON.stringify(joinMessage));
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case "joined":
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
        case "recording_stopped":
          break;
        case "meeting_ended":
          break;
      }
      console.log(message);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    socket.onerror = (error) => {
      console.error("WebSocket 오류:", error);
    };

    socketRef.current = socket;
  };

  const endConnection = () => {
    endVoiceCapture();
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
                meetingId: meetingId,
                size: buffer.byteLength,
              })
            );

            // Blob 데이터 쪼개서 전송
            const chunkSize = 16 * 1024; // 16KB
            for (let i = 0; i < buffer.byteLength; i += chunkSize) {
              const chunk = buffer.slice(i, i + chunkSize);
              socket.send(chunk);
            }
          }
        });
        audioChunks = [];
      };

      mediaRecorder.start();
    } catch (error) {
      // 미디어 입력 실패
      console.log("마이크 접근 오류: ", error);
    }
  };

  const endVoiceCapture = () => {
    const stream = audioStreamRef.current;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state === "inactive") {
      recorder.stop();
    }
  };

  // 컴포넌트 unmount될 때 socket 제거
  useEffect(() => {
    return () => {
      socketRef.current?.close();
    };
  }, []);

  return {
    startConnection,
    endConnection,
    paricipants,
  };
};

export default useMeetingSocket;
