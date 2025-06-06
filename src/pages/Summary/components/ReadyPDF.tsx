const ReadyPDF = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-center pt-3 pb-3">
        음성 기록 {`->`} 요약 {`->`} PDF 생성
      </p>
      <p>회의록 생성중</p>
      <div></div>
      <p className="text-sm text-[#4D7399]">예상 남은 시간: 2분</p>
    </div>
  );
};

export default ReadyPDF;
