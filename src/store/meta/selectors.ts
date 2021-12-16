import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';
import { ExchangeRate } from '../../const';

export const selectExchangeRate = (state: State) => state[NameSpace.Meta][ExchangeRate.USD];
