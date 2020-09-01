import React from 'react';
import styled from 'styled-components';
import { gray0, gray7 } from '../../../../utils/color';
import PLUS from '../../../../assets/ic_plus_white.png';

export const UploadButton: React.FC = props => {
  const { children, ...restProps } = props;

  return (
    <Button {...restProps}>
      {children}
      <Icon src={PLUS} alt="addIcon" />
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border: 0;
  border-radius: 2px;
  background-color: ${gray7};
  color: ${gray0};
  padding-left: 15px;
  font-weight: normal;
`;

const Icon = styled.img`
  width: 24px;
  height: auto;
  margin-right: 15px;
`;
