import React from 'react';
import styled from 'styled-components';
// import { white, gray7 } from '../../../../utils/color';

interface UploadButtonProps {
  icon: string;
}

const UploadButton: React.FC<UploadButtonProps> = (props) => {
  const { icon, ...otherProps } = props;

  return (
    <Button>
      {otherProps.children}
      <Icon src={icon} alt="addIcon" />
    </Button>
  );
};

const Button = styled.button`
  width: 335px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border: 0;
  border-radius: 2px;
  background-color: rgb(80, 81, 83);
  color: white;
  padding: 0;
`;

const Icon = styled.img`
  width: 24px;
  height: auto;
  margin-right: 15px;
`;
export default UploadButton;
