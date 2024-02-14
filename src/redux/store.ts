import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import modalSlice from "./features/modalPacienteSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import teethObjectSlice from "./features/teethObjectSlice";
import toothSelectSlice from "./features/toothSelectSlice";
import { patientsApi } from "./service/patientApi";

export const store = configureStore({
  reducer: {
    counterSlice,
    modalSlice,
    toothSelectSlice,
    teethObjectSlice,
    [patientsApi.reducerPath]: patientsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([patientsApi.middleware]),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
