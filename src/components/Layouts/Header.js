import React from 'react';
import classes from './Header.module.scss';
import mealsImg from '../../assets/images/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Header = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
