import React from 'react';
import classes from './Header.module.scss';
import mealsImg from '../../assets/images/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
