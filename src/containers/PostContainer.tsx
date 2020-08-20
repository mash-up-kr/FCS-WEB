import React from 'react';
import styled from 'styled-components';
import PostHeader from '../components/common/Header/PostHeader';

const PostContainer: React.FC = () => (
  <Container>
    <PostHeader />
    <UploadPhotoArea />
  </Container>
);

const UploadPhotoArea = styled.div`
  height: 375px;
  width: 375px;
  background-color: gray;
`;

const Container = styled.div`
  height: 100vh;
  position: relative;
`;

export default PostContainer;
