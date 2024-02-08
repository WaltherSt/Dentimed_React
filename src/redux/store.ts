import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import modalSlice from "./features/modalPacienteSlice";
import teethContainerSlice from "./features/teethContainerSlice";
import toothSelectSlice from './features/toothSelectSlice';

export const store = configureStore({
  reducer: { counterSlice,modalSlice,toothSelectSlice,teethContainerSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
