import dayjs from "dayjs";
import es from "dayjs/locale/es";
import { FunctionComponent, useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import ItemCalendarV2 from "./ItemCalendarV2";
import WeekDay from "./Weekday";

interface CalendarV2Props {}

const CalendarV2: FunctionComponent<CalendarV2Props> = () => {
  dayjs.locale(es);

  const [date, setDate] = useState(dayjs());

  const daysOfTheMonth = date.daysInMonth();

  const itemsCalendar = [];
  const namesOfTheDays = [
    "lunes",
    "martes",
    "míercoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo",
  ];

  function handleAddMonth() {
    setDate(date.add(1, "M"));
  }

  function handleRemoveMonth() {
    setDate(date.subtract(1, "M"));
  }

  for (let i = 1; i <= daysOfTheMonth; i++) {
    if (
      dayjs().date() === i &&
      dayjs().year() === date.year() &&
      dayjs().month() === date.month()
    ) {
      itemsCalendar.push(
        <ItemCalendarV2
          day={i}
          date={`${i}_${date.month() + 1}_${date.year()}`}
          meets={i}
          selected={true}
          key={i}
        />
      );
    } else {
      itemsCalendar.push(
        <ItemCalendarV2
          day={i}
          date={`${i}_${date.month() + 1}_${date.year()}`}
          meets={i}
          key={i}
        />
      );
    }
  }

  const firsDay = date.set("D", 1).day() === 0 ? 7 : date.set("D", 1).day();
  for (let i = 1; i < firsDay; i++) {
    itemsCalendar.unshift(
      <ItemCalendarV2
        day={null}
        meets={null}
        empty={true}
        key={32 + i}
        date={""}
      />
    );
  }

  return (
    <div className="flex w-ful justify-center">
      <div className=" p-4 w-[1100px] ">
        <div className="flex justify-between text-sky-400 mb-2 px-2">
          <button onClick={handleRemoveMonth}>
            <ArrowLeft />
          </button>

          <div className="flex">
            <p className="capitalize text-2xl font-bold">
              {date.format("MMMM")} {date.format("YYYY")}
            </p>
          </div>

          <button onClick={handleAddMonth}>
            <ArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {namesOfTheDays.map((d) => (
            <WeekDay day={d} key={d} />
          ))}
        </div>
        <div className="grid grid-cols-7 gap-4 p-2 text-center">
          {itemsCalendar}
        </div>
      </div>
    </div>
  );
};
export default CalendarV2;
