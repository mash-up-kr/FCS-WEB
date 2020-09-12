import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Feed } from '../../model/Feed';
import { RatioImage } from '../common/RatioImage';

interface Props {
  feeds: Feed[];
}

export const FeedList = React.memo<Props>(({ feeds }) => {
  const feedRenderItems = useMemo(() => {
    return feeds.map(feed => <RatioImage src={feed.photoUrl} alt="feeds" />);
  }, [feeds]);

  return <Wrapper>{feedRenderItems}</Wrapper>;
});

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;
`;

const Thumbnail = styled.img`
  width: 100%;
`;
