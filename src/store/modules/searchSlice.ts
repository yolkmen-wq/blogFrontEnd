import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  isShowSearch: boolean;
}

const initialState: SearchState = {
  isShowSearch: false,
};

export const SearchSLice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsShowSearch: (state) => {
      console.log(18);
      state.isShowSearch = !state.isShowSearch;
    },
    // setIsShowSearch: (state, action: PayloadAction<boolean>) => {
    //   state.isShowSearch = action.payload;
    // },
  },
});

export const { setIsShowSearch } = SearchSLice.actions;

export default SearchSLice.reducer;
