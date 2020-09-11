import React, { useContext, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Badge } from '../../components/common/Badge';
import { UserFilter } from '../../model/User';
import { StyleContext } from '../../stores/Styles';
import { Description, Title } from './MainCommonUI';

interface Styles {
  id: number;
  name: string;
}

interface Props {
  filter: UserFilter;
  setFilter: (filter: UserFilter) => void;
}

//TODO: getStyles 비지니스 로직에서 실행하기
export const MainFilterSection = React.memo<Props>(({ filter, setFilter }) => {
  const { styles } = useContext(StyleContext);

  //memo(@kirby): 코드가 매우 안습이므로 나중에 리팩토링을 하자
  const toggleStyle = useCallback(
    (style: Styles) => {
      const isStyleActive = filter.styleIds.includes(style.id);
      if (isStyleActive) {
        setFilter({ ...filter, styleIds: filter.styleIds.filter(styleId => styleId !== style.id) });
      } else {
        setFilter({ ...filter, styleIds: [...filter.styleIds, style.id] });
      }
    },
    [filter, setFilter]
  );

  const styleBadges = useMemo(() => {
    return styles.map(style => {
      const active = filter.styleIds.includes(style.id);

      return (
        <StyleBadge onClick={() => toggleStyle(style)} key={style.id} color={active ? 'active' : 'disabled'}>
          {style.name}
        </StyleBadge>
      );
    });
  }, [filter.styleIds, styles, toggleStyle]);

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
