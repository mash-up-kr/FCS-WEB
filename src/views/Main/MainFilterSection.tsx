import React, { useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Badge } from '../../components/common/Badge';
import { StyleContext } from '../../stores/Styles';
import { Description, Title } from './MainCommonUI';

//TODO: getStyles 비지니스 로직에서 실행하기
export const MainFilterSection = React.memo(() => {
  const { styles } = useContext(StyleContext);

  const styleBadges = useMemo(() => {
    return styles.map(style => (
      <StyleBadge key={style.id} color="active">
        {style.name}
      </StyleBadge>
    ));
  }, [styles]);

  return (
    <Container>
      <Title>
        닉네임 님의 스타일을 <br /> 알려주세요!
      </Title>
      <StyleDescription>오늘은 옷은 어떤 스타일의 옷을 입으실건가요?</StyleDescription>
      <StyleSection>{styleBadges}</StyleSection>
    </Container>
  );
});

const Container = styled.div`
  padding: 40px 20px;
`;

const StyleDescription = styled(Description)`
  margin-top: 5px;
  font-size: 14px;
`;

const StyleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const StyleBadge = styled(Badge)`
  margin-right: 15px;
  margin-bottom: 15px;
`;
