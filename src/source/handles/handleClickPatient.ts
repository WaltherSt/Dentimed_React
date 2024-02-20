import { isdelete } from "../../redux/features/isDeleteRegister";
import { isEditMode } from "../../redux/features/isEditSlice";
import { changeStatus } from "../../redux/features/modalPacienteSlice";
import { setPatientSelected } from "../../redux/features/patientSelectSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useGetPatientsQuery } from "../../redux/service/patientApi";

export const useHandleClickPatient = () => {
  const dispatch = useAppDispatch();

  const { data, isError, isLoading } = useGetPatientsQuery();

  const handleDeleteClick = async (e: React.MouseEvent<SVGElement>) => {
    const id = e.currentTarget.getAttribute("id");
    if (id !== null) {
      const patientToEdit = data?.find((p) => p.cedula == id);

      if (patientToEdit !== undefined) {
        dispatch(setPatientSelected({ data: patientToEdit }));
        dispatch(isdelete({ deleteRegister: true }));
      }
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
    }
  };

  return { handleDeleteClick, handleEditClick, data, isLoading, isError };
};
