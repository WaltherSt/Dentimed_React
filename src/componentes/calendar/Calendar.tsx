import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

import Punto from "../utils/Punto";
import DayItem from "./DayItem";

import { FunctionComponent } from "react";
import ItemCalendar from "./ItemCalendar";

interface Props {
  date: Date;
}

const Calendar: FunctionComponent<Props> = ({ date }) => {
  dayjs.locale("es");
  dayjs.extend(localeData); // extiende el modulo dayjs con localeData, el modulo por defecto no tiene una funcion para acceder a todos los dias de la semana. con localDate se resuelve
  const dat = dayjs(date); // 	Transforma una fecha Date en una fecha dayjs
  const calendarItems = [];
  const day = dayjs().date();
  const month = dayjs().format("MMMM");
  const year = dayjs().year();
  const calendarDays = [];
  const days: string[] = dayjs.weekdays(); // dias de la semana

  for (const day of days) {
    calendarDays.push(<DayItem day={day} />); // guarda en la constante calendarDays (string[]) cada dia de la semana
  }

  for (let i = 1; i <= dat.daysInMonth(); i++) {
    const currentDay = dayjs();

    if (i == day && currentDay.month() == dat.month()) {//compara si el mes en que nos encontramos es el actual, para marcar el dia actual
      calendarItems.push(
        <ItemCalendar day={i} meets={i} activeIcon={<Punto />} />
      );
    } else {
      calendarItems.push(<ItemCalendar day={i} meets={i} key={i} />);
    }
  }

  for (let i = 0; i < dat.day(); i++) {
    calendarItems.unshift(<ItemCalendar />);
  }

  return (
    <div className="flex flex-col gap-2 w-calendar p-2 bg-sky-400 rounded-lg">
      <div className="flex justify-between px-2 text-white pb-3">
        <ArrowLeft />
        <div className="flex gap-6">
          <p className="text-2xl text-white font-bold capitalize ">{month}</p>
          <p className="text-2xl text-white font-bold ">{year}</p>
        </div>

        <ArrowRight />
      </div>
      <div className="flex justify-between"> {calendarDays}</div>

      <div className="flex flex-wrap gap-1">{calendarItems}</div>
    </div>
  );
};

export default Calendar;
