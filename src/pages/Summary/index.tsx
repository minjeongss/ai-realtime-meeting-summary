import Detail from "./components/Detail";
import Export from "./components/Export";

const Summary = () => {
  return (
    <div>
      <p className="pb-3 text-center font-semibold text-2xl">
        Your meeting summary is ready!
      </p>
      <div className="w-full h-full flex [&>div]:flex-1 pt-5">
        <Detail />
        <Export />
      </div>
    </div>
  );
};

export default Summary;
