import { white, keyColor } from '../../../utils/color';

export enum CheckboxColor {
  ACTIVE = 'active',
  DISABLED = 'normal',
}

export const CheckboxColors = {
  [CheckboxColor.ACTIVE]: keyColor,
  [CheckboxColor.DISABLED]: white,
};

export const CheckboxTextColors = {
  [CheckboxColor.ACTIVE]: white,
  [CheckboxColor.DISABLED]: white,
};
