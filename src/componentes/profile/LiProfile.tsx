import { FunctionComponent, ReactNode } from "react";

interface LiProfileProps {
  title: string;
  icon: ReactNode;
  high: string;
}

const LiProfile: FunctionComponent<LiProfileProps> = ({
  title,
  icon,
  high,
}) => {
  const cla = `py-${high} px-2`;

  return (
    <div className="flex items-center duration-300 ease-in-out hover:bg-gray-50 cursor-pointer capitalize px-1 text-xs ">
      {icon}
      <p className={cla}>{title}</p>
    </div>
  );
};

export default LiProfile;
