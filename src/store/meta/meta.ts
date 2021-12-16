import { createSlice } from '@reduxjs/toolkit';
import { ExchangeRate } from '../../const';

const initialState: {
  [key: string]: number;
} = {
  'USD/RUB': 76.88,
};

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    updateRate(state, action) {
      state[ExchangeRate.USD] = action.payload;
    }
  },
});

export const { updateRate } = metaSlice.actions;
export default metaSlice.reducer;