interface ButtonProps {
  children: React.ReactNode;
  color: Color;
}

type Color = "skyblue" | "blue" | "gray";

const bgVariants = {
  skyblue: "bg-[#C4D9EB]",
  blue: "bg-[#1285E8] text-[#F7FAFC]",
  gray: "bg-[#E8EDF2]",
};

const Button = ({ color, children }: ButtonProps) => {
  return (
    <div className="flex justify-center items-center pt-3 pb-3 pl-4 pr-4">
      <button
        className={`h-10 pl-4 pr-4 font-semibold text-xs rounded-[20px] ${bgVariants[color]}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
