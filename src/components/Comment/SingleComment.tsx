import React from 'react';
import styled from 'styled-components';
import { gray2, gray9, gray5, gray10 } from '../../utils/color';
import defaultProfile from '../../assets/ic-profile-edit.svg';

interface CommentProps {
  children?: string;
  profile?: string;
  nickname?: string;
  date?: string;
  content?: string;
}
const SingleComment: React.FC<CommentProps> = props => {
  const { children, profile, nickname, date, content, ...restProps } = props;

  return (
    <Wrapper>
      <UserSection>
        <UserInfo>
          {profile ? <UserProfile src={profile} alt="profile" /> : <Profile />}
          <UserNickName>{nickname}</UserNickName>
        </UserInfo>
        <Date>{date}</Date>
      </UserSection>
      <ContentSection>{content}</ContentSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0px 10px 0px;
  margin: 0 20px 0 20px;
  height: 80px;
`;
const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const UserProfile = styled.img`
  width: 24px;
  height: 24px;
  background-color: ${gray2};
  border-radius: 50%;
  margin-right: 10px;
`;

const Profile = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${gray2};
  border-radius: 50%;
  margin-right: 10px;
`;
const UserNickName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${gray9};
`;

const Date = styled.div`
  font-family: SpoqaHanSans;
  font-size: 12px;
  color: ${gray5};
`;

const ContentSection = styled.div`
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  color: ${gray10};
  margin-top: 7px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${gray2};
`;
export default SingleComment;
