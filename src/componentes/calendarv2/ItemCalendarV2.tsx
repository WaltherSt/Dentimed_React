import { FunctionComponent } from "react";
import { redirect } from "react-router-dom";
import TimeIcon from "../icons/TimeIcon";

interface ItemCalendarV2Props {
  day: number | null;
  date: string;
  meets: number | null;
  selected?: boolean;
  empty?: boolean;
}

const ItemCalendarV2: FunctionComponent<ItemCalendarV2Props> = ({
  day,
  date,
  meets,
  selected,
  empty,
}) => {
  const selectClass = selected
    ? "grid row-span-2 bg-black text-white h-full content-center"
    : "grid row-span-2 bg-white text-black h-full content-center hover:bg-sky-50";

  const containerClass = empty
    ? ""
    : "grid grid-rows-3 items-center rounded-xl shadow-lg cursor-pointer";

  function handleDate(dat: string) {
    redirect(dat);

    console.log("agenda/" + dat);

  }

  return (
    <button
      onClick={() => {
        handleDate(date);
      }}
    >
      <div className={containerClass}>
        <div className={empty ? "" : selectClass}>
          <p className="text-3xl">{day}</p>
        </div>
        <div className={empty ? "" : "border-t-2 border-sky-400 p-2"}>
          {!empty && (
            <div className="flex justify-center gap-2">
              <TimeIcon />
              <div className=" flex text-sm items-center">
                {meets} {empty ? null : "Citas"}
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default ItemCalendarV2;
