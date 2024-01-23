import dayjs from "dayjs";
import es from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

import Punto from "../utils/Punto";
import DayItem from "./DayItem";

import { FunctionComponent, useState } from "react";
import ItemCalendar from "./ItemCalendar";

interface Props {
  date: Date;
}

const Calendar: FunctionComponent<Props> = ({ date }) => {
  dayjs.locale(es); //setea el idioma
  dayjs.extend(localeData);

  const [dat, setDat] = useState(dayjs(date)); //transforma el date de tipo Date a dayjs y lo asigna al estado

  function addMonth() {
    // funcion para agregar un mes a la fecha, ejemplo(2024-01-01) a (2024-02-01)
    setDat(dat.add(1, "month"));
  }

  function removeMonth() {
    //funcion para quitar un mes a la fecha, ejemplo(2024-01-01) a (2023-12-01)
    setDat(dat.subtract(1, "month"));
  }

  const daysTheMonth = [];
  const day = dayjs().date();
  const days: string[] = dayjs.weekdays();

  //ciclo que se encarga de agregar en un array todos los  ItemCalendar necesarios en funcion del numero de dias de determinado mes(dat.daysInMonth())

  for (let i = 1; i <= dat.daysInMonth(); i++) {
    const currentDay = dayjs();

    if (i == day && currentDay.month() == dat.month() && dat.year() == dayjs().year()) {
      //compara si el mes en el que se está correponde al actual, esto para marcar el dia del mes actual.
      daysTheMonth.push(
        <ItemCalendar day={i} meets={i} activeIcon={<Punto />} key={i} />
      );
    } else {
      daysTheMonth.push(<ItemCalendar day={i} meets={i} key={i} />);
    }
  }

  for (let i = 0; i < dat.day(); i++) {
    // dat.day() devuelve un numero del 0-6 que corresponde al primer día de un mes determinado(0 para lunes .... 6 para domingo)
    daysTheMonth.unshift(<ItemCalendar key={32 + i} />); // usar unshift no debe considerarse un problema de rendimiento ya que el numero maximo de indexaciones por ciclo es de 37 algo que javascript maneja sin problema
    // agrega al inicio del array con elementos <ItemCalendar/> cascarones vacios correspondientes al numero de espacios que debe moverse la primera linea del calendario
  }

  return (
    <div className="flex flex-col gap-2 w-calendar p-2 bg-sky-400 rounded-lg">
      <div className="flex justify-between px-2 text-white pb-3">
        <button onClick={removeMonth}>
          <ArrowLeft />
        </button>

        <div className="flex gap-5">
          <p className="text-2xl text-white font-bold capitalize ">
            {dat.format("MMMM")}
          </p>
          <p className="text-2xl text-white font-bold ">{dat.format("YYYY")}</p>
        </div>

        <button onClick={addMonth}>
          <ArrowRight />
        </button>
      </div>

      <div className="flex justify-between">
        {/* days.map(day) devuelve un array con los nombres de los dias de la semana */}
        {days.map((day) => (
          <DayItem day={day} key={day} />
        ))}
      </div>
      <div  className="grid grid-cols-7 gap-1">{daysTheMonth}</div>
    </div>
  );
};

export default Calendar;
