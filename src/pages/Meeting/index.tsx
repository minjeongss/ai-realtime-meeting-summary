import { useEffect } from "react";
import Participant from "./components/Participant";
import Summary from "./components/Summary";
import { useLocation } from "react-router";
import formatDate from "@/utils/formatDate";
import useVoiceTransfer from "@/hooks/useMeetingSocket";

const Meeting = () => {
  const date = formatDate(new Date());
  const location = useLocation();
  const { startConnection, endConnection, paricipants } = useVoiceTransfer({
    meetingId: location.state.meetingId,
    userId: location.state.nickname,
  });

  useEffect(() => {
    startConnection();
    return () => {
      endConnection();
    };
  }, []);

  return (
    <div>
      <p className="text-center pt-5 pb-3 font-semibold text-2xl">
        Current Meeting Date: {date}
      </p>
      <div className="w-full h-full grid grid-cols-2 gap-12">
        <Participant paricipants={paricipants} />
        <Summary />
      </div>
    </div>
  );
};

export default Meeting;
