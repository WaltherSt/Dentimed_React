import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ToothObject {
  id: number;
  status: string;
}

const initialState: ToothObject[] = [];

const teethContainerSlice = createSlice({
  name: "teeth",
  initialState,
  reducers: {
    addTooth: (
      state,
      { payload: { id, status } }: PayloadAction<{ id: number; status: string }>
    ) => {
      state.push({ id, status });
    },
  },
});

export const { addTooth} = teethContainerSlice.actions;
export default teethContainerSlice.reducer;
