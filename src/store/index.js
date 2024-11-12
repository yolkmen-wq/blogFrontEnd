import { configureStore } from "@reduxjs/toolkit";

const files = require.context("./modules", true, /\.ts$/);
const reducerObj = {};
files.keys().forEach((key) => {
  const reducer = files(key).default;
  reducerObj[key.replace("./", "").replace(".ts", "")] = reducer;
});

export const store = configureStore({
  reducer: reducerObj,
});
