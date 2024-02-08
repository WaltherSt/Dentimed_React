import { FunctionComponent } from "react";

interface ExtraccionProps {}

const Extraccion: FunctionComponent<ExtraccionProps> = () => {
  return (
    <div className="w-10 h-10 grid grid-cols-2 rotate-45 ">
      <div className="w-[22px] border-r-3 border-black"></div>
      <div className="w-5 "></div>
      <div className="w-[22px]  border-r-3 border-t-3 border-black"></div>
      <div className="w-5 border-t-3  border-black"></div>
    </div>
  );
};

export default Extraccion;
