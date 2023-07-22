import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: [],
};

const resourceSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setResult } = resourceSlice.actions;
export default resourceSlice.reducer;