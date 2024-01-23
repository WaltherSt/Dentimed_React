import Button from "./componentes/button/Button";
import CalendarContainer from "./componentes/calendar/CalendarContainer";
import Blog from "./componentes/card-blog/Blog";
import Sede from "./componentes/card-sede/Sede";

import CardService from "./componentes/card-service/CardService";
import FormLogin from "./componentes/forms/FormLogin";
import FormRegister from "./componentes/forms/FormRegister";
import AgendarIcon from "./componentes/icons/AgendarIcon";
import ItemMeet from "./componentes/meets/ItemMeet";
import Menu from "./componentes/menu/Menu";
import AvatarUser from "./componentes/navbar/AvatarUser";
import ButtonLogin from "./componentes/navbar/ButtonLogin";
import NavBar from "./componentes/navbar/NavBar";
import DateAppointment from "./componentes/date-Appointment/DateAppointment";
import Doctor_card from "./componentes/card-Doctor/Doctor_card";

export default function App() {
  const lista = [
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
  ];
  const titulo = "Implantes Dentales";
  const lista2 = ["Inicio", "Servicios", "Blog"];
  const lista3 = ["Citas", "Pagos", "Agendar"];
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <NavBar list={lista3} login={<AvatarUser />} />

      <CardService title={titulo} list={lista} />
      <Sede />
      <Blog />
      <DateAppointment 
      nameDoctor="Nombre de especialista"
      place="Lugar de cita"
      date="Fecha de la cita"
      time="Hora de la cita"
      />
      <FormRegister/>
      <FormRegister />
      <Button
        label="Agendar"
        background={"Primary"}
        svgIcon={<AgendarIcon />}
      />
      <Button label="Eliminar" background={"Danger"} />
      <NavBar list={lista2} login={<ButtonLogin />} />
      <ItemMeet/>
      <FormLogin/>
      <Menu/>
      <CalendarContainer/>
      <Doctor_card/>






    </div>
  );
}
