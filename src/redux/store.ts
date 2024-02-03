import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import modalSlice from "./features/modalPacienteSlice";

export const store = configureStore({
  reducer: { counterSlice,modalSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
