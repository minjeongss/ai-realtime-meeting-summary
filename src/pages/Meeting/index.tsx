import { useEffect, useState } from "react";
import Participant from "./components/Participant";
import Summary from "./components/Summary";
import { useLocation } from "react-router";

const Meeting = () => {
  const [time, setTime] = useState("00:00:00");
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
  }, []);

  return (
    <div>
      <p className="text-center pt-5 pb-3 font-semibold text-2xl">
        Current Meeting Time: {time}
      </p>
      <div className="w-full h-full grid grid-cols-2 gap-12">
        <Participant />
        <Summary />
      </div>
    </div>
  );
};

export default Meeting;
