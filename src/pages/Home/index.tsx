import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [meetingId, setMeetingId] = useState("meeting-");

  const handleJoinMeeting = () => {
    if (nickname.trim() && meetingId.trim()) {
      navigate("/meeting", {
        state: { meetingId: meetingId.trim(), nickname: nickname.trim() },
      });
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-100.8px)] flex flex-col gap-6 justify-center items-center ">
      <p className="font-semibold text-2xl">Voice Meeting Summary</p>
      <input
        value={meetingId}
        onChange={(event) => setMeetingId(event.target.value)}
        className="w-112 flex justify-center items-center text-center p-4 rounded-2xl text-[#4A739C] bg-[#E8EDF5] outline-none"
        type="text"
        placeholder="Enter meeting ID"
      />
      <input
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
        className="w-112 flex justify-center items-center text-center p-4 rounded-2xl text-[#4A739C] bg-[#E8EDF5] outline-none"
        type="text"
        placeholder="Enter your nickname"
      />
      <button
        onClick={handleJoinMeeting}
        className={`h-12 pl-5 pr-5 rounded-2xl text-[#F7FAFC] bg-[#0D80F2]
                    hover:shadow-xs hover:scale-[1.02] hover:cursor-pointer
                    transition duration-200 ease-in-out`}
      >
        Join Meeting
      </button>
      <p>
        Click the button above to join the meeting. Your nickname will be
        displayed to other participants.
      </p>
    </div>
  );
};

export default Home;
