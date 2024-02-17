import { Patient } from "../redux/service/patientApi";

export const usePatient = () => {
  const patient: Patient = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    correo: "",
    direccion: "",
  };

  return { patient };
};
