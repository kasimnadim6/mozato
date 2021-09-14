import styled from 'styled-components';

const Input = ({ label, input }) => {
  return (
    <StyledInput>
      <label htmlFor={input.id}>{label}</label>
      <input type="text" {...input} />
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;
