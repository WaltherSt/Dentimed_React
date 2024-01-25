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
    <p className="flex items-center duration-300 ease-in-out hover:bg-dentimed-blue hover:text-white cursor-pointer capitalize px-3 text-xs  rounded-sm">
      {icon}
      <p className={cla}>{title}</p>
    </p>
  );
};

export default LiProfile;
