import { configureStore } from '@reduxjs/toolkit';
import resourceReducer from '../reducers/resourceSlice';
import inputsearchReducer from '../reducers/inputsearchSlice';

const store = configureStore({
  reducer: {
    resources: resourceReducer,
    inputsearch: inputsearchReducer,
  },
});

export default store;