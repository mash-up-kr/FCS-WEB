import { white, keyColor, gray2 } from '../../../utils/color';

export enum ButtonColor {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export const ButtonColors = {
  [ButtonColor.ACTIVE]: keyColor,
  [ButtonColor.DISABLED]: gray2,
};

export const ButtonTextColors = {
  [ButtonColor.ACTIVE]: white,
  [ButtonColor.DISABLED]: white,
};
