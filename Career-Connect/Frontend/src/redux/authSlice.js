import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

//export the actions
export const { setLoading, setUser } = authSlice.actions;

//export the reducer
export default authSlice.reducer;

//export the auth slice reducer for use in other parts of the app
export const authSliceReducer = authSlice.reducer; // Add this line if you want to use the reducer