import Button from "../../components/Button";

const Detail = () => {
  return (
    <div className="flex flex-col">
      <p className="p-4 font-semibold text-lg">Meeting Details</p>
      <div className="p-4"></div>
      <div className="flex justify-center items-center pt-3 pb-3 pl-4 pr-4 ">
        <Button color="gray">Start a New Meeting</Button>
      </div>
    </div>
  );
};

export default Detail;
