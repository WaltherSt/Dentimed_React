import { FunctionComponent } from "react";
import { setIdTooth } from "../../redux/features/toothSelectSlice";
import { useAppDispatch } from "../../redux/hooks";
import Caries from "./estatos/Caries";
import Erupcionado from "./estatos/Erupcionado";
import Extraccion from "./estatos/Extraccion";
import Extraido from "./estatos/Extraido";
import Obturado from "./estatos/Obturado";
import Ppf from "./estatos/Ppf";
import Sellante from "./estatos/Sellante";
import SinErupcionar from "./estatos/SinErupcionar";
interface ItemProps {
  num?: number;
  condition?: string;
}

const Item: FunctionComponent<ItemProps> = ({ num = 0, condition }) => {
  const dispach = useAppDispatch();

  function statusTooth() {
    const estado = [
      { key: "Sana", value: null },
      { key: "Caries", value: <Caries /> },
      { key: "Obturado", value: <Obturado /> },
      { key: "Extracción", value: <Extraccion /> },
      { key: "Sin Erupcionar", value: <SinErupcionar /> },
      { key: "Sellante", value: <Sellante /> },
      { key: "PPF", value: <Ppf /> },
      { key: "Erupcionado", value: <Erupcionado /> },
      { key: "Extraido", value: <Extraido /> },

    ];

    return estado.find((e) => e.key === condition)?.value;
  }

  return (
    <button
      className="cursor-pointer relative w-10"
      data-tooth={num}
      onClick={(e) =>
        dispach(setIdTooth({ id: Number(e.currentTarget.dataset.tooth) }))
      }
    >
      <p className=" pb-1 w-10 text-center font-normal text-gray-600">{num}</p>
      <div className="relative">
        <div className="w-10 h-10 grid grid-cols-2 grid-rows-2 rotate-45">
          <div className=" border-r-1 border-black "></div>
          <div className=""></div>
          <div className=" border-r-1 border-t-1 border-black "></div>
          <div className="border-t-1 border-black "></div>
        </div>

        <div className="flex justify-center items-center w-10 h-10 border-1 border-black rounded-full absolute inset-x-0 top-0">
          <div className="w-5 h-5 border-1 border-black rounded-full bg-white "></div>
        </div>
        {statusTooth()}
      </div>
    </button>
  );
};

export default Item;
