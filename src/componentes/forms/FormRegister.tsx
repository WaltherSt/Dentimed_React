import { Spinner } from "@nextui-org/react";
import { FunctionComponent, useEffect, useState } from "react";
import useModal from "../../hooks/useModal";
import { isEditMode } from "../../redux/features/isEditSlice";
import { changeStatus } from "../../redux/features/modalPacienteSlice";
import { useAppSelector } from "../../redux/hooks";
import {
  Patient,
  useCreatePatientMutation,
  useGetPatientsQuery,
  useUpdatePatientMutation,
} from "../../redux/service/patientApi";

interface FormRegisterProps {}

const FormRegister: FunctionComponent<FormRegisterProps> = () => {
  const [addPatient] = useCreatePatientMutation();
  const [updatePatient, { isLoading }] = useUpdatePatientMutation();

  const { refetch } = useGetPatientsQuery(null);
  const isEdit = useAppSelector((state) => state.isEditSlice.value);
  const data: Patient = useAppSelector((state) => state.patientSelectSlice);

  const { dispatch } = useModal();

  const [patient, setPatient] = useState<Patient>({
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    correo: "",
    direccion: "",
  });

  useEffect(() => {
    if (isEdit) {
      setPatient(data);
    }
  }, [isEdit, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setPatient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isEdit) {
      await updatePatient({ patient });
      await refetch();
      dispatch(isEditMode({ activeModeEdit: false }));
      dispatch(changeStatus());
    } else {
      await addPatient(patient);
      await refetch();
      dispatch(changeStatus());
    }
  };

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      {isLoading ? <Spinner /> : null}
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
        {isEdit ? "Editar" : "Registrar"}
      </button>
    </form>
  );
};

export default FormRegister;
