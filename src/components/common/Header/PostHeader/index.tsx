import React from 'react';
import styled from 'styled-components';

const PostHeader: React.FC = () => (
  <Wrapper>
    <span>header</span>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 375px;
  height: 50px;
  background-color: rgba(17, 17, 20, 0.05);
`;

export default PostHeader;
