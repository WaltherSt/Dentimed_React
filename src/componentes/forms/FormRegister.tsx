import { FunctionComponent, useState } from "react";
import useModal from "../../hooks/useModal";
import { changeStatus } from "../../redux/features/modalPacienteSlice";
import {
  useCreatePatientMutation,
  useGetPatientsQuery,
} from "../../redux/service/patientApi";

interface FormRegisterProps {}

const FormRegister: FunctionComponent<FormRegisterProps> = () => {
  const [addPatient] = useCreatePatientMutation();
  const { refetch } = useGetPatientsQuery(null);

  const { dispatch } = useModal();

  const [patient, setPatient] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    correo: "",
    direccion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setPatient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    await addPatient(patient);
    refetch();
    dispatch(changeStatus());
  };

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="pb-[8px] ">Cedula</label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100  "
          type="text"
          name="cedula"
          value={patient.cedula}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="pb-[8px]">Nombres</label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100 "
          type="text"
          name="nombres"
          value={patient.nombres}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="pb-[8px]">Apellidos</label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100"
          type="text"
          name="apellidos"
          value={patient.apellidos}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label className=" pb-[2px]">Telefono</label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100"
          type="text"
          name="telefono"
          value={patient.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className=" pb-[8px]">Correo</label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100 "
          type="text"
          name="correo"
          value={patient.correo}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="pb-[8px]">Dirección</label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100"
          type="text"
          name="direccion"
          value={patient.direccion}
          onChange={handleChange}
        />
      </div>

      <button className="w-full bg-sky-300 p-2 text-white rounded hover:bg-sky-400 mt-2 font-normal">
        Registrar
      </button>
    </form>
  );
};

export default FormRegister;
