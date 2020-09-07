import React, { useState } from 'react';
import styled from 'styled-components';
import PostHeader from '../components/common/Header/PostHeader';
import Dropdown from '../assets/ic_dropdown.png';
import { gray0, keyColor } from '../utils/color';
import { Link } from 'react-router-dom';

const PostContainer: React.FC = () => {
  const [photo, setPhoto] = useState();
  const [preview, setPreview] = useState();
  const [date] = useState('20년 6월 21일 화요일');
  const [location] = useState('서울 용산구');

  const addFile = (event: any): void => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      setPhoto(file);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <PostHeader />
      <UploadPhotoLabel htmlFor="file" photo={preview} />
      <UploadPhotoInput id="file" type="file" name="photo" accept="image/*" onChange={addFile} />
      <UploadInfoArea>
        <DateInfoArea>
          {date}
          <LinkArea to="/post/date">
            <Icon src={Dropdown} />
          </LinkArea>
        </DateInfoArea>
        <Line />
        <LocationInfoArea>
          {location}
          <LinkArea to="/post/location">
            <Icon src={Dropdown} />
          </LinkArea>
        </LocationInfoArea>
      </UploadInfoArea>
      <UploadTextArea>
        <TextArea placeholder="문구를 입력해주세요..." required />
      </UploadTextArea>
      <BottomNavigator>다음</BottomNavigator>
    </Container>
  );
};

const BottomNavigator = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  background-color: ${keyColor};
  bottom: 0px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${gray0};
`;

const LinkArea = styled(Link)`
  display: flex;
`;

const UploadTextArea = styled.div`
  background-color: ${gray0};
  display: flex;
  flex-direction: column;
`;

const Line = styled.hr`
  height: 26px;
  width: 1px;
  border-right: 1px;
`;

const Icon = styled.img``;

const TextArea = styled.textarea`
  background-color: ${gray0};
  height: 126px;
  outline: none;
  resize: none;
  border: 0px;
  margin: 20px;
  align-self: stretch;
`;

const DateInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 185px;
  height: 46px;
  margin-left: 20px;
  margin-right: 5px;
  font-size: 14px;
`;

const LocationInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 185px;
  height: 46px;
  margin-left: 21px;
  margin-right: 20px;
  font-size: 14px;
`;

const UploadInfoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 46px;
`;

const UploadPhotoLabel = styled.label<{ photo: string }>`
  width: 100%;
  ::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  .inner {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  background-image: url(${props => props.photo});
  background-size: 375px;
  display: inline-block;
  padding: 0.5em 0.75em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
`;

const UploadPhotoInput = styled.input`
  height: 1px;
  width: 1px;
  background-color: gray;
  position: absolute;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export default PostContainer;
