import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import PartDetail from "./PartDetail";
import { useSocket } from "@/hooks/useSocket";

const Detail = () => {
  const { participants, temporalSummary, endConnection } = useSocket();
  const navigate = useNavigate();
  const handleResetMeeting = () => {
    navigate("/");
    endConnection();
  };
  return (
    <div className="flex flex-col">
      <p className="p-4 font-semibold text-lg">Meeting Details</p>
      <div className="flex flex-col p-4">
        <div className="grid grid-cols-2 gap-6">
          <PartDetail header="Date" content={temporalSummary?.createdAt} />
          <PartDetail header="MeetingID" content={temporalSummary?.meetingId} />
        </div>
        <div className="pt-5 pb-5">
          <PartDetail header="Patricipants" content={participants.length} />
        </div>
      </div>
      <Button color="gray" onClick={handleResetMeeting}>
        Start a New Meeting
      </Button>
    </div>
  );
};

export default Detail;
