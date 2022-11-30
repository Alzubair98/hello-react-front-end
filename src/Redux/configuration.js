import { configureStore } from '@reduxjs/toolkit';
import storeSlice from './greetings/greeting';

const store = configureStore({
  reducer: {
    storeSlice,
  },
});

export default store;
