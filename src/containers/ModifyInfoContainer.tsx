import React, { useState, useCallback, useEffect } from 'react';
import NameSection from '../views/ModifyInfo/NameSection';
import ImageField from '../views/ModifyInfo/ImageField';
import MainContentSection from '../views/Main/MainContentSection';
import ModifyInfoHeader from '../components/Modify/ModifyInfoHeader';
import { keyColor, gray1 } from '../utils/color';
import { TextButton } from '../views/Main/MainCommonUI';
import styled from 'styled-components';
import { Icon } from '../components/common/Icon';

const ModifyInfoContainer: React.FC = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const image_list = new Array();
    const image = event.target.files;

    image_list.push(image);
    const imageUrl = URL.createObjectURL(image_list);

    setUrl(imageUrl);
  }, []);
  const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);

  useEffect(() => (url ? (): void => URL.revokeObjectURL(url) : undefined), [url]);

  return (
    <>
      <WhiteBox />
      <ModifyInfoHeader
        title="내 정보 수정"
        leftBtn={<Icon icon="back" />}
        rightBtn={<ApplyTextButton>저장</ApplyTextButton>}
      />
      <ImageField url={url} onChange={handleFileChange} />
      <NameSection />
      <GrayBox />
    </>
  );
};

const ApplyTextButton = styled(TextButton)`
  color: ${keyColor};
`;

const GrayBox = styled.div`
  width: 375px;
  height: 10px;
  background-color: ${gray1};
`;
const WhiteBox = styled.div`
  width: 375px;
  height: 20px;
`;
export default ModifyInfoContainer;
