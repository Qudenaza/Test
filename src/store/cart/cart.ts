import { createSlice } from '@reduxjs/toolkit';
import { SelectedGoodsState } from '../../types/state';

const initialState: SelectedGoodsState = {
  selectedGoods: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGood(state, action) {
      const index = state.selectedGoods.findIndex((item) => item.id === action.payload.id);
      
      if (index !== -1) {
        return;
      }

      state.selectedGoods.push(action.payload);
    },
    removeGood(state, action) {
      const index = state.selectedGoods.findIndex((item) => item.id === action.payload.id);

      state.selectedGoods.splice(index, 1);
    },
    updateTotalPrice(state) {
      state.totalPrice = state.selectedGoods.reduce((prevValue, currentValue) => {
        const currentValuePrice = currentValue.price * currentValue.count;

        return prevValue + currentValuePrice;

      }, 0)
    },
    updateCount(state, action) {
      const item = state.selectedGoods.find((item) => item.id === action.payload.id);      

      item!.count = action.payload.count;
    }
  },
});

export const { addGood, removeGood, updateCount, updateTotalPrice } = cartSlice.actions
export default cartSlice.reducer;