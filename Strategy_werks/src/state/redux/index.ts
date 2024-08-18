import { initialState } from "./state";
import tableReducer from "./reducer";
import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: 'example',
    initialState,
    reducers: tableReducer,
  });

const tableActions = tableSlice.actions
export {tableActions};
export default tableSlice.reducer


