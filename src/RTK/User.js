import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  useNavigate } from "react-router-dom";
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch("http://172.208.112.141:8000/api/v1/user/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
        
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    IsLogin: !!sessionStorage.getItem("Login"), // تعيين قيمة البداية لـ IsLogin استنادًا إلى sessionStorage
    user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null, // تعيين قيمة البداية لـ user استنادًا إلى sessionStorage
  },
  reducers: {
    AddUser(state, action) {
      const user = action.payload;
      state.user = user;
      state.IsLogin = true;
      sessionStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("Login", true);
    },
  ClearUser(state) {
      const user = "";
      state.user = user;
      state.IsLogin = false;
      sessionStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("Login", false);
      
    },
  },
});

export const {AddUser , ClearUser} = userSlice.actions

export default userSlice.reducer;
