import { FunctionComponent } from "react";
import AgendarIcon from "../icons/AgendarIcon";
import BillIcon from "../icons/BillIcon";
import CalendarIcon from "../icons/CalendarIcon";
import HistoryIcon from "../icons/HistoryIcon";
import InventoryIcon from "../icons/InventoryIcon";
import PatientIcon from "../icons/PatientIcon";
import Logo from "../navbar/Logo";
import ItemMenu from "./ItemMenu";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className=" flex flex-col w-72 min-h-svh border-r-1 bg-white">
      <div className=" h-20 border-b-2 border-dentimed-blue flex items-center justify-center">
        <Logo />
      </div>
      <ItemMenu icon={<AgendarIcon />} name="Agenda" path="/agenda" />
      <ItemMenu icon={<CalendarIcon />} name="Calendario" path="/calendario" />
      <ItemMenu icon={<PatientIcon />} name="Pacientes" path="/pacientes" />
      <ItemMenu icon={<InventoryIcon />} name="Inventario" path="/inventario" />
      <ItemMenu icon={<BillIcon />} name="Facturación" path="/facturacion" />
      <ItemMenu
        icon={<HistoryIcon />}
        name="Historia Dental"
        path="/historia"
      />
    </div>
  );
};

export default Menu;
