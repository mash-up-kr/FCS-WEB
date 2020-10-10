import React, { useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Badge } from '../components/common/Badge';
import { Icon } from '../components/common/Icon';
import { WeatherIcon } from '../components/common/Icon/WeatherIcon';
import { RatioImage } from '../components/common/RatioImage';
import { FeedContext } from '../stores/Feed';
import { StyleContext } from '../stores/Styles/index';
import { gray1, gray8, gray9 } from '../utils/color';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface Params {
  id: string;
}

interface Styles {
  id: number;
  name: string;
}

const DetailPostContainer = React.memo(() => {
  const { id } = useParams<Params>();

  const { feeds } = useContext(FeedContext);
  const { styles } = useContext(StyleContext);
  // 피드 정보 확인 api에 유저 프로필사진 누락
  const history = useHistory();

  const handlePrevClick = (): void => {
    history.goBack();
  };

  const data = useMemo(() => {
    //memo(@kirby): 왠지 모르겠는데 type number인거로 추정
    const feed = feeds?.find(feed => feed.id.toString() === id);

    return feed ?? null;
  }, [id, feeds]);

  //memo(@kirby): 이거도 코드가 아주 안쓰럽다.
  const styleBadges = useMemo(() => {
    const generatedStyles: Styles[] = [];

    data?.styleIds.forEach(styleId => {
      const style = styles.find(style => style.id === Number(styleId));
      if (style) {
        generatedStyles.push(style);
      }
    });

    return generatedStyles.map(style => (
      <StyleBadge key={style.id} color="active">
        {style.name}
      </StyleBadge>
    ));
  }, [data, styles]);

  if (!data) {
    return <></>;
  }

  return (
    <Container>
      <Header>
        <BackBtn icon="back" onClick={handlePrevClick} />
        <Title>게시물 보기</Title>
      </Header>
      <UserSection>
        <UserProfile src={data.photoUrl} alt="profile" />
        <UserNickName>{data.nickname}</UserNickName>
        <EtcAction>
          <Dot />
          <Dot />
          <Dot />
        </EtcAction>
      </UserSection>
      <StyleSection>{styleBadges}</StyleSection>
      <RatioImage src={data.photoUrl} alt="thumbnail"></RatioImage>
      <CardContent>
        <WeatherSection>
          <WeatherIcon weather={data.weather} />
          <Temperature>{data.temperature}°</Temperature>
          <HeartIcon icon="heart" />
        </WeatherSection>
        <Content>{data.message}</Content>
      </CardContent>
      <Comment>
        <Link key={data.id} to={`/comments/${data.id}`}>
          <CommentBox>댓글보기 +2</CommentBox>
        </Link>
      </Comment>
    </Container>
  );
});

export default DetailPostContainer;

const Container = styled.div`
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  position: relative;
`;

const StyleSection = styled.div`
  display: flex;
  padding: 6px 20px 11px;
`;

const StyleBadge = styled(Badge)`
  margin-right: 10px;
`;

const BackBtn = styled(Icon)`
  margin-right: auto;
`;

const UserSection = styled.div`
  padding: 8px 9px 8px 20px;
  display: flex;
`;

const UserProfile = styled.img`
  width: 24px;
  height: 24px;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin-right: 10px;
`;
const UserNickName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const EtcAction = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  right: 9px;
`;
const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${gray8};
`;
const Title = styled.div`
  color: ${gray8};
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const CardContent = styled.div`
  padding: 15px;
`;

const WeatherSection = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px;
`;

const Temperature = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-left: 6px;
`;

const Content = styled.div`
  font-size: 14px;
  color: ${gray9};
  margin-top: 10px;
  z-index: 1;
`;

const HeartIcon = styled(Icon)`
  margin-left: auto;
`;

const Comment = styled.div`
  height: 85px;
  margin-right: 20px;
`;

const CommentBox = styled.div`
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  color: ${gray9};
  float: right;
`;
