import { FunctionComponent, useEffect } from "react";
import { updateTooth } from "../../redux/features/teethObjectSlice";
import { setStatus } from "../../redux/features/toothSelectSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "../button/Button";
import Select from "../select/Select";
import Item from "./Item";

interface OdontogramaProps {}

const Odontograma: FunctionComponent<OdontogramaProps> = () => {
  const arrayTeeth = useAppSelector((state) => state.teethObjectSlice);

  const estados = [
    "Sano",
    "Caries",
    "Obturado",
    "Extracción",
    "Extraido",
    "Sin Erupcionar",
    "Sellante",
    "PPF",
    "Erupcionado",
  ];

  const dispatch = useAppDispatch();
  const { id, status } = useAppSelector((state) => state.toothSelectSlice);

  useEffect(() => {
    dispatch(updateTooth({ id, status }));
  }, [status]);

  function setStateTooth(e: MouseEvent) {
    dispatch(setStatus({ estado: e.currentTarget?.dataset.value }));
  }

  return (
    <div className="">
      <div className=" grid grid-cols-2 gap-10 gap-x-16 gap-y-4 ">
        <div className="grid grid-cols-8 gap-5">
          {arrayTeeth.slice(0, 8).map(({ id, state }) => (
            <Item key={id} num={id} condition={state} />
          ))}
        </div>

        <div className="grid grid-cols-8 gap-5">
          {arrayTeeth.slice(8, 16).map(({ id, state }) => (
            <Item key={id} num={id} condition={state} />
          ))}
        </div>

        <div className="grid grid-cols-5 justify-items-end pl-[160px]">
          {arrayTeeth.slice(16, 21).map(({ id, state }) => (
            <Item key={id} num={id} condition={state} />
          ))}
        </div>

        <div className="grid grid-cols-5 justify-items-start pr-[160px]">
          {arrayTeeth.slice(21, 26).map(({ id, state }) => (
            <Item key={id} num={id} condition={state} />
          ))}
        </div>

        <div className="grid grid-cols-5 justify-items-end pl-[160px]">
          {arrayTeeth
            .slice(26, 31)
            .map(({ id, state }) =>
              id <= 85 && id >= 81 ? (
                <Item key={id} num={id} condition={state} />
              ) : null
            )}
        </div>
        <div className="grid grid-cols-5 justify-items-start pr-[160px]">
          {arrayTeeth.slice(31, 36).map(({ id, state }) => (
            <Item key={id} num={id} condition={state} />
          ))}
        </div>

        <div className="grid grid-cols-8 gap-5">
          {arrayTeeth.slice(36, 44).map(({ id, state }) => (
            <Item key={id} num={id} condition={state} />
          ))}
        </div>

        <div className="grid grid-cols-8 gap-5">
          {arrayTeeth.slice(44, 52).map(({ id, state }) => (
            <Item key={id} num={id} condition={state} />
          ))}
        </div>
      </div>

      <div className=" flex mt-10 justify-center items-center gap-10">
        <div className="flex flex-col w-60 gap-1">
          <label htmlFor="id" className="font-normal text-gray-600">
            Pieza dental seleccionada
          </label>
          <input
            className="p-2 rounded-md bg-gray-50"
            type="text"
            name="id"
            value={id}
            disabled
          />
        </div>
        <div className="flex flex-col w-60 gap-1">
          <label className="font-normal text-gray-600">
            Estado de la pieza
          </label>
          <Select list={estados} onClick={(e) => setStateTooth(e)} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="observaciones" className="font-normal text-gray-600">
          Observaciones :
        </label>
        <textarea
          className="border-1 w-full p-2"
          name="observaciones"
          id=""
          rows={10}
        ></textarea>
      </div>

      <div className="flex justify-end mt-1">
        <div className="w-full md:w-48">
          <Button label="Guardar" background="Primary" />
        </div>
      </div>
    </div>
  );
};

export default Odontograma;
