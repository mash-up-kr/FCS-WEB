import React from 'react';
import * as icons from './icons';
import styled from 'styled-components';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export interface Props {
  icon: IconType;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
  className?: string;
}

export const Icon: React.FC<Props> = ({ icon, color, size, className, style, ...restProps }) => {
  const SVGIcon = icons[icon];

  return <StyledIcon style={style} color={color} width={size} className={className} {...restProps} src={SVGIcon} />;
};

const StyledIcon = styled.img``;
