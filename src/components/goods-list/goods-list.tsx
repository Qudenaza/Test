import React, { useState } from 'react';
import GoodsItem from '../goods-item/goods-item';
import { GoodsKeys } from '../../const';
import { useSelector } from 'react-redux';
import { selectSingleGood } from '../../store/goods/selectors';
import { selectExchangeRate } from '../../store/meta/selectors';
import { GoodsData } from '../../types/state';
import cn from 'classnames';
import '../../assets/scss/blocks/goods.scss';

type Props = {
  groupId: number;
  goodsList: GoodsData[];
};

function GoodsList({ groupId = Infinity, goodsList }: Props): JSX.Element | null {
  const goodsGroup = useSelector(selectSingleGood(groupId));
  const exchangeRate = useSelector(selectExchangeRate);
  const [isExpanded, setExpanded] = useState(true);

  if (!goodsGroup) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={cn('goods__list', { 'goods__list--expanded': isExpanded })}>
      <h2 className='goods__title' onClick={() => setExpanded(!isExpanded)}>
        {goodsGroup[GoodsKeys.Group]}
      </h2>
      <div className='goods__wrapper'>
        {goodsList.map((item) => {
          return <GoodsItem goodParams={item} key={item[GoodsKeys.GoodID]} goodsGroup={goodsGroup} exchangeRate={exchangeRate} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(GoodsList);
