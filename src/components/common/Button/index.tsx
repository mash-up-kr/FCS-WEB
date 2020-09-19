import React from 'react';
import styled from 'styled-components';
import { ButtonColors, ButtonTextColors } from './interface';

interface ButtonProps {
  children: string;
  color: 'active' | 'disabled';
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) &
    ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

export const Button: React.FC<ButtonProps> = props => {
  const { color, onClick, children, ...restProps } = props;

  return (
    <StyledButton color={color} onClick={onClick} {...restProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${props => ButtonColors[props.color]};
  color: ${props => ButtonTextColors[props.color]};
  font-family: 'SpoqaHanSans';
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;
