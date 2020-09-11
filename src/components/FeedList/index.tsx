import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Feed } from '../../model/Feed';
import { RatioImage } from '../common/RatioImage';
import { gray0, gray4, gray5 } from '../../utils/color';

interface Props {
  feeds: Feed[];
}

export const FeedList = React.memo<Props>(({ feeds }) => {
  const feedRenderItems = useMemo(() => {
    return feeds.map(feed => (
      <Link key={feed.id} to={`/posts/${feed.id}`}>
        <RatioImage src={feed.photoUrl} alt="feeds" />
      </Link>
    ));
  }, [feeds]);

  if (!feeds.length) {
    return (
      <EmptyWrapper>
        <Title>아직 의상이 없어요.</Title>
        <Description>누구보다 빠르게 오늘 옷 자랑하겠어요?</Description>
      </EmptyWrapper>
    );
  }

  return <Wrapper>{feedRenderItems}</Wrapper>;
});

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;
`;

const EmptyWrapper = styled.div`
  background-color: ${gray0};
  height: calc(100vh - 123px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: ${gray5};
  font-size: 24px;
  margin-top: 150px;
`;

const Description = styled.div`
  color: ${gray4};
  font-size: 14px;
  margin-top: 10px;
`;
