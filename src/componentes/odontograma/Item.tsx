import { FunctionComponent } from "react";
import { setIdTooth } from "../../redux/features/toothSelectSlice";
import { useAppDispatch } from "../../redux/hooks";
interface ItemProps {
  num?: number;
}

const Item: FunctionComponent<ItemProps> = ({ num = 0 }) => {
  const dispach = useAppDispatch();
  return (
    <div
      className="cursor-pointer"
      data-tooth={num}
      onClick={(e) =>
        dispach(setIdTooth({ id: Number(e.currentTarget.dataset.tooth) }))
      }
    >
      <p className="text-center font-bold text-gray-600">{num}</p>
      <div className="relative">
        <div className="w-10 h-10 grid grid-cols-2 grid-rows-2 rotate-45">
          <div className=" border-r-1 border-black "></div>
          <div className=""></div>
          <div className=" border-r-1 border-t-1 border-black "></div>
          <div className="border-t-1 border-black "></div>
        </div>

        <div className="flex justify-center items-center w-10 h-10 border-1 border-black rounded-full absolute inset-x-0 top-0">
          <div className="w-5 h-5 border-1 border-black rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Item;
