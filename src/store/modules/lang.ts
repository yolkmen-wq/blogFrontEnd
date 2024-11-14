import { createSlice } from "@reduxjs/toolkit";

interface LangState {
  lang: string;
}

const initialState: LangState = {
  lang: "zh-CN",
};
const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang(state, action) {
      state.lang = action.payload;
    },
  },
});
export const { setLang } = langSlice.actions;
export default langSlice.reducer;
