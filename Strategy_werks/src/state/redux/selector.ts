import { RootState } from "../store";

export const selector = {
     getTableList:({table}:RootState) =>{
        return table.list   
    },
    getLoading:({table}:RootState) =>{
        return table.loading  
    }
}