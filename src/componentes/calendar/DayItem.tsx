import { FunctionComponent } from "react";

interface Props {
  day: string | number;
  variant?: boolean;
}

const DayItem: FunctionComponent<Props> = ({ day, variant }) => {
  return variant ? (
    <p className="w-32 text-center text-dentimed-blue text-xl capitalize font-normal">
      {day}
    </p>
  ) : (
    <p className="w-32 text-center text-black text-xl capitalize">{day}</p>
  );
};

export default DayItem;
