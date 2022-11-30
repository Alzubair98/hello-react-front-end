import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const LOADING = "LOADING";
const url = "http://localhost:3000/api/v1/greetings";

export const loadgreet = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(url).catch((error) => {
    console.log("Error", error);
  });
  const res = response.data;
  const data = res.map((greet) => ({
    name: greet.message,
    id: greet.id,
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

export default storeSlice.reducer;
