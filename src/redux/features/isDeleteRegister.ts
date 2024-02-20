import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const isDeleteRegister = createSlice({
  name: "is-delete-register",
  initialState,
  reducers: {
    isdelete: (
      state,
      {
        payload: { deleteRegister },
      }: PayloadAction<{ deleteRegister: boolean }>
    ) => {
      state.value = deleteRegister;
    },
  },
});

export const { isdelete } = isDeleteRegister.actions;
export default isDeleteRegister.reducer;
