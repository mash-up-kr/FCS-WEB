import { white, keyColor, gray3 } from '../../../utils/color';

export enum BadgeColor {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export const BadgeColors = {
  [BadgeColor.ACTIVE]: keyColor,
  [BadgeColor.DISABLED]: gray3,
};

export const BadgeTextColors = {
  [BadgeColor.ACTIVE]: white,
  [BadgeColor.DISABLED]: white,
};
