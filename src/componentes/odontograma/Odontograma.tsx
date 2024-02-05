import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import RowPrimary from "./RowPrimary";
import RowSecundary from "./RowSecundary";

interface OdontogramaProps {}

const Odontograma: FunctionComponent<OdontogramaProps> = () => {
  const row1 = Array.from(Array(8), (_, i) => 18 - i);
  const row1_2 = Array.from(Array(8), (_, i) => i + 21);
  const row4 = Array.from(Array(8), (_, i) => 48 - i);
  const row4_2 = Array.from(Array(8), (_, i) => i + 31);

  const row2 = [55, 54, 53, 52, 51, 61, 62, 63, 64, 65];
  const row3 = [85, 84, 83, 82, 81, 71, 72, 73, 74, 75];

  // interface stateTooth{
  //   id:number;
  //   state:number;
  //   comment?:string;

  // }

  return (
    <Provider store={store}>
      <div className="grid grid-rows-4 gap-8">
        <div className=" grid grid-cols-2 gap-10">
          <RowPrimary nums={row1} />
          <RowPrimary nums={row1_2} />
        </div>
        <RowSecundary nums={row2} />
        <RowSecundary nums={row3} />
        <div className=" grid grid-cols-2 gap-10">
          <RowPrimary nums={row4} />
          <RowPrimary nums={row4_2} />
        </div>
      </div>
    </Provider>
  );
};

export default Odontograma;
