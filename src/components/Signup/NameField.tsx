import React from 'react';
import styled from 'styled-components';
import { gray6, gray10, keyColor } from '../../utils/color';

interface NameFieldProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameField: React.FC<NameFieldProps> = props => {
  const { value, onChange, ...otherProps } = props;

  return (
    <Wrapper {...otherProps}>
      <InputField id="name" type="text" value={value} onChange={onChange} placeholder="닉네임" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  min-height: 40px;
  border: none;
  border-bottom: 2px solid ${gray6};
  color: ${gray10};
  font-size: 18px;
  line-height: normal;
  width: 300px;
  font-weight: bold;

  &:focus {
    border: none;
    border-bottom: 2px solid ${keyColor};
  }
`;

export default NameField;
