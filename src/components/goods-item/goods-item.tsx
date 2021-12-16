import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoodsKeys } from '../../const';
import { GoodsData, GoodsGroup } from '../../types/state';
import { addGood } from '../../store/cart/cart';
import { HighlightColors } from '../../const';
import { useComponentDidMount } from '../../hooks/useComponentDidMount';
import '../../assets/scss/blocks/goods.scss';

type Props = {
  goodParams: GoodsData;
  goodsGroup: GoodsGroup;
  exchangeRate: number;
};

function GoodsItem({ goodsGroup, goodParams, exchangeRate }: Props): JSX.Element | null {
  const [currentRate, setRate] = useState(exchangeRate);
  const [color, setColor] = useState(HighlightColors.GREY);
  const isComponentMounted = useComponentDidMount();
  const name = goodsGroup[GoodsKeys.GoodsList][goodParams[GoodsKeys.GoodID]][GoodsKeys.GoodName];
  const dispatch = useDispatch();

  useEffect(() => {
    if (isComponentMounted) {
      setColor(currentRate > exchangeRate ? HighlightColors.GREEN : HighlightColors.RED);

      setRate(exchangeRate);

      setTimeout(() => {
        setColor(HighlightColors.GREY);
      }, 200);
    }

    // eslint-disable-next-line
  }, [exchangeRate]);

  if (!goodParams[GoodsKeys.GoodCount]) {
    return null;
  }

  const handleGoodsItemClick = () => {
    const good = {
      id: goodParams[GoodsKeys.GoodID],
      groupId: goodParams[GoodsKeys.Group],
      name: name,
      price: +goodParams[GoodsKeys.GoodPrice],
      maxCount: goodParams[GoodsKeys.GoodCount],
      count: 1,
    };

    dispatch(addGood(good));
  };

  return (
    <div className='goods__item' onClick={handleGoodsItemClick}>
      <div className='goods__name'>
        {name}
        <span className='goods__count'>({goodParams[GoodsKeys.GoodCount]})</span>
      </div>
      <div className='goods__price' style={{ backgroundColor: color }}>
        {(goodParams[GoodsKeys.GoodPrice] * exchangeRate).toFixed(2)}
      </div>
    </div>
  );
}

export default React.memo(GoodsItem);
