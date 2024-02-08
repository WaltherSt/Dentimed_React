import { FunctionComponent } from "react";

interface SinErupcionarProps {}

const SinErupcionar: FunctionComponent<SinErupcionarProps> = () => {
  return (
    <div>
      <div className="w-10 h-10 flex ">
        <div className="h-5 w-10 border-b-3 mt-[2px] border-black"></div>
      </div>
    </div>
  );
};

export default SinErupcionar;
