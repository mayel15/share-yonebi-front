import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputSearch: '',
  isClicked: false,
};

const inputsearchSlice = createSlice({
  name: 'inputsearch',
  initialState,
  reducers: {
    setInputSearch: (state, action) => {
      state.inputSearch = action.payload;
    },
    setIsClicked: (state, action) => {
        state.isClicked = action.payload;
      },
  },
});

export const { setInputSearch, setIsClicked } = inputsearchSlice.actions;
export default inputsearchSlice.reducer;