import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const isEditSlice = createSlice({
  name: "is-edit",
  initialState,
  reducers: {
    isEditMode: (
      state,
      {
        payload: { activeModeEdit },
      }: PayloadAction<{ activeModeEdit: boolean }>
    ) => {
      state.value = activeModeEdit;
    },
  },
});

export const { isEditMode } = isEditSlice.actions;
export default isEditSlice.reducer;
