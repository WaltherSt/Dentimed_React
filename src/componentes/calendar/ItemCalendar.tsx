import { FunctionComponent, ReactNode } from "react";
import TimeIcon from "../icons/TimeIcon";

interface Props {
  day?: number;
  meets?: number;
  activeIcon?: ReactNode;
}

const ItemCalendar: FunctionComponent<Props> = ({ day, meets, activeIcon }) => {
  if (day) {
    return (
      <div className=" flex w-32 h-32 m-0.5 cursor-pointer hover:bg-gray-50 hover:scale-105 duration-200 bg-white rounded relative ">
        <div className="flex flex-col justify-between w-full ">
          <div className="flex justify-center">
            <p className="text-dentimed-blue w-full text-5xl shadow-md text-center py-5">
              {day}
            </p>
          </div>

          <div className="flex gap-2 text-gray-400 rounded-sm justify-center py-2">
            <TimeIcon />
            <a className="text-sm flex items-center" href="">
              {meets + 3} citas
            </a>
          </div>
        </div>

        <div className="absolute p-2 right-0">{activeIcon}</div>
      </div>
    );
  } else {
    return <div className=" flex w-32 h-32 m-0.5  "></div>;
  }
};
export default ItemCalendar;
