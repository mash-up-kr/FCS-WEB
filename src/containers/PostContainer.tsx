import React, { useState, useEffect } from 'react';
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

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <PostHeader />
      <Container>
        <UploadPhotoLabel htmlFor="file" photo={preview} />
        <UploadPhotoInput id="file" type="file" name="photo" accept="image/*" onChange={addFile} />
        <TextArea placeholder="문구 입력..." required />
      </Container>
    </Wrapper>
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

const TextArea = styled.textarea`
  outline: none;
  display: flex;
  align-self: stretch;
  border: 0px;
  margin: 15px;
  margin-top: 0px;
  margin-right: 0px;
  width: 100%;
`;

const UploadPhotoLabel = styled.label<{ photo: string }>`
  min-width: 60px;
  height: 60px;
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
  background-size: 60px;
  display: flex;
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
  flex-direction: row;
  align-self: stretch;
  margin: 20px;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default PostContainer;
