import React from 'react';
import styled from 'styled-components';
import { BadgeColors, BadgeTextColors } from './interface';

interface BadgeProps {
  children: string;
  color: 'active' | 'disabled';
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { color, children, ...restProps } = props;

  return (
    <StyledBadge color={color} {...restProps}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 24px;
  background-color: ${(props) => BadgeColors[props.color]};
  color: ${(props) => BadgeTextColors[props.color]};
  font-size: 12px;
`;
