import { Spinner } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { isdelete } from "../../redux/features/isDeleteRegister";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useDeletePatientMutation } from "../../redux/service/patientApi";
import AlertIcon from "../icons/AlertIcon";

interface DeleteModalProps {}

const DeleteModal: FunctionComponent<DeleteModalProps> = () => {
  const idPatient = useAppSelector((state) => state.patientSelectSlice.cedula);
  const [deletePatient, { isLoading }] = useDeletePatientMutation();
  const dispatch = useAppDispatch();

  const confirm = async () => {
    await deletePatient(idPatient);
    dispatch(isdelete({ deleteRegister: false }));
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <Spinner />
        </div>
      ) : null}
      <div className="bg-white flex flex-col gap-4 p-4 rounded-lg ">
        <div className="flex items-center gap-2 justify-center">
          <div className="p-2 bg-red-50 rounded-full ">
            <AlertIcon />
          </div>

          <span className="font-normal text-gray-600">
            ¿Esta seguro de eliminar a este paciente?{" "}
          </span>
        </div>

        <div className="flex gap-4 justify-center mt-3">
          <button
            className=" bg-sky-300 text-white text-sm rounded-md hover:bg-sky-400 p-2"
            onClick={() => dispatch(isdelete({ deleteRegister: false }))}
          >
            Cancelar
          </button>
          <button
            className="bg-red-300 p-2 text-white text-sm rounded-md hover:bg-red-400 flex gap-2 justify-center items-center"
            onClick={confirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
