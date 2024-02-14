import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TeethObject {
  id: number;
  state: string;
}
const initialState: TeethObject[] = [
  { id: 18, state: "Sano" },
  { id: 17, state: "Sano" },
  { id: 16, state: "Sano" },
  { id: 15, state: "Sano" },
  { id: 14, state: "Sano" },
  { id: 13, state: "Sano" },
  { id: 12, state: "Sano" },
  { id: 11, state: "Sano" },
  { id: 21, state: "Sano" },
  { id: 22, state: "Sano" },
  { id: 23, state: "Sano" },
  { id: 24, state: "Sano" },
  { id: 25, state: "Sano" },
  { id: 26, state: "Sano" },
  { id: 27, state: "Sano" },
  { id: 28, state: "Sano" },
  { id: 55, state: "Sano" },
  { id: 54, state: "Sano" },
  { id: 53, state: "Sano" },
  { id: 52, state: "Sano" },
  { id: 51, state: "Sano" },
  { id: 61, state: "Sano" },
  { id: 62, state: "Sano" },
  { id: 63, state: "Sano" },
  { id: 64, state: "Sano" },
  { id: 65, state: "Sano" },
  { id: 85, state: "Sano" },
  { id: 84, state: "Sano" },
  { id: 83, state: "Sano" },
  { id: 82, state: "Sano" },
  { id: 81, state: "Sano" },
  { id: 71, state: "Sano" },
  { id: 72, state: "Sano" },
  { id: 73, state: "Sano" },
  { id: 74, state: "Sano" },
  { id: 75, state: "Sano" },
  { id: 48, state: "Sano" },
  { id: 47, state: "Sano" },
  { id: 46, state: "Sano" },
  { id: 45, state: "Sano" },
  { id: 44, state: "Sano" },
  { id: 43, state: "Sano" },
  { id: 42, state: "Sano" },
  { id: 41, state: "Sano" },
  { id: 31, state: "Sano" },
  { id: 32, state: "Sano" },
  { id: 33, state: "Sano" },
  { id: 34, state: "Sano" },
  { id: 35, state: "Sano" },
  { id: 36, state: "Sano" },
  { id: 37, state: "Sano" },
  { id: 38, state: "Sano" },
];

const teethObjectSlice = createSlice({
  name: "objectTeeth",
  initialState,
  reducers: {
    updateTooth: (
      state,
      { payload: { id, status } }: PayloadAction<{ id: number; status: string }>
    ) => {
      state.forEach((element) => {
        if (element.id === id) {
          element.state = status;
        }
      });
    },
  },
});

export const { updateTooth } = teethObjectSlice.actions;
export default teethObjectSlice.reducer;
