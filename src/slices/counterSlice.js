import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getAllData = createAsyncThunk("gitUsers", async (args , {rejectWithValue})=>{
    const res = await fetch("https://api.github.com/users");
    try {
        const result = await res.json()
    return result
    } catch (error) {
      return rejectWithValue("Opps found an error")  
    }
    
})


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    users : [],
    loading : false,
    error: null,
  },
  extraReducers : {
      [getAllData.pending] : (state)=>{
          state.loading = true;
      },
      [getAllData.fulfilled] : (state ,action)=>{
          state.loading = false;
          state.users = action.payload;
      },
      [getAllData.rejected] : (state ,action)=>{
          state.loading = false;
          state.error = action.payload
      },
  }
})


export default counterSlice.reducer