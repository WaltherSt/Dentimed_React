import { Component } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import DayItem from "./DayItem";
import ItemCalendar from "./ItemCalendar";

export default class CalendarContainer extends Component {
  render() {

    const calendarItems = [];
    for (let i = 1; i < 32; i++) {
      calendarItems.push(<ItemCalendar day={i} meets={i} key={i} />);
    }

    const days = [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ];
    const calendarDays = [];
    for (let i = 0; i < days.length; i++) {
      calendarDays.push(<DayItem day={days[i]} />);
    }

    return (
      <div className="flex flex-col gap-2 w-calendar p-2 bg-sky-400 rounded-lg shadow-2xl">
        <div className="flex justify-between px-2 text-white">
          <ArrowLeft />
          <ArrowRight />
        </div>

        <div className="flex justify-between text-gray-300 px-2">
          <p className="text-2xl text-white">Marzo</p>
          <p className="text-2xl text-white">2024</p>
        </div>
        <div className="flex justify-between">{calendarDays}</div>
        <div className="flex flex-wrap gap-1">{calendarItems}</div>
      </div>
    );
  }
}
