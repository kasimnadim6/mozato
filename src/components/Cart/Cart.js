import Modal from '../UI/Modal';
import classes from './Cart.module.scss';

const Cart = ({ onClose }) => {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: '2.99' }].map(
    (item) => {
      <li>{item.name}</li>;
    }
  );
  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close{' '}
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
