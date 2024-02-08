import { FunctionComponent } from "react";

interface CariesProps {}

const Caries: FunctionComponent<CariesProps> = () => {
  return (
    <div className="flex w-full h-full absolute top-[6px] pl-[1px]">
      <div className="font-normal">x</div>
    </div>
  );
};

export default Caries;
