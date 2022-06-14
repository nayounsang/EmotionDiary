import { configureStore } from '@reduxjs/toolkit';
import currentReducer from '../reducer/current.reducer';
import activeReducer from '../reducer/active.reducer';
import textReducer from '../reducer/text.reducer';



export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;


