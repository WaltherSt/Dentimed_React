import { FunctionComponent } from "react";
import { isEditMode } from "../../redux/features/isEditSlice";
import { changeStatus } from "../../redux/features/modalPacienteSlice";
import { setPatientSelected } from "../../redux/features/patientSelectSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  Patient,
  useDeletePatientMutation,
  useGetPatientsQuery,
} from "../../redux/service/patientApi";
import DeleteIcon from "../icons/DeleteIcon";
import EditIconII from "../icons/EditIconII";
import EyeIcom from "../icons/EyeIcon";

interface Props {
  data: Patient[];
}

const TableBody: FunctionComponent<Props> = ({ data }) => {
  const cedula = useAppSelector((state) => state.patientSelectSlice.cedula);
  const dispatch = useAppDispatch();

  const [deletePatient] = useDeletePatientMutation();
  const { refetch } = useGetPatientsQuery(null);

  const handleDeleteClick = async () => {
    await deletePatient(cedula);
    refetch();
  };

  const handleEditClick = () => {
    dispatch(changeStatus());
    dispatch(isEditMode({ activeModeEdit: true }));
  };

  const handleTrClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const [ced, nom, ape, tel, cor, dir] = e.currentTarget.childNodes;
    const item = {
      cedula: ced.textContent,
      nombres: nom.textContent,
      apellidos: ape.textContent,
      telefono: tel.textContent,
      correo: cor.textContent,
      direccion: dir.textContent,
    };

    dispatch(setPatientSelected({ data: item }));
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr
          className="hover:bg-gray-50"
          key={item.cedula}
          onClick={handleTrClick}
        >
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
              <button
                className="text-green-200 hover:text-green-500"
                onClick={handleEditClick}
              >
                <EditIconII />{" "}
              </button>
              <button
                className="text-red-200 hover:text-red-500"
                name="cedula"
                value={item.cedula}
                onClick={handleDeleteClick}
                key={item.cedula}
              >
                <DeleteIcon />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
