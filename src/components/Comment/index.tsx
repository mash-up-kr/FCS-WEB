import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { gray1, gray3, gray4, keyColor } from '../../utils/color';
import SendDisable from '../../assets/ic-upload-disable.svg';
import SendActive from '../../assets/ic-upload-active.svg';
import axios from 'axios';
import API_SERVER_PATH from '../../utils/apis';
import { Icon } from '../common/Icon';
import { gray8 } from '../../utils/color';
import { useHistory } from 'react-router-dom';
import SingleComment from './SingleComment';
import api from '../../utils/apis';
import { CommentContext } from '../../stores/Comments';

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}

interface Params {
  id: string;
}

const Comment: React.FC = props => {
  // const {postid, ...otherProps} = props;
  const [commentValue, setCommentValue] = useState('');
  const [CommentList, setCommentList] = useState([]);

  const { id } = useParams<Params>();

  const { comments } = useContext(CommentContext);

  // const data = useMemo(() => {
  //   const comment = comments?.find(comment => comment.id.toString() === id);

  //   return comment ?? null;
  // }, [id, comments]);
  const data = useMemo(() => {
    //memo(@kirby): 왠지 모르겠는데 type number인거로 추정
    const comment = comments?.find(comment => comment.id.toString() === id);

    return comment ?? null;
  }, [id, comments]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const history = useHistory();

  const handlePrevClick = (): void => {
    history.goBack();
  };
  const onSubmit = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    const variables = {
      message: commentValue,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.xoeHyHhyME0Wz-xPezwnzkuR94ZZAf1hDCy4pPDJR-s',
    };

    //TODO: POSTID받아오기
    //useid 안보내도 되는건가,,?
    axios
      .post(`http://52.78.79.159:8080/api/comments/${id}`, variables, {
        headers: headers,
      })
      .then(response => {
        if (response.status === 201) {
          setCommentValue('');
        } else {
          alert('댓글저장실패');
        }
      });
  };

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.xoeHyHhyME0Wz-xPezwnzkuR94ZZAf1hDCy4pPDJR-s',
    };
    axios
      .get(`http://52.78.79.159:8080/api/comments/${id}`, {
        headers: headers,
      })
      .then(response => {
        if (response.status === 200) {
          setCommentList(response.data);
        } else {
          alert('Failed to get video Info');
        }
      });
  }, [CommentList, id]);

  return (
    <Container>
      <Header>
        <BackBtn icon="close" onClick={() => console.log(CommentList)} />
        <Title>댓글보기</Title>
      </Header>
      {/* {CommentList && CommentList.map(comment => (
        <SingleComment />
      ))} */}
      <SingleComment />
      <Wrapper>
        <InputBox placeholder="댓글 작성하기..." value={commentValue} onChange={handleChange} />
        {commentValue ? (
          <SendIcon src={SendActive} alt="보내기" onClick={onSubmit} />
        ) : (
          <SendIcon src={SendDisable} alt="보내기" />
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  position: relative;
  margin-top: 20px;
`;

const BackBtn = styled(Icon)`
  margin-right: auto;
`;

const Title = styled.div`
  color: ${gray8};
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Wrapper = styled.div`
  height: 54px;
  border-top: 1px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputBox = styled.input`
  height: 40px;
  width: 335px;
  background-color: ${gray1};
  border: 1px ${gray3};
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-color: ${gray4};
  display: inline-block;
  margin-left: 20px;
  padding-left: 10px;
  &:focus {
    border: 1px solid ${keyColor};
    outline: none;
  }
`;

const SendIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  right: 30px;
  order: 1;
`;
export default Comment;
