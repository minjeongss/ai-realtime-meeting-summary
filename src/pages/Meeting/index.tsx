import { useEffect } from "react";
import Participant from "./components/Participant";
import Summary from "./components/Summary";
import { useLocation } from "react-router";
import formatDate from "@/utils/formatDate";
import { useSocket } from "@/hooks/useSocket";

const Meeting = () => {
  const date = formatDate(new Date());
  const location = useLocation();
  const { participants, temporalSummary, startConnection, endRecording } =
    useSocket();

  useEffect(() => {
    startConnection(location.state.meetingId, location.state.nickname);
  }, []);

  return (
    <div>
      <p className="text-center pt-5 pb-3 font-semibold text-2xl">
        Current Meeting Date: {date}
      </p>
      <div className="w-full h-full grid grid-cols-2 gap-12">
        <Participant participants={participants} endRecording={endRecording} />
        <Summary temporalSummary={temporalSummary} />
      </div>
    </div>
  );
};

export default Meeting;
