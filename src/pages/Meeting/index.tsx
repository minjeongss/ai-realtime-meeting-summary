import Participant from "./components/Participant";
import Summary from "./components/Summary";

const Meeting = () => {
  return (
    <div className="w-full h-full flex flex-row gap-12">
      <div className="flex-grow-[600] basis-0 max-w-[550px]">
        <Participant />
      </div>
      <div className="flex-grow-[400] basis-0 max-w-[360px]">
        <Summary />
      </div>
    </div>
  );
};

export default Meeting;
