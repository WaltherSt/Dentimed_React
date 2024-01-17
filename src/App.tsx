import Button from "./componentes/button/Button";
import Blog from "./componentes/card-blog/Blog";
import Sede from "./componentes/card-sede/Sede";

import CardService from "./componentes/card-service/CardService";
import FormLogin from "./componentes/forms/FormLogin";
import FormRegister from "./componentes/forms/FormRegister";
import AgendarIcon from "./componentes/icons/AgendarIcon";
import DeleteIcon from "./componentes/icons/DeleteIcon";
import ItemMeet from "./componentes/meets/ItemMeet";
import AvatarUser from "./componentes/navbar/AvatarUser";
import ButtonLogin from "./componentes/navbar/ButtonLogin";
import NavBar from "./componentes/navbar/NavBar";

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
      <FormRegister />
      <Button
        label="Agendar"
        background={"Primary"}
        svgIcon={<AgendarIcon />}
      />
      <Button label="Borrar" background={"Danger"} svgIcon={<DeleteIcon />} />
      <NavBar list={lista2} login={<ButtonLogin />} />
      <ItemMeet/>
      <FormLogin/>


    </div>
  );
}
