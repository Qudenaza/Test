import { State, GoodsNames, AdaptedGoodsData } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const selectGoods = (state: State): AdaptedGoodsData => state[NameSpace.Goods].goods;
export const selectSingleGood = (id: number) => (state: State) => state[NameSpace.Goods].names[id];
export const selectNames = (state: State): GoodsNames => state[NameSpace.Goods].names;
