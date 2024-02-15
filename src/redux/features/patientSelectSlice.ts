import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Patient } from "../service/patientApi";

const initialState: Patient = {
  cedula: "",
  nombres: "",
  apellidos: "",
  telefono: "",
  correo: "",
  direccion: "",
};

export const patientSelectSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setPatientSelect: (
      state,
      {
        payload: { name, change },
      }: PayloadAction<{ name: string; change: string }>
    ) => {
      state[name] = change;
    },
  },
});

export const { setPatientSelect } = patientSelectSlice.actions;
export default patientSelectSlice.reducer;
