import Button from "./componentes/button/Button";

import Blog from "./componentes/card-blog/Blog";
import Sede from "./componentes/card-sede/Sede";

import Doctor_card from "./componentes/card-Doctor/Doctor_card";
import CardService from "./componentes/card-service/CardService";
import DateAppointment from "./componentes/date-Appointment/DateAppointment";
import FormLogin from "./componentes/forms/FormLogin";
import FormRegister from "./componentes/forms/FormRegister";
import AgendarIcon from "./componentes/icons/AgendarIcon";
import ItemMeet from "./componentes/meets/ItemMeet";
import Menu from "./componentes/menu/Menu";
import ButtonLogin from "./componentes/navbar/ButtonLogin";
import NavBar from "./componentes/navbar/NavBar";
import Profile from "./componentes/profile/Profile";
import Table from "./componentes/tables/Table";

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
      <NavBar
        list={lista3}
        component={
          <Profile srcImage="https://media.istockphoto.com/id/1317241131/es/foto/imagen-de-estudio-de-una-joven-empresaria-confiada-posando-sobre-un-fondo-gris.jpg?s=2048x2048&w=is&k=20&c=PkLplO4CdvIgn1O13k4o_3_x5Igaopf8M9llahm4BV0=" />
        }
      />

      <CardService title={titulo} list={lista} />
      <Sede />
      <Blog />
      <DateAppointment
        nameDoctor="Nombre de especialista"
        place="Lugar de cita"
        date="Fecha de la cita "
        time="Hora de la cita"
      />
      <FormRegister />
      <Button
        label="Agendar"
        background={"Primary"}
        svgIcon={<AgendarIcon />}
      />
      <Button label="Eliminar" background={"Danger"} />
      <NavBar list={lista2} component={<ButtonLogin />} />
      <ItemMeet />
      <FormLogin />
      <Menu />
      <Profile srcImage="https://media.istockphoto.com/id/1317241131/es/foto/imagen-de-estudio-de-una-joven-empresaria-confiada-posando-sobre-un-fondo-gris.jpg?s=2048x2048&w=is&k=20&c=PkLplO4CdvIgn1O13k4o_3_x5Igaopf8M9llahm4BV0=" />

      <Doctor_card />
      <Table />

      <div className="w-full mx-2">P</div>
    </div>
  );
}
