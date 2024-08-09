import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    data:{},
    isLoading:false,
    error: {}
}

const registration = createSlice({
  name: 'registration',
  initialState,
  reducers: {

    UserRequest : (state,action)=>{
      state.isLoading = true
    },

    UserSuc : (state,action)=>{
      state.isLoading = false,
      state.data = action.payload;

    },

    UserError : (state,action)=>{
      state.isLoading = false,
      state.error = action.payload;
    }



  }
});

export const {UserRequest,UserSuc,UserError} = registration.actions

export default registration.reducer