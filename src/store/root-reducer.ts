import { combineReducers } from 'redux';
import goods from './goods/goods';
import meta from './meta/meta';
import cart from './cart/cart';

export enum NameSpace {
  Goods = 'GOODS',
  Meta = 'META',
  Cart = 'CART',
}

export const rootReducer = combineReducers({
  [NameSpace.Goods]: goods,
  [NameSpace.Meta]: meta,
  [NameSpace.Cart]: cart,
});

export type RootState = ReturnType<typeof rootReducer>;