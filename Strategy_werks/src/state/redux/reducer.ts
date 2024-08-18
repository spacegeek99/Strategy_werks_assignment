import { PayloadAction } from "@reduxjs/toolkit";
import { tableState} from "./state"

const tableReducer = {
      setListValue: (state: tableState, action: PayloadAction<any>) => {
        state.list = action.payload;
      },
      setErrorTable: (state: tableState, action: PayloadAction<any>) => {
        state.tableError = action.payload
      },
      setLoading: (state:tableState, action:PayloadAction<any>) =>{
        state.loading = action.payload
      }
}

export default tableReducer