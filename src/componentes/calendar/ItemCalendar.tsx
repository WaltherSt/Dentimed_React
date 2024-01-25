import { FunctionComponent } from "react";
import TimeIcon from "../icons/TimeIcon";

interface Props {
  day?: number;
  meets?: number;
  activeIcon?: boolean;
}

const ItemCalendar: FunctionComponent<Props> = ({
  day,
  meets = 0,
  activeIcon,
}) => {
  const classActive = activeIcon
    ? "flex justify-center h-full items-center bg-black text-white w-full text-5xl text-center"
    : "flex justify-center h-full items-center hover:bg-sky-50 w-full text-5xl text-center";

  if (day) {
    return (
      <div className=" flex w-28 h-28 cursor-pointer duration-200 shadow-lg">
        <div className="flex flex-col justify-between w-full ">
          <p className={classActive}>{day}</p>

          <div className="flex gap-2 text-black rounded-sm justify-center items-center border-t-3 border-dentimed-blue">
            <TimeIcon />
            <a className="text-sm flex items-center py-2" href="home">
              {3 + meets} citas
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className=" flex w-28 h-28  "></div>;
  }
};
export default ItemCalendar;
