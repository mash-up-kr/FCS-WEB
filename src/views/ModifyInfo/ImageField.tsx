import styled from 'styled-components';
import React, { useRef } from 'react';

import ProfileIcon from '../../assets/ic-profile-edit.png';

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  url?: string | null;
}

const ImageField: React.FC<Props> = ({ onChange, url, ...otherProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Wrapper {...otherProps}>
      <DefaultProfile onClick={handleClick}>
        이미지 등록
        {url && <Profile src={url} alt="프로필 이미지" />}
      </DefaultProfile>
      <InputBox
        id="profile"
        ref={inputRef}
        type="file"
        accept="image/x-png,image/jpeg,image/heic"
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const DefaultProfile = styled.button`
  width: 105px;
  height: 105px;
  border: none;
  border-radius: 50%;
  background: url(${ProfileIcon}) no-repeat;
  text-indent: -9999px;

  &:focus {
    outline: none;
  }
`;
const Profile = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;
const InputBox = styled.input`
  display: none;
`;

export default ImageField;
