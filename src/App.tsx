import Button from "./componentes/button/Button";
import Blog from "./componentes/card-blog/Blog";
import Sede from "./componentes/card-sede/Sede";

import CardService from "./componentes/card-service/CardService";
import FormRegister from "./componentes/forms/FormRegister";
import AgendarIcon from "./componentes/icons/AgendarIcon";
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
  const lista2 = ["Inicio", "Servicios", "Blog", "Login"];
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <NavBar list={lista2} />
      <CardService title={titulo} list={lista} />
      <Sede />
      <Blog />
      <FormRegister />
      <Button label="Comprar" background={"Primary"} />
      <Button label="Borrar" background={"Danger"} svgIcon={<AgendarIcon />} />
    </div>
  );
}
