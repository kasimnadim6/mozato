import { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <StyledMealItem>
      <div>
        <h3>{name}</h3>
        <MealDescription>{description}</MealDescription>
        <MealPrice>{formattedPrice}</MealPrice>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCartHandler} />
      </div>
    </StyledMealItem>
  );
};

export default MealItem;

const StyledMealItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0.7rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
  h3 {
    margin: 0 0 0.25rem 0;
  }
`;
const MealDescription = styled.div`
  font-style: italic;
`;
const MealPrice = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
