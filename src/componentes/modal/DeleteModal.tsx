import { FunctionComponent } from "react";
import AlertIcon from "../icons/AlertIcon";

interface DeleteModalProps {}

const DeleteModal: FunctionComponent<DeleteModalProps> = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70 ">
      <div className="bg-white flex flex-col gap-4 px-10 py-4 rounded-md">
        <div className="flex flex-col items-center">
          <div className="text-red-500">
            <AlertIcon />
          </div>

          <span className="text-lg"> ¿Esta seguro de esta acción? </span>
        </div>

        <div className="flex gap-4 justify-center mt-3">
          <button className="bg-sky-300 p-2 text-white rounded-md hover:bg-sky-400">
            Cancelar
          </button>
          <button className="bg-red-300 p-2 text-white rounded-md hover:bg-red-400">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
