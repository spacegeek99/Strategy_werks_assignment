export interface tableState {
    value: number;
    list: [],
    tableError: unknown,
    loading:Boolean
  }

 export const initialState: tableState = {
    value: 10,
    list: [],
    tableError: null,
    loading: false
  };