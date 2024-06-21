import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ButtonProps {
  variant: 'contained' | 'text';
  color: 'blue' | 'red';
  children: React.ReactNode;
}

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

const getColor = (color: 'blue' | 'red', variant: 'contained' | 'text') => {
  const colors = {
    blue: {
      background: variant === 'contained' ? '#2196f3' : 'transparent',
      hoverBackground: variant === 'contained' ? '#1976d2' : '#e3f2fd',
      textColor: variant === 'contained' ? 'white' : '#2196f3',
      afterColor: variant === 'contained' ? 'white' : '#2196f3',
    },
    red: {
      background: variant === 'contained' ? '#f44336' : 'transparent',
      hoverBackground: variant === 'contained' ? '#d32f2f' : '#fdecea',
      textColor: variant === 'contained' ? 'white' : '#f44336',
      afterColor: variant === 'contained' ? 'white' : '#f44336',
    }
  };
  return colors[color];
};

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  width: 100px;  
  height: 100px;  
  background-color: ${(props) => getColor(props.color, props.variant).background};
  color: ${(props) => getColor(props.color, props.variant).textColor};
  border: ${(props) => (props.variant === 'contained' ? 'none' : `1px solid ${getColor(props.color, props.variant).textColor}`)};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => getColor(props.color, props.variant).hoverBackground};
    animation: ${pulseAnimation} 0.5s ease-in-out;
  }

  &:hover::after {
    content: '${(props) => (props.variant === 'contained' ? '!' : '')}';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    color: ${(props) => getColor(props.color, props.variant).afterColor};
    font-size: 24px;
    font-weight: bold;
  }
`;

export default StyledButton;