import { FunctionComponent } from "react";
import { useAppSelector } from "../../redux/hooks";
import Select from "../select/Select";
import RowPrimary from "./RowPrimary";
import RowSecundary from "./RowSecundary";

interface OdontogramaProps {}

const Odontograma: FunctionComponent<OdontogramaProps> = () => {
  const row1 = Array.from(Array(8), (_, i) => 18 - i);
  const row1_2 = Array.from(Array(8), (_, i) => i + 21);
  const row4 = Array.from(Array(8), (_, i) => 48 - i);
  const row4_2 = Array.from(Array(8), (_, i) => i + 31);

  const row2 = [55, 54, 53, 52, 51, 61, 62, 63, 64, 65];
  const row3 = [85, 84, 83, 82, 81, 71, 72, 73, 74, 75];

  // interface stateTooth{
  //   id:number;
  //   state:number;
  //   comment?:string;

  // }

  const estados = [
    "Sano",
    "Caries",
    "Obturado",
    "Extracción",
    "Extraido",
    "Sin Erupcionar",
    "Sellante",
    "Erupcionado",
  ];

  const id = useAppSelector((state) => state.toothSelectSlice.value);

  return (
    <div className="">
      <div className="grid grid-rows-4 gap-8">
        <div className=" grid grid-cols-2 gap-10">
          <RowPrimary nums={row1} />
          <RowPrimary nums={row1_2} />
        </div>
        <RowSecundary nums={row2} />
        <RowSecundary nums={row3} />
        <div className=" grid grid-cols-2 gap-10">
          <RowPrimary nums={row4} />
          <RowPrimary nums={row4_2} />
        </div>
      </div>

      <div className=" flex mt-10 justify-center items-center gap-10">
        <div className="flex flex-col w-60 gap-1">
          <label htmlFor="id" className="font-semibold text-gray-600">
            Pieza dental seleccionada
          </label>
          <input
            className="p-2 rounded-md bg-gray-50 "
            type="text"
            name="id"
            value={id}
            disabled
          />
        </div>
        <div className="flex flex-col w-60 gap-1">
          <label className="font-semibold text-gray-600" htmlFor="">Estado de la pieza</label>
          <Select list={estados} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="observaciones" className="font-semibold text-gray-600">
          Observaciones :
        </label>
        <textarea
          className="border-1 w-full p-2"
          name="observaciones"
          id=""
          rows={10}
        ></textarea>
      </div>
    </div>
  );
};

export default Odontograma;
