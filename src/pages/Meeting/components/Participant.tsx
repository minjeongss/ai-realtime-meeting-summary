import Button from "../../../components/Button";
import Profile from "./Profile";

interface ParticipantProps {
  participants: string[];
  endRecording: () => void;
}
const Participant = ({ participants, endRecording }: ParticipantProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <p className="pt-5 pb-3 font-semibold text-lg">Participants</p>
        <ul className="rounded-xl bg-[#E5E8EB]/50">
          {participants.map((nickname, index) => (
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
          Total Participants: {participants.length}
        </p>
      </div>
      <Button color="gray" onClick={endRecording}>
        End Meeting
      </Button>
    </div>
  );
};

export default Participant;
