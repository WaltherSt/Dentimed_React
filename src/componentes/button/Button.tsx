import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  background: string;
  svgIcon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, background, svgIcon }) => {
  const backgroundClasses: Record<string, string> = {
    Primary: `bg-sky-300 hover:bg-dentimed-blue`,
    Danger: "bg-red-300 hover:bg-red-400",
    Secundary: "bg-sky-200 hover:bg-dentimed-blue",
  };

  const backgroundClass = backgroundClasses[background];
  const styles = `w-full cursor-pointer text-white p-2 rounded-md shadow-md text-center ${backgroundClass} flex gap-2 justify-center duration-300`;

  return (
    <button className={styles}>
      {label}
      {svgIcon}
    </button>
  );
};

export default Button;
