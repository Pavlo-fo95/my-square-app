import React from 'react';
import StyledButton from './StyledButton';

const StyledButtonComponent: React.FC = () => {
  return (
    <>
      <StyledButton variant="contained" color="blue">Click me!</StyledButton>
      <StyledButton variant="contained" color="red">Click!!!</StyledButton>
    </>
  );
}

export default StyledButtonComponent;