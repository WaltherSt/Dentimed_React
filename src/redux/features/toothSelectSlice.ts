import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const toothSelectSlice = createSlice({
  name: "tooth",
  initialState,
  reducers: {
    setIdTooth: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      state.value = id;
    },
  },
});

export const { setIdTooth } = toothSelectSlice.actions;
export default toothSelectSlice.reducer;
