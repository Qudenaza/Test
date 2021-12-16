import CartItem from '../cart-item/cart-item';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../store/cart/selectors';
import { selectExchangeRate } from '../../store/meta/selectors';
import { SelectedGood } from '../../types/state';
import '../../assets/scss/blocks/cart.scss';

type Props = {
  goods: SelectedGood[];
};

function CartTable({ goods }: Props): JSX.Element {
  const exchangeRate = useSelector(selectExchangeRate);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <table className='cart__table'>
      <thead>
        <tr className='cart__table-heading'>
          <th className='cart__table-cell'>Наименование товара и описание</th>
          <th className='cart__table-cell'>Количество</th>
          <th className='cart__table-cell'>Цена</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {goods.map((item) => (
          <CartItem goodData={item} key={item.id} exchangeRate={exchangeRate} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td className='cart__total-amount'>
            Общая стоимость: <span>{(totalPrice * exchangeRate).toFixed(2)} руб.</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default CartTable;
