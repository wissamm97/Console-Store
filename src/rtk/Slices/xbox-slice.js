import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const axiosLoop = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  return data.Xbox;
});
export const xHead = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  return data.headphonesXbox;
});
export const Accessor = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  return data.AccessorXbox;
});
export const Dualshock = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  return data.dualshockXbox;
});
export const xGame = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  return data.xboxGame;
});

export const XboxSlice = createSlice({
  initialState: [],
  name: "xbox",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosLoop.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(xHead.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(Accessor.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(Dualshock.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(xGame.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = XboxSlice.actions;
export default XboxSlice.reducer;
