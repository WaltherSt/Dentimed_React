import { Provider } from "react-redux";
import Odontograma from "./componentes/odontograma/Odontograma";
import Home from "./pages/Home";
import { Providers } from "./redux/Provider";
import { store } from "./redux/store";
import HealthForm from "./componentes/HealthForm/HealthForm";
import FormRegister_2 from "./componentes/Forms_2/FormRegister_2";

export default function App() {
  return (
    <>
      <Providers>
        <Home />
      </Providers>
      {/* agregar los componentes que desee visualizar */}

      <div className="w-full flex justify-center">
        <Provider store={store}>
          <Odontograma />
        </Provider>
      </div>
      <FormRegister_2/>
      <HealthForm/>
    </>
  );
}
