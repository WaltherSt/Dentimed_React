import { FunctionComponent } from "react";
import { useOutletContext } from "react-router-dom";
import FormRegister from "../forms/FormRegister";
import AddUser from "../icons/AddUser";
import ListIcon from "../icons/ListIcon";
import Select from "../select/Select";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableProps {}

interface ModalType {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Table: FunctionComponent<TableProps> = () => {
  const data = [
    {
      documento: "987654321",
      paciente: "Juan Pérez",
      telefono: "555-1234",
      correo: "juan.perez@example.com",
      dirección: "Calle Principal 123",
      status: "Activo",
    },
    {
      documento: "987654321",
      paciente: "María González",
      telefono: "555-5678",
      correo: "maria.gonzalez@example.com",
      dirección: "Avenida Central 456",
      status: "Activo",
    },
    {
      documento: "987654321",
      paciente: "Carlos Rodríguez",
      telefono: "555-9876",
      correo: "carlos.rodriguez@example.com",
      dirección: "Calle Secundaria 789",
      status: "Inactivo",
    },
    {
      documento: "987654321",
      paciente: "Ana Martínez",
      telefono: "555-4321",
      correo: "ana.martinez@example.com",
      dirección: "Plaza Principal 321",
      status: "Activo",
    },
    {
      documento: "987654321",
      paciente: "Luis Hernández",
      telefono: "555-8765",
      correo: "luis.hernandez@example.com",
      dirección: "Calle Peatonal 654",
      status: "Inactivo",
    },
    {
      documento: "987654321",
      paciente: "Juan Pérez",
      telefono: "555-1234",
      correo: "juan.perez@example.com",
      dirección: "Calle Principal 123",
      status: "Activo",
    },
    {
      documento: "987654321",
      paciente: "María González",
      telefono: "555-5678",
      correo: "maria.gonzalez@example.com",
      dirección: "Avenida Central 456",
      status: "Activo",
    },
    {
      documento: "987654321",
      paciente: "Carlos Rodríguez",
      telefono: "555-9876",
      correo: "carlos.rodriguez@example.com",
      dirección: "Calle Secundaria 789",
      status: "Inactivo",
    },
    {
      documento: "987654321",
      paciente: "Ana Martínez",
      telefono: "555-4321",
      correo: "ana.martinez@example.com",
      dirección: "Plaza Principal 321",
      status: "Activo",
    },
    {
      documento: "987654321",
      paciente: "Luis Hernández",
      telefono: "555-8765",
      correo: "luis.hernandez@example.com",
      dirección: "Calle Peatonal 654",
      status: "Inactivo",
    },
    {
      documento: "987654321",
      paciente: "Juan Pérez",
      telefono: "555-1234",
      correo: "juan.perez@example.com",
      dirección: "Calle Principal 123",
      status: "Activo",
    },
    {
      documento: "987654321",
      paciente: "María González",
      telefono: "555-5678",
      correo: "maria.gonzalez@example.com",
      dirección: "Avenida Central 456",
      status: "Activo",
    },
    {
      documento: "987654321",
      paciente: "Carlos Rodríguez",
      telefono: "555-9876",
      correo: "carlos.rodriguez@example.com",
      dirección: "Calle Secundaria 789",
      status: "Inactivo",
    },
  ];

  const headers = Object.keys(data[0]);

  const { modal, setModal } = useOutletContext<ModalType>();

  function openModal() {
    setModal(!modal);
  }

  function closeModal(e: MouseEvent) {
    if (e.target.id == "contentModal") {
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

        <table className="w-full bg-white shadow">
          <TableHeader headers={headers} />
          <TableBody data={data} />
        </table>

        <Pagination />
      </div>
    </div>
  );
};

export default Table;
