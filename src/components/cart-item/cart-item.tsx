import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedGood } from '../../types/state';
import { updateCount as updateInitialCount } from '../../store/goods/goods';
import { updateTotalPrice, removeGood, updateCount } from '../../store/cart/cart';
import '../../assets/scss/blocks/cart.scss';

type Props = {
  goodData: SelectedGood;
  exchangeRate: number;
};

function CartItem({ goodData, exchangeRate }: Props): JSX.Element {
  const [count, setCount] = useState(goodData.count);
  const [price, setPrice] = useState(goodData.price);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateCount({
        count: count,
        id: goodData.id,
      })
    );

    dispatch(
      updateInitialCount({
        groupId: goodData.groupId,
        id: goodData.id,
        count: goodData.maxCount - count,
      })
    );

    dispatch(updateTotalPrice());

    // eslint-disable-next-line
  }, [count]);

  const handleCountChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = +evt.target.value;

    setPrice(value * goodData.price);

    setCount(value);
  };

  const handleRemoveButtonClick = () => {
    dispatch(removeGood(goodData.id));

    dispatch(updateTotalPrice());

    dispatch(
      updateInitialCount({
        groupId: goodData.groupId,
        id: goodData.id,
        count: goodData.maxCount,
      })
    );
  };

  return (
    <tr className='cart__item'>
      <td className='cart__table-cell'>{goodData.name}</td>
      <td className='cart__table-cell'>
        <input type='number' className='cart__input' value={count} onChange={handleCountChange} min='0' max={goodData.maxCount} onKeyPress={(evt) => evt.preventDefault()} />
      </td>
      <td className='cart__table-cell cart__table-cell--price'>
        {(price * exchangeRate).toFixed(2)} руб <span>/ шт.</span>
      </td>
      <td>
        <button className='cart__delete' onClick={handleRemoveButtonClick}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
