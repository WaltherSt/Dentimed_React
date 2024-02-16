import { setupListeners } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit/react";
import isEditSlice from "./features/isEditSlice";
import modalSlice from "./features/modalPacienteSlice";
import patientSelectSlice from "./features/patientSelectSlice";
import teethObjectSlice from "./features/teethObjectSlice";
import toothSelectSlice from "./features/toothSelectSlice";
import { patientsApi } from "./service/patientApi";

export const store = configureStore({
  reducer: {
    isEditSlice,
    patientSelectSlice,
    modalSlice,
    toothSelectSlice,
    teethObjectSlice,
    [patientsApi.reducerPath]: patientsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([patientsApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
