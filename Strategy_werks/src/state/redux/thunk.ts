import { createAsyncThunk } from "@reduxjs/toolkit";
import { tableActions } from ".";
import {  message } from 'antd';



interface fetchData {
  fakeDataUrl: string, 
  prevList: []
}

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ( {fakeDataUrl, prevList}:fetchData,   thunkAPI) => {
    try {
      let newList =[];
      thunkAPI.dispatch(tableActions.setLoading(true))
      const response =  await fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        return body
      });
      if(response) {
        newList = [...prevList, ...response?.results]
        thunkAPI.dispatch(tableActions.setListValue(newList));
        message.success(`${response?.results.length} more items loaded!`);
      }
    } catch (err: any) {
      thunkAPI.dispatch(tableActions.setErrorTable(err));
    }finally{
      thunkAPI.dispatch(tableActions.setLoading(false))
    }
  }
);