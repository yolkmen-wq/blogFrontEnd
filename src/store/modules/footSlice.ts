import { createSlice } from "@reduxjs/toolkit";
interface FootSliceState {
  visitsCount: number;
}
const initialState: FootSliceState = {
  visitsCount: 0,
};
const footslice = createSlice({
  name: "footslice",
  initialState,
  reducers: {
    setVisitsCount: (state, payload: any) => {
      const { count } = payload.payload;
      state.visitsCount = count;
      localStorage.setItem("visitsCount", count);
    },
  },
});
export const { setVisitsCount } = footslice.actions;
export default footslice.reducer;
