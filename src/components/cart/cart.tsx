import { useSelector } from 'react-redux';
import CartTable from '../cart-table/cart-table';
import { selectGoods } from '../../store/cart/selectors';
import '../../assets/scss/blocks/cart.scss';

function Cart(): JSX.Element | null {
  const goods = useSelector(selectGoods);

  if (!goods.length) {
    return null;
  }

  return (
    <section className='cart container'>
      <CartTable goods={goods} />
    </section>
  );
}

export default Cart;
