// TODOLIST: 색깔 밖으로 뺴야할듯??

const WHITE = '#fff';
const BLACK = '#000';
const COLOR_MINT = '#68e1de';
const COLOR_GRAY = '#cfcfd0';

// TODOLIST: 색깔 채우기

export enum BadgeColor {
  PRIMARY = 'primary',
  MINT = 'mint',
  GRAY = 'gray',
}

export const BadgeColors = {
  [BadgeColor.PRIMARY]: BLACK,
  [BadgeColor.MINT]: COLOR_MINT,
  [BadgeColor.GRAY]: COLOR_GRAY,
};

export const BadgeTextColors = {
  [BadgeColor.PRIMARY]: WHITE,
  [BadgeColor.MINT]: WHITE,
  [BadgeColor.GRAY]: WHITE,
};
