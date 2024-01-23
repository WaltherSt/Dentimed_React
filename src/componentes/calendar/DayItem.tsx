import { FunctionComponent } from "react";

interface Props {
  day: string;
}

const DayItem: FunctionComponent<Props> = ({ day }) => {
  return <p className="w-32 text-center text-white text-xl capitalize">{day}</p>;
};

export default DayItem;
