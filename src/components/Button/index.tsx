interface ButtonProps {
  children: React.ReactNode;
  color: Color;
}

type Color = "skyblue" | "blue" | "gray";

const bgVariants = {
  skyblue: "bg-[#C4D9EB]",
  blue: "",
  gray: "bg-[#E8EDF2]",
};

const Button = ({ color, children }: ButtonProps) => {
  return (
    <button
      className={`h-10 pl-4 pr-4 font-semibold text-xs rounded-2xl ${bgVariants[color]}`}
    >
      {children}
    </button>
  );
};

export default Button;
