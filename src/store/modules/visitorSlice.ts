import { createSlice } from "@reduxjs/toolkit";

interface VisitorState {
  id: string;
  nickname: string;
  email: string;
  ip: string;
}

const initialState: VisitorState =
  localStorage.getItem("visitor") !== null
    ? JSON.parse(localStorage.getItem("visitor") as string)
    : {
        id: "",
        nickname: "",
        email: "",
        ip: "",
      };

const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    setVisitorInfo(state, action) {
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.ip = action.payload.ip;
      localStorage.setItem("visitor", JSON.stringify(action.payload));
    },
  },
});

export const { setVisitorInfo } = visitorSlice.actions;

export default visitorSlice.reducer;
