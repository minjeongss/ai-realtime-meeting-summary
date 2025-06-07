interface ButtonProps {
  children: React.ReactNode;
  color: Color;
  onClick: () => void;
}

type Color = "blue" | "gray";

const bgVariants = {
  blue: "bg-[#1285E8] text-[#F7FAFC]",
  gray: "bg-[#E8EDF2]",
};

const Button = ({ color, children, onClick }: ButtonProps) => {
  return (
    <div className="flex justify-center items-center pt-3 pb-3 pl-4 pr-4">
      <button
        onClick={onClick}
        className={`h-10 pl-4 pr-4 font-semibold text-xs rounded-[20px] ${bgVariants[color]}
                    hover:shadow-xs hover:scale-[1.02] hover:cursor-pointer
                    transition duration-200 ease-in-out`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
