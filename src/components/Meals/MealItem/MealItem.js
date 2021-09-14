import styled from 'styled-components';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <StyledMealItem>
      <div>
        <h3>{name}</h3>
        <MealDescription>{description}</MealDescription>
        <MealPrice>{formattedPrice}</MealPrice>
      </div>
      <div>
        <MealItemForm id={id} />
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
