import styled from 'styled-components';

const MealsSummary = () => {
  return (
    <MealsSection>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </MealsSection>
  );
};

export default MealsSummary;

const MealsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #383838;
  color: white;
  width: 90%;
  max-width: 50rem;
  margin: auto;
  padding: 4rem;
  border-radius: 5px;
  position: relative;
  margin-top: -13rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
  h2 {
    font-size: 2.5rem;
    margin: 0 0 2rem 0;
  }
  p {
    font-size: 1.2rem;
    text-align: justify;
  }
`;
