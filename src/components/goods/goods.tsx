import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchNames } from '../../store/goods/goods';
import { selectGoods, selectNames } from '../../store/goods/selectors';
import { AppDispatch } from '../../store/store';
import GoodsList from '../goods-list/goods-list';
import { updateRate } from '../../store/meta/meta';
import { getRandomInteger } from '../../utils/common';
import { MIN_EXCHANGE_RATE, MAX_EXCHANGE_RATE, SERVER_INTERVAL } from '../../const';
import '../../assets/scss/blocks/goods.scss';

function Goods(): JSX.Element {
  const goods = useSelector(selectGoods);
  const names = useSelector(selectNames);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchNames());

    setInterval(() => {
      dispatch(updateRate(getRandomInteger(MIN_EXCHANGE_RATE, MAX_EXCHANGE_RATE)));
      // dispatch(fetchData());
    }, SERVER_INTERVAL);

    // eslint-disable-next-line
  }, []);

  if (!goods || !names) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className='goods container'>
      {Object.keys(goods).map((id) => {
        if (!goods[id].length) {
          return null;
        }

        return <GoodsList groupId={+id} key={id} goodsList={goods[id]} />;
      })}
    </section>
  );
}

export default React.memo(Goods);
