import { FunctionComponent, ReactNode } from "react";
import useModal from "../../hooks/useModal";
import { isEditMode } from "../../redux/features/isEditSlice";
import { changeStatus } from "../../redux/features/modalPacienteSlice";
import { setPatientSelected } from "../../redux/features/patientSelectSlice";
import { patientEmpty } from "../../source/patientEmpty";
import XMark from "../icons/XMark";

interface ModalProps {
  body: ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ body }) => {
  const { modal, dispatch } = useModal();

  function handleClick() {
    dispatch(changeStatus());
    dispatch(setPatientSelected({ data: patientEmpty }));
    dispatch(isEditMode({ activeModeEdit: false }));
  }

  return (
    <>
      {modal ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70 ">
          <div className="w-96 flex justify-end ml-3 mb-1 ">
            <button className="text-white " onClick={handleClick}>
              {<XMark />}
            </button>
          </div>

          <div className="flex flex-col gap-3 w-96 shadow-large p-5 rounded-lg bg-white ">
            <div className="flex">{body}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
