import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const psLoop = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  return data.PS;
});
export const psAccessor = createAsyncThunk(
  "products/axiosproduct",
  async () => {
    const res = await axios.get("../data.json");
    const data = await res.data;
    return data.AccessorPs;
  }
);
export const psDualshock = createAsyncThunk(
  "products/axiosproduct",
  async () => {
    const res = await axios.get("../data.json");
    const data = await res.data;
    return data.dualshockPs;
  }
);
export const psGame = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  return data.GamePS;
});
export const psHead = createAsyncThunk("products/axiosproduct", async () => {
  const res = await axios.get("../data.json");
  const data = await res.data;
  return data.headphonesPs;
});

export const PsSlice = createSlice({
  initialState: [],
  name: "ps",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(psLoop.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(psAccessor.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(psDualshock.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(psGame.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(psHead.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = PsSlice.actions;
export default PsSlice.reducer;
