import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Badge } from '../../components/common/Badge';
import { gray7, keyColor } from '../../utils/color';
import { Description } from './MainCommonUI';

const filters = [
  '캐주얼',
  '스트릿',
  '유스',
  '오피스룩',
  '유니크',
  '심플',
  '베이직',
  '빈티지',
  '페미닌',
  '럭셔리',
  '스쿨룩',
  '포멀',
  '시크',
  '스포츠',
  '댄디',
  '모던',
  '로맨틱',
  '캠퍼스룩',
  '힙합',
];

export const MainFilterSection = React.memo(() => {
  const styles = useMemo(() => {
    return filters.map(filter => <StyleBadge color="active">{filter}</StyleBadge>);
  }, []);

  return (
    <Container>
      <Title>
        닉네임 님의 스타일을 <br /> 알려주세요!
      </Title>
      <StyleDescription>오늘은 옷은 어떤 스타일의 옷을 입으실건가요?</StyleDescription>
      <StyleSection>{styles}</StyleSection>
    </Container>
  );
});

const Container = styled.div`
  padding: 40px 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
`;

const StyleDescription = styled(Description)`
  color: ${gray7};
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
