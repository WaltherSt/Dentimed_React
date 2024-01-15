import Blog from "./componentes/card-blog/Blog";
import Sede from "./componentes/card-sede/Sede";
import CardService from "./componentes/card-service/CardService";
import FormRegister from "./componentes/forms/FormRegister";
import NavBar from "./componentes/navbar/NavBar";
import Target_pay from "./componentes/card-pay/Target_pay";

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
      <NavBar lista={lista2} />
      <CardService title={titulo} lista={lista} />
      <Sede/>

      <Blog />
      <FormRegister/>
      <Target_pay/>
    </div>
  );
}
