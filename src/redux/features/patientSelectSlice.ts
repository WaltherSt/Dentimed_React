import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
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
  name: "patient-selected",
  initialState,
  reducers: {
    setPatientSelected: (
      state,
      { payload: { data } }: PayloadAction<{ data: Patient }>
    ) => {
      return { ...state, ...data };
    },
  },
});

export const { setPatientSelected } = patientSelectSlice.actions;
export default patientSelectSlice.reducer;
