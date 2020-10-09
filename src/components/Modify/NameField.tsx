import React from 'react';
import styled from 'styled-components';
import { gray7, keyColor } from '../../utils/color';

interface NameFieldProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameField: React.FC<NameFieldProps> = props => {
  const { value, onChange, ...otherProps } = props;

  return (
    <Wrapper {...otherProps}>
      <InputField id="name" type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  min-height: 21px;
  border: none;
  color: ${gray7};
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  cursor: pointer;

  &:focus {
    border: none;
    border-bottom: 2px solid ${keyColor};
    outline: none;
  }
`;

export default NameField;
