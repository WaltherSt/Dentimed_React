import Sede from "./componentes/card-sede/Sede";
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
    </>
  );
}
