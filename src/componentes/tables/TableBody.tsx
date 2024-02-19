import { FunctionComponent, MouseEvent } from "react";

import { Patient } from "../../redux/service/patientApi";
import DeleteIcon from "../icons/DeleteIcon";
import EditIconII from "../icons/EditIconII";
import EyeIcom from "../icons/EyeIcon";

interface Props {
  deleteRegisterHandle: (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>
  ) => Promise<void>;
  editRegisterHandle: (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>
  ) => Promise<void>;
  data: Patient[];
}

const TableBody: FunctionComponent<Props> = ({
  deleteRegisterHandle,
  editRegisterHandle,
  data,
}) => {
  return (
    <tbody>
      {data
        ? data.map((item) => (
            <tr className="hover:bg-gray-50" key={item.cedula}>
              {Object?.values(item).map((el) => (
                <td
                  className="py-2 px-5 border-b text-gray-400 cursor-pointer "
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

                  <EditIconII
                    handle={(e: MouseEvent<SVGElement, MouseEvent>) =>
                      editRegisterHandle(e)
                    }
                    name={item.cedula}
                    classStyle="text-green-300 hover:text-green-500"
                  />

                  <DeleteIcon
                    handle={(e: MouseEvent<SVGElement, MouseEvent>) =>
                      deleteRegisterHandle(e)
                    }
                    name={item.cedula}
                    classStyle="text-red-300 hover:text-red-500"
                  />
                </div>
              </td>
            </tr>
          ))
        : null}
    </tbody>
  );
};

export default TableBody;
