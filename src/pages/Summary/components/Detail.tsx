import { useLocation, useNavigate } from "react-router";
import Button from "../../../components/Button";
import PartDetail from "./PartDetail";
import formatDate from "@/utils/formatDate";

const Detail = () => {
  const location = useLocation();
  const date = formatDate(new Date());
  const navigate = useNavigate();
  const handleResetMeeting = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col">
      <p className="p-4 font-semibold text-lg">Meeting Details</p>
      <div className="flex flex-col p-4">
        <div className="grid grid-cols-2 gap-6">
          <PartDetail header="Date" content={date} />
          <PartDetail header="Time" content={location.state.time} />
        </div>
        <div className="pt-5 pb-5">
          <PartDetail
            header="Patricipants"
            content={location.state.participants}
          />
        </div>
      </div>
      <Button color="gray" onClick={handleResetMeeting}>
        Start a New Meeting
      </Button>
    </div>
  );
};

export default Detail;
