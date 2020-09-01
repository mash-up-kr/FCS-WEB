import React from 'react';
import * as icons from './icons';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface Props {
  icon: IconType;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
  className?: string;
}

export const Icon: React.FC<Props> = ({ icon, color, size, className, style, ...restProps }) => {
  const SVGIcon = icons[icon];

  return <SVGIcon style={style} color={color} size={size} className={className} {...restProps} />;
};
