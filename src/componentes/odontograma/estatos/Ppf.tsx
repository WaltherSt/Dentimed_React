import { FunctionComponent } from "react";

interface PpfProps {}

const Ppf: FunctionComponent<PpfProps> = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center ">
      <div className=" w-8 h-8 rounded-full border-2 border-black bg-transparent"></div>
    </div>
  );
};

export default Ppf;
