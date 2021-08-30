import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;

const StyledCard = styled.div`
  padding: 1.3rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;
