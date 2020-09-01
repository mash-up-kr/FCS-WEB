import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/common/Header';
import { Feed } from '../components/Feed';
import MainContentSection from '../views/Main/MainContentSection';

const MainContainer: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleSwipeUp = useCallback(() => {
    if (!active) {
      setActive(true);
    }
  }, [active]);

  const handleSwipeDown = useCallback(() => {
    if (active) {
      setActive(false);
    }
  }, [active]);

  return (
    <Container active={active}>
      <MainContentSection />
      <Header active={active} onSwipeUp={handleSwipeUp} onSwipeDown={handleSwipeDown}>
        <Feed />
      </Header>
    </Container>
  );
};

const Container = styled.div<{ active: boolean }>`
  height: 100vh;
  position: relative;
  overflow-y: ${props => (props.active ? 'scroll;' : 'hidden;')};
`;

// const Wrapper = styled.div`
//   position: relative;
//   flex: 1;
//   padding: 36px 20px 25px 20px;
//   position: relative;
//   background-color: ${gray0};
// `;

// const Thumbnail = styled.img`
//   position: absolute;
//   top: 36px;
//   right: 0;
// `;

// const AreaName = styled.h2`
//   font-size: 14px;
//   color: ${gray8};
// `;

// const TempDetail = styled.div`
//   display: flex;
//   margin-top: 2px;
//   margin-bottom: 50px;

//   & > span {
//     margin-right: 5px;
//   }
// `;

// const MinTemp = styled.span`
//   font-size: 14px;
//   color: ${blue};
// `;

// const MaxTemp = styled.span`
//   font-size: 14px;
//   color: ${red};
// `;

// const Date = styled.p``;

// const NowTemperature = styled.p`
//   font-size: 60px;
//   font-weight: bold;
//   color: ${gray9};
//   margin-top: 30px;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 64px;
//   letter-spacing: normal;
// `;

// const WeatherSpan = styled.span`
//   display: block;
//   font-size: 12px;
//   color: ${gray8};
//   margin-bottom: 5px;
// `;

// const Description = styled.span`
//   font-size: 10px;
//   color: ${gray5};
// `;

// const StyledUploadButton = styled(UploadButton)`
//   margin-top: 20px;
// `;

export default MainContainer;
