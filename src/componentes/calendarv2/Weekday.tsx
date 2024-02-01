import { FunctionComponent } from "react";

interface WeekDayProps {
  day: string;
}

const WeekDay: FunctionComponent<WeekDayProps> = ({ day }) => {
  let customClass = "";

  if (day == "domingo") {
    customClass = "text-center capitalize text-xl text-sky-400 font-semibold";
  } else {
    customClass = "text-center capitalize text-xl font-normal text-gray-500";
  }

  return <p className={customClass}>{day}</p>;
};

export default WeekDay;
