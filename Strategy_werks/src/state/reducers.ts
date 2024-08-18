// src/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import tableReducer from "./redux/index"

const rootReducer = combineReducers({
  table: tableReducer,
  // Add other reducers here
});

export default rootReducer;
