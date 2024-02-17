import { FunctionComponent, MouseEvent } from "react";
import { isEditMode } from "../../redux/features/isEditSlice";
import { changeStatus } from "../../redux/features/modalPacienteSlice";
import { setPatientSelected } from "../../redux/features/patientSelectSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  useDeletePatientMutation,
  useGetPatientsQuery,
} from "../../redux/service/patientApi";
import DeleteIcon from "../icons/DeleteIcon";
import EditIconII from "../icons/EditIconII";
import EyeIcom from "../icons/EyeIcon";

interface Props {}

const TableBody: FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch();

  const [deletePatient] = useDeletePatientMutation();
  const { data, refetch } = useGetPatientsQuery(null);

  const handleDeleteClick = async (e: React.MouseEvent<SVGElement>) => {
    const id = e.currentTarget.getAttribute("id");

    if (id !== null) {
      await deletePatient(id);
      refetch();
    } else {
      return;
    }
  };

  const handleEditClick = async (e: React.MouseEvent<SVGElement>) => {
    const id = e.currentTarget.getAttribute("id");
    if (id !== null) {
      const patientToEdit = data?.find((p) => p.cedula == id);

      if (patientToEdit !== undefined) {
        dispatch(setPatientSelected({ data: patientToEdit }));
      }

      dispatch(changeStatus());
      dispatch(isEditMode({ activeModeEdit: true }));
      refetch();
    } else {
      return;
    }
  };

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
                      handleEditClick(e)
                    }
                    name={item.cedula}
                    classStyle="text-green-300 hover:text-green-500"
                  />

                  <DeleteIcon
                    handle={(e: MouseEvent<SVGElement, MouseEvent>) =>
                      handleDeleteClick(e)
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
