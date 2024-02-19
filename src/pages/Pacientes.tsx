import { FunctionComponent } from "react";

import { Spinner } from "@nextui-org/react";
import FormRegister from "../componentes/forms/FormRegister";
import AddUser from "../componentes/icons/AddUser";
import ListIcon from "../componentes/icons/ListIcon";
import Modal from "../componentes/modal/Modal";
import Select from "../componentes/select/Select";
import Table from "../componentes/tables/Table";
import useModal from "../hooks/useModal";
import { changeStatus } from "../redux/features/modalPacienteSlice";
import { useHandleClickPatient } from "../source/handles/handleClickPatient";
import { patientEmpty } from "../source/patientEmpty";
interface PacientesProps {}

const Pacientes: FunctionComponent<PacientesProps> = () => {
  const headers = Object?.keys(patientEmpty);
  const { handleDeleteClick, handleEditClick, data, isError, isLoading } =
    useHandleClickPatient();
  const { dispatch } = useModal();

  return (
    <>
      <Modal body={<FormRegister />} />

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
              onClick={() => dispatch(changeStatus())}
            >
              nuevo
              <AddUser />
            </button>
          </div>
        </div>

        {isError ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <div className="w-full flex justify-center pt-5">
            <Spinner size="lg" />
          </div>
        ) : data ? (
          <Table
            headers={headers}
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
            data={data}
          />
        ) : null}
      </div>
    </>
  );
};

export default Pacientes;
