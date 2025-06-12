import { useEffect, useRef, useState } from "react";

interface UseMeetingSocketProps {
  meetingId: string;
  userId: string;
}

const useMeetingSocket = ({ meetingId, userId }: UseMeetingSocketProps) => {
  const socketRef = useRef<WebSocket | null>(null);
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
      if (message.type === "joined") {
        setParticipants(message.participants);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    socket.onerror = (error) => {
      console.error("WebSocket 오류:", error);
    };

    socketRef.current = socket;
  };

  const endConnection = () => {};

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
