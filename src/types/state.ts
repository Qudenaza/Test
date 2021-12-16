import { RootState } from '../store/root-reducer'

export type GoodsData = {
  "B": boolean,
  "C": number,
  "CV": null,
  "G": number,
  "P": number,
  "Pl": null,
  "T": number,
}

export type AdaptedGoodsData = {
  [key: string]: GoodsData[];
}

export type GoodsNames = {
  [key: string]: {
    'G': string;
    'C'?: number;
    'B': {
      [key: string]: {
        'N': string;
        'T': number | string;
      }
    }
  }
}

export type GoodsGroup = {
  'G': string;
    'C'?: number;
    'B': {
      [key: string]: {
        'N': string;
        'T': number | string;
      }
    }
}

export type GoodsState = {
  goods: AdaptedGoodsData,
  names: GoodsNames,
}

export type SelectedGood = {
  name: string;
  groupId: number;
  id: number;
  price: number;
  count: number;
  maxCount: number;
}

export type SelectedGoodsState = {
  selectedGoods: SelectedGood[];
  totalPrice: number;
}

export type State = RootState;