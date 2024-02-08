import { FunctionComponent } from "react";
import ObturadoIcon from "../../icons/ObturadoIcon";

interface ObturadoProps {}

const Obturado: FunctionComponent<ObturadoProps> = () => {
  return (
    <div className="absolute top-[3px]">
      <div className="w-10 h-10 flex justify-center">
        <div className="w-4">
          <ObturadoIcon />
        </div>
      </div>
    </div>
  );
};

export default Obturado;
