
import Blog from "./componentes/card-blog/Blog";
import Target_pay from "./componentes/card-pay/Target_pay";
import Sede from "./componentes/card-sede/Sede";
import CardService from "./componentes/card-service/CardService";
import FormRegister from "./componentes/forms/FormRegister";
import NavBar from "./componentes/navbar/NavBar";
import CircularProgress1 from "./componentes/progress/CircularProgress1";
import DateAppointment from "./componentes/date-Appointment/DateAppointment";

export default function App() {
  const lista = [
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
  ];
  const titulo = "implantes dentales";
  const lista2 = ["Inicio", "Servicios", "Blog", "Login"];
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <NavBar lista={lista2} />
      <CardService title={titulo} lista={lista} />
      <Sede/>

      <Blog />
      <DateAppointment 
      nameDoctor="Nombre de especialista"
      place="Lugar de cita"
      date="Fecha de la cita "
      time="Hora de la cita"
      />
      <FormRegister/>
      <CircularProgress1/>
      <Target_pay/>
    </div>
  );
}
