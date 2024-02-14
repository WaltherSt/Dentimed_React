import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modal-pacientes",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeStatus } = modalSlice.actions;
export default modalSlice.reducer;
