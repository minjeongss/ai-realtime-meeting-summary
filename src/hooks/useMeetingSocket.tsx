import { useEffect, useRef } from "react";

interface UseMeetingSocketProps {
  meetingId: string;
  userId: string;
}

const useMeetingSocket = ({ meetingId, userId }: UseMeetingSocketProps) => {
  const socketRef = useRef<WebSocket | null>(null);

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
      console.log("서버로부터 수신:", message);
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
  };
};

export default useMeetingSocket;
