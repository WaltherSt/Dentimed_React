import { FunctionComponent } from "react";
interface Paciente {
  paciente: string;
  telefono: string;
  correo: string;
  dirección: string;
  estado: string;
}

interface Props {
  data: Paciente[];
}

const TableBody: FunctionComponent<Props> = ({ data }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr className="hover:bg-gray-50" key={item.telefono}>
          {Object.values(item).map((el) => (
            <td className="p-2 border-b text-gray-400 cursor-pointer " key={el}>{el}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
