import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  status: "Sano",
};
const toothSelectSlice = createSlice({
  name: "tooth",
  initialState,
  reducers: {
    setIdTooth: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      state.id = id;
    },
    setStatus: (
      state,
      { payload: { estado } }: PayloadAction<{ estado: string }>
    ) => {
      state.status = estado;
    },
  },
});

export const { setIdTooth, setStatus } = toothSelectSlice.actions;
export default toothSelectSlice.reducer;
