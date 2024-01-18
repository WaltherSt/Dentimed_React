import { FunctionComponent } from "react";

interface Props {
  day: number;
}

const ItemCalendar: FunctionComponent<Props> = ({day}) => {
  return (
    <div className="w-32 h-32 shadow-md m-0.5 cursor-pointer border-dentimed-blue hover:bg-gray-50 duration-200">
      <div className="flex">
        <p className="p-2 text-sky-300 w-full">{day}</p>
      </div>
    </div>
  );
};
export default ItemCalendar;
