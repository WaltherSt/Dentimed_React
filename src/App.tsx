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
import CircularProgress1 from "./componentes/progress/CircularProgress1";

export default function App() {
  const lista = [
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
    "Implantes dentales All-On-4®",
  ];
  const titulo = "implante dental";
  const lista2 = ["Inicio", "Servicios", "Blog", "Login"];
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <NavBar list={lista3} login={<AvatarUser />} />

      <CardService title={titulo} list={lista} />
      <Sede />
      <Blog />
      <FormRegister/>
      <CircularProgress1/>
      <Target_pay/>
    </div>
  );
}
