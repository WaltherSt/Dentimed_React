import { FunctionComponent, MouseEventHandler } from "react";
import { useOutletContext } from "react-router-dom";
import dataPacientes from "../assets/data/pacientes.json";
import FormRegister from "../componentes/forms/FormRegister";
import AddUser from "../componentes/icons/AddUser";
import ListIcon from "../componentes/icons/ListIcon";
import Select from "../componentes/select/Select";
import Table from "../componentes/tables/Table";
import { PacienteI } from "../interfaces/PacienteI";

interface PacientesProps {}

interface ModalType {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pacientes: FunctionComponent<PacientesProps> = () => {
  const { modal, setModal } = useOutletContext<ModalType>();

  const items: PacienteI[] = dataPacientes;

  function openModal() {
    setModal(!modal);
  }

  function closeModal(e: MouseEventHandler<HTMLButtonElement>) {
    if (e.target?.id == "contentModal") {
      setModal(!modal);
    }
  }

  return (
    <div className="relative flex items-start justify-center">
      {modal ? (
        <button
          id="contentModal"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <FormRegister />
        </button>
      ) : null}

      <div className="w-full">
        <div className="flex gap-2 p-3 bg-white mb-2 shadow items-center">
          <ListIcon />
          <p className="uppercase text-2xl">Lista de pacientes</p>
        </div>

        <div className="grid grid-cols-4 bg-white p-3 shadow mb-2">
          <div className="flex gap-5 col-span-2">
            <input
              type="search"
              className="p-2 bg-gray-50"
              placeholder="Buscar"
            />
            <Select label="filtrar por" list={["estado", "nombre"]} />
          </div>
          <div className="flex gap-5 justify-end col-span-2">
            <button
              className="flex items-center text-white px-2 rounded-md border-dentimed-blue bg-sky-300  hover:bg-sky-400 capitalize gap-2"
              onClick={openModal}
            >
              nuevo
              <AddUser />
            </button>
          </div>
        </div>
        <Table items={items} />
      </div>
    </div>
  );
};

export default Pacientes;