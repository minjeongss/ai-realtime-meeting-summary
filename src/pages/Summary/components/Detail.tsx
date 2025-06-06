import Button from "../../../components/Button";
import PartDetail from "./PartDetail";

const Detail = () => {
  return (
    <div className="flex flex-col">
      <p className="p-4 font-semibold text-lg">Meeting Details</p>
      <div className="flex flex-col p-4">
        <div className="grid grid-cols-2 gap-6">
          <PartDetail header="Date" content="July 26,2024" />
          <PartDetail header="Date" content="July 26,2024" />
        </div>
        <div className="pt-5 pb-5">
          <PartDetail header="Date" content="July 26,2024" />
        </div>
      </div>
      <Button color="gray">Start a New Meeting</Button>
    </div>
  );
};

export default Detail;
