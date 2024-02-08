import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import modalSlice from "./features/modalPacienteSlice";

import teethObjectSlice from "./features/teethObjectSlice";
import toothSelectSlice from "./features/toothSelectSlice";

export const store = configureStore({
  reducer: { counterSlice, modalSlice, toothSelectSlice, teethObjectSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
