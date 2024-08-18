// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust the path based on your project structure

const store = configureStore({
  reducer: rootReducer,
});

export type ReduxDispatch = (action:unknown)=>unknown
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
