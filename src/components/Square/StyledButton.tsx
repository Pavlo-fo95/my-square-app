import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ButtonProps {
  color: 'red' | 'blue';
}

// Определяем keyframes для анимации
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledButton = styled.button<ButtonProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.color === 'red' ? '#f44336' : '#2196f3')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: ${(props) => (props.color === 'red' ? '#d32f2f' : '#1976d2')};
    animation: ${pulseAnimation} 0.5s ease-in-out;
  }
`;

const StyledButtonComponent: React.FC<ButtonProps> = ({ color }) => {
  return (
    <StyledButton color={color}>
      Квадратик
    </StyledButton>
  );
}

export default StyledButtonComponent;