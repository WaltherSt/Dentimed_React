import { FunctionComponent } from "react";

interface CariesProps {}

const Caries: FunctionComponent<CariesProps> = () => {
  return (
    <div className="w-10 h-10 flex items-center">
      <div className="font-normal pl-[1px]">x</div>
    </div>
  );
};

export default Caries;
