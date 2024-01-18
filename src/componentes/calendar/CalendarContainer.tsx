import { Component } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import ItemCalendar from "./ItemCalendar";

export default class CalendarContainer extends Component {
  render() {
    const calendarItems = [];
    for (let i = 1; i < 32; i++) {
      calendarItems.push(<ItemCalendar day={i} key={i} />);
    }

    return (
      <div className="flex flex-col gap-2 w-calendar p-2">
        <div className="flex justify-between">
          <ArrowLeft />
          <ArrowRight />
        </div>

        <div className="flex justify-between text-gray-300">
          <p className="text-2xl">Marzo</p>
          <p className="text-2xl">2024</p>
        </div>

        <div className="flex flex-wrap gap-1">
          {calendarItems}
        </div>
      </div>
    );
  }
}

