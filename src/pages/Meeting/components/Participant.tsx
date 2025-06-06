import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import { MockParticipant } from "../../../mocks/MockParticipant";
import Profile from "./Profile";

const Participant = () => {
  const navigate = useNavigate();
  const handleQuitMeeting = () => {
    navigate("/summary");
  };
  return (
    <div className="flex flex-col">
      <div>
        <p className="pt-5 pb-3 font-semibold text-lg">Participants</p>
        <ul className="rounded-xl bg-[#E5E8EB]/50">
          {MockParticipant.map((nickname, index) => (
            <li
              className="h-14 flex flex-row gap-4 jusfity-center items-center pl-4 pr-4"
              key={`${nickname}+${index}`}
            >
              <Profile index={index} />
              <p className="text-base">{nickname}</p>
            </li>
          ))}
        </ul>
        <p className="pt-1 pb-3 text-sm text-[#5C738A]">
          Total Participants: {4}
        </p>
      </div>
      <Button color="gray" onClick={handleQuitMeeting}>
        End Meeting
      </Button>
    </div>
  );
};

export default Participant;
