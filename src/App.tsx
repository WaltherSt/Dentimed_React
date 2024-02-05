import Sede from "./componentes/card-sede/Sede";
import Odontograma from "./componentes/odontograma/Odontograma";
import Home from "./pages/Home";
import { Providers } from "./redux/Provider";

export default function App() {
  return (
    <>
      <Providers>
        <Home />
      </Providers>
      {/* agregar los componentes que desee visualizar */}
      <Sede />

      <div className="w-full flex justify-center">
        <Odontograma />
      </div>
    </>
  );
}
