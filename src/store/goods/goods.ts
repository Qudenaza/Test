import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoodsState } from '../../types/state';
import { adaptToClient } from '../../services/adapter';
import data from '../../mockServer/data.json';
import names from '../../mockServer/names.json';
import { GoodsKeys } from '../../const';

const fetchData = createAsyncThunk(
  'goods/fetchData',
  async () => {
    const { Goods } = await data.Value

    return adaptToClient(Goods);
  },
);

const fetchNames = createAsyncThunk(
  'goods/fetchNames',
  async () => {
    const data = await names;

    return data;
  },
);

const initialState: GoodsState = {
  goods: {},
  names: {},
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateCount(state, action) {  
      const item = state.goods[action.payload.groupId].find((item) => item[GoodsKeys.GoodID] === action.payload.id);
      
      item![GoodsKeys.GoodCount] = action.payload.count;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.goods = action.payload;
      })
      .addCase(fetchNames.fulfilled, (state, action) => {
        state.names = action.payload;
      });
    }
});

export { fetchData, fetchNames };
export const { updateCount } = dataSlice.actions;
export default dataSlice.reducer;