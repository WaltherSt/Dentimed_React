import { FunctionComponent } from "react";

interface Props {
  day: string | number;
}

const DayItem: FunctionComponent<Props> = ({ day }) => {
  return <p className="w-32 text-center text-white text-xl capitalize font-normal">{day}</p>;
};

export default DayItem;
