import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  openForm: false,
  isLogin: JSON.parse(window.localStorage.getItem("auth")) || true,
  token: JSON.parse(localStorage.getItem("token")) || null,
  myData: {},
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      window.localStorage.setItem("auth", JSON.stringify(state.isLogin));
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null;
      state.myData = null;
      window.localStorage.setItem("auth", JSON.stringify(state.isLogin));
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("token");
    },
    addToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    openForm: (state) => {
      state.openForm = true;
    },
    closeForm: (state) => {
      state.openForm = false;
    },
    addMyData: (state, action) => {
      state.myData = action.payload;
      localStorage.setItem("user", JSON.stringify(state.myData));
    },
  },
});
export const userToken = (state) => state?.authSlice?.token;
export const { login, logout, openForm, closeForm, addMyData, addToken } =
  authSlice.actions;
export default authSlice.reducer;
