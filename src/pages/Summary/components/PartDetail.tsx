interface PartDetailProps {
  header: string;
  content: string;
}

const PartDetail = ({ header, content }: PartDetailProps) => {
  return (
    <div className="flex flex-col text-sm pt-5 pb-5 border-solid border-t-1 border-[#E5E8EB]">
      <p className="text-[#4D7599]">{header}</p>
      <p>{content}</p>
    </div>
  );
};

export default PartDetail;
