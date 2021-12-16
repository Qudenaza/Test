import { GoodsKeys } from '../const';
import { AdaptedGoodsData, GoodsData } from '../types/state'

export const adaptToClient = (goods: GoodsData[]): AdaptedGoodsData => {
  const hash: AdaptedGoodsData = {};
  
  goods.forEach((item) => {
    if (hash[item[GoodsKeys.Group]]) {
      return hash[item[GoodsKeys.Group]].push(item);
    }

    return hash[item[GoodsKeys.Group]] = [item];
  });
  

  return hash;
}