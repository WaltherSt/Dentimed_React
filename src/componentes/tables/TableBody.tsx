import { FunctionComponent } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import EditIconII from "../icons/EditIconII";
import EyeIcom from "../icons/EyeIcon";

interface Paciente {
  documento: string;
  paciente: string;
  telefono: string;
  correo: string;
  dirección: string;
  status: string;
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
            <td
              className="py-2 px-5 border-b text-gray-400 cursor-pointer text-center "
              key={el}
            >
              {el}
            </td>
          ))}
          <td className="py-2 px-5 border-b text-gray-400 cursor-pointer">
            <div className="flex gap-3 justify-center">
              <div className="text-gray-300 hover:text-gray-500">
                <EyeIcom />{" "}
              </div>
              <div className="text-green-200 hover:text-green-500">
                {" "}
                <EditIconII />{" "}
              </div>
              <div className="text-red-200 hover:text-red-500">
                {" "}
                <DeleteIcon />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
