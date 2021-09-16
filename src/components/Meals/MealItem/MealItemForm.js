import { useRef, useState } from 'react';
import styled from 'styled-components';
import Input from '../../UI/Input';

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    onAddToCart(enteredAmount);
  };
  const formChangeHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (!enteredAmount || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
  };
  return (
    <Form onSubmit={submitHandler} onChange={formChangeHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <small className="error">Please enter a valid amount (1-5)</small>
      )}
    </Form>
  );
};

export default MealItemForm;

const Form = styled.form`
  /* text-align: right; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    background-color: #641e03;
    border-color: #641e03;
  }

  .error {
    color: red;
    font-weight: bold;
  }
`;
