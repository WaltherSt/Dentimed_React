import { Component } from "react";
import Calendar from "../componentes/calendar/Calendar";
import Menu from "../componentes/menu/Menu";
import Profile from "../componentes/profile/Profile";

export default class Dentist extends Component {
  render() {
    return (
      <div className="flex flex-row w-screen h-screen">

        <div className="w-1/7">
          <Menu />
        </div>

        <div className="flex flex-col w-full">

          <div className="py-2 flex justify-end px-4">
            <Profile srcImage="https://media.istockphoto.com/id/1317241131/es/foto/imagen-de-estudio-de-una-joven-empresaria-confiada-posando-sobre-un-fondo-gris.jpg?s=2048x2048&w=is&k=20&c=PkLplO4CdvIgn1O13k4o_3_x5Igaopf8M9llahm4BV0=" />
          </div>

          <div className="flex justify-center items-center h-full">
            <div className="pb-16">
            <Calendar/>

            </div>

          </div>

        </div>

      </div>
    );
  }
}
