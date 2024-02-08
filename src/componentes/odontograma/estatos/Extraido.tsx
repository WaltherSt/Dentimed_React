import { FunctionComponent } from "react";

interface ExtraidoProps {}

const Extraido: FunctionComponent<ExtraidoProps> = () => {
  return (
    <div>
      <div className="w-10 h-10 flex ">
        <div className="h-10 w-5 border-r-3 border-black ml-[1.5px]"></div>
      </div>
    </div>
  );
};

export default Extraido;
