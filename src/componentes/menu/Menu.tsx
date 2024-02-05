import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import AgendarIcon from "../icons/AgendarIcon";
import CalendarIcon from "../icons/CalendarIcon";
import Cotizaricon from "../icons/CotizarIcon";
import History from "../icons/History";
import PatientIcon from "../icons/PatientIcon";
import Logo from "../navbar/Logo";
import ItemMenu from "./ItemMenu";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className=" flex flex-col w-72 min-h-svh border-r-1 bg-white">
      <div className=" h-20 border-b-2 border-dentimed-blue flex items-center justify-center">
        <NavLink to="/home">
          <Logo />
        </NavLink>
      </div>

      <ItemMenu icon={<AgendarIcon />} name="Agenda" path="/dentista/agenda" />
      <ItemMenu
        icon={<History />}
        name="Historias Clinicas"
        path="/inventario"
      />
      <ItemMenu
        icon={<CalendarIcon />}
        name="Calendario"
        path="/dentista/calendario"
      />
      <ItemMenu
        icon={<PatientIcon />}
        name="Pacientes"
        path="/dentista/pacientes"
      />

      <ItemMenu
        icon={<Cotizaricon />}
        name="Cotizaciones"
        path="/facturacion"
      />
    </div>
  );
};

export default Menu;
