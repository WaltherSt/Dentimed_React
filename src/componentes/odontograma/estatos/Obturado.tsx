import { FunctionComponent } from "react";
import ObturadoIcon from "../../icons/ObturadoIcon";

interface ObturadoProps {}

const Obturado: FunctionComponent<ObturadoProps> = () => {
  return (
    <div>
      <div className="w-10 h-10 flex justify-center">
        <div className="w-4 pt-[3px] ml-[1px]">
          <ObturadoIcon />
        </div>
      </div>
    </div>
  );
};

export default Obturado;
