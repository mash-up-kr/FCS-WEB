import React from 'react';
import styled from 'styled-components';
import { BadgeColors, BadgeTextColors } from './interface';

interface BadgeProps {
  children: string;
  color: 'active' | 'disabled';
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Badge: React.FC<BadgeProps> = props => {
  const { color, children, onClick, ...restProps } = props;

  return (
    <StyledBadge onClick={onClick} color={color} {...restProps}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => BadgeColors[props.color]};
  color: ${props => BadgeTextColors[props.color]};
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 2px;
  font-weight: bold;
`;
