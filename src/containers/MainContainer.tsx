import React, { useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '../components/common/Header';
import { FeedList } from '../components/FeedList';
import { FeedContext } from '../stores/Feed';
import { StyleContext } from '../stores/Styles';
import { UserContext } from '../stores/User';
import { gray0 } from '../utils/color';
import MainContentSection from '../views/Main/MainContentSection';

const MainContainer: React.FC = () => {
  const { feeds, getFeeds } = useContext(FeedContext);
  const { userFilterValue, setFilter } = useContext(UserContext);
  const { styles, getStyles } = useContext(StyleContext);

  useEffect(() => {
    getStyles();
    getFeeds(userFilterValue!);
  }, [getStyles, getFeeds, userFilterValue]);

  const getStyleName = useCallback(
    (styleId: number) => {
      return styles.find(style => style.id === styleId)?.name ?? '';
    },
    [styles]
  );

  return (
    <Container>
      <MainContentSection />
      <Header userFilterValue={userFilterValue!} getStyleName={getStyleName} setUserFilter={setFilter}>
        <FeedList feeds={feeds ?? []} />
      </Header>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: ${gray0};
`;

export default MainContainer;
