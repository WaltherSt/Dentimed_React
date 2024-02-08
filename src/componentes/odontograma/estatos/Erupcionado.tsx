import { FunctionComponent } from "react";

interface ErupcionadoProps {}

const Erupcionado: FunctionComponent<ErupcionadoProps> = () => {
  return (
    <div>
      <div className="w-10 h-10 flex justify-center items-center ">
        <p className=" font-normal">E</p>
      </div>
    </div>
  );
};

export default Erupcionado;
