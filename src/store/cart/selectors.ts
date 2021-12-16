import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const selectGood = (id: number) => (state: State) => state[NameSpace.Cart].selectedGoods.find((item) => item.id === id);
export const selectGoods = (state: State) => state[NameSpace.Cart].selectedGoods;
export const selectTotalPrice = (state: State) => state[NameSpace.Cart].totalPrice;
