import React from 'react';
import styled from 'styled-components';
import NORMAL from '../../../assets/IC_Checkbox_normal.svg';
import ACTIVE from '../../../assets/IC_Checkbox_active.svg';

interface CheckboxProps {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = props => {
  const { checked, onChange, ...otherProps } = props;

  return (
    <CheckboxContainer {...otherProps}>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <CheckboxLabel />
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  margin: 1px;
`;
const CheckboxLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(${NORMAL});
  transition: all 150ms;
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  /* clip: rect(0 0 0 0);
  clip-path: inset(50%); */
  /* opacity: 0; */
  height: 20px;
  width: 20px;
  opacity: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  &:checked + ${CheckboxLabel} {
    background: url(${ACTIVE});
  }
`;

export default Checkbox;
