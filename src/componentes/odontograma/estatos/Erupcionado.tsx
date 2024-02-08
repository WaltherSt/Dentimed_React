import { FunctionComponent } from "react";

interface ErupcionadoProps {}

const Erupcionado: FunctionComponent<ErupcionadoProps> = () => {
  return (
    <div className=" h-full w-full flex justify-center absolute top-[7.5px]">
      <p className=" font-normal">E</p>
    </div>
  );
};

export default Erupcionado;
