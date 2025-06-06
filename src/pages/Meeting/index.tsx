import { useState } from "react";
import Participant from "./components/Participant";
import Summary from "./components/Summary";

const Meeting = () => {
  const [time, setTime] = useState("00:00:00");
  return (
    <div>
      <p className="text-center pt-5 pb-3 font-semibold text-2xl">
        Current Meeting Time: {time}
      </p>
      <div className="w-full h-full grid grid-cols-[3fr_2fr] gap-12">
        <Participant />
        <Summary />
      </div>
    </div>
  );
};

export default Meeting;
