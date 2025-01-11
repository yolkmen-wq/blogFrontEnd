import { createSlice } from "@reduxjs/toolkit";

interface VisitorInfo{
  id: string;
  username: string;
  email: string;
  ip: string;
}
interface VisitorState {
  visitorInfo: Partial<VisitorInfo>;
}

const initialState: VisitorState =
  localStorage.getItem("visitor") !== null
    ? JSON.parse(localStorage.getItem("visitor") as string)
    : {
        id: "",
        username: "",
        email: "",
        ip: "",
      };

const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    setVisitorInfo(state, action) {
      state.visitorInfo = action.payload;
      console.log(29,state.visitorInfo);
      localStorage.setItem("visitor", JSON.stringify(action.payload));
    },
  },
});

export const { setVisitorInfo } = visitorSlice.actions;

export default visitorSlice.reducer;
