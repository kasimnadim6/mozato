import CartIcon from '../../assets/icons/CartIcon';
import classes from './HeaderCartButton.module.scss';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ''
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => setIsButtonHighlighted(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
