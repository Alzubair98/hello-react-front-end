import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const LOADING = "LOADING";
const url = "http://127.0.0.1:3000/api/v1/greetings";

export const loadgreet = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(url).catch((error) => {
    console.log("Error", error);
  });
  const data = response.map((greet) => ({
    name: greet.message,
  }));
  return data;
});

const storeSlice = createSlice({
  name: "Greetings",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadgreet.fulfilled, (state, action) => action.payload);
  },
});

export const dataAction = storeSlice.actions;
export default storeSlice.reducer;
