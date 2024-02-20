import { Spinner } from "@nextui-org/react";
import { FunctionComponent, useEffect, useState } from "react";
import useModal from "../../hooks/useModal";
import { isEditMode } from "../../redux/features/isEditSlice";
import { changeStatus } from "../../redux/features/modalPacienteSlice";
import { useAppSelector } from "../../redux/hooks";
import {
  Patient,
  useCreatePatientMutation,
  useUpdatePatientMutation,
} from "../../redux/service/patientApi";
import { patientEmpty } from "../../source/patientEmpty";

interface FormRegisterProps {}

const FormRegister: FunctionComponent<FormRegisterProps> = () => {
  const [addPatient, { isLoading: isLoadingAdd }] = useCreatePatientMutation();
  const [updatePatient, { isLoading: isLoadingUpdate }] =
    useUpdatePatientMutation();
  const isEdit = useAppSelector((state) => state.isEditSlice.value);

  const patientSelected: Patient = useAppSelector(
    (state) => state.patientSelectSlice
  );

  const { dispatch } = useModal();
  const [patient, setPatient] = useState<Patient>(patientEmpty);

  useEffect(() => {
    if (isEdit) {
      setPatient(patientSelected);
    }
  }, [isEdit, patientSelected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setPatient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSavePatient = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isEdit) {
      await updatePatient({ patient: patient });
      dispatch(isEditMode({ activeModeEdit: false }));
      dispatch(changeStatus());
    } else {
      await addPatient(patient);
      dispatch(changeStatus());
    }
  };

  return (
    <form
      className="flex flex-col gap-2 w-full relative"
      onSubmit={handleSavePatient}
    >
      {isLoadingAdd || isLoadingUpdate ? (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <Spinner />
        </div>
      ) : null}
      <div className="flex flex-col">
        <label className="pb-[8px] " htmlFor="cedula">
          Cedula
        </label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100  "
          type="text"
          name="cedula"
          value={patient.cedula}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="pb-[8px]" htmlFor="nombres">
          Nombres
        </label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100 "
          type="text"
          name="nombres"
          value={patient.nombres}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="pb-[8px]" htmlFor="apellidos">
          Apellidos
        </label>
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
        <label className=" pb-[8px]" htmlFor="correo">
          Correo
        </label>
        <input
          className="px-2 w-full h-10 rounded bg-gray-100 "
          type="text"
          name="correo"
          value={patient.correo}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="pb-[8px]" htmlFor="direccion">
          Dirección
        </label>
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
