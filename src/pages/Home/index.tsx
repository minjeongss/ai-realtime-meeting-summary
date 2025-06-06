const Home = () => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col gap-6 justify-center items-center ">
      <p className="font-semibold text-2xl">Voice Meeting Summary</p>
      <input
        className="w-112 flex justify-center items-center text-center p-4 rounded-2xl text-[#4A739C] bg-[#E8EDF5]"
        type="text"
        placeholder="Enter your nickname"
      />
      <button className="h-12 pl-5 pr-5 rounded-2xl text-[#F7FAFC] bg-[#0D80F2]">
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
