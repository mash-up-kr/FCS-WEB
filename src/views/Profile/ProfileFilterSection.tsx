import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Badge } from '../../components/common/Badge';
import { gray7 } from '../../utils/color';
import { Description } from '../Main/MainCommonUI';
import { Title } from '../Main/MainCommonUI';
import { useSignupState, useSampleDispatch } from '../../stores/Signup';

const { includes, without } = require('lodash');

interface Styles {
  id: number;
  name: string;
}
interface Profile {
  username: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileFilterSection = React.memo<Profile>((props: any) => {
  const [value, setValue] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);

  const state = useSignupState();
  const dispatch = useSampleDispatch();

  const styles = [
    { id: 1, name: '캐주얼' },
    { id: 2, name: '스트릿' },
    { id: 3, name: '유스' },
    { id: 4, name: '오피스룩' },
    { id: 5, name: '유니크' },
    { id: 6, name: '심플' },
    { id: 7, name: '베이직' },
    { id: 8, name: '빈티지' },
    { id: 9, name: '페미닌' },
    { id: 10, name: '럭셔리' },
    { id: 11, name: '스쿨룩' },
    { id: 12, name: '포멀' },
    { id: 13, name: '시크' },
    { id: 14, name: '스포츠' },
    { id: 15, name: '댄디' },
    { id: 16, name: '모던' },
    { id: 17, name: '로맨틱' },
    { id: 18, name: '캠퍼스룩' },
    { id: 19, name: '힙합' },
  ];

  const toggleStyle = useCallback(
    (style: Styles) => {
      const isStyleActive = value.includes(style.id);
      if (isStyleActive) {
        // setValue({ ...value, id: value.id.filter(id => id !== style.id) });
        setValue(without(value, style.id));
      } else {
        setValue([...value, style.id]); // 선택한 값에 추가
      }
    },
    [value, setValue]
  );

  const setStyleIds = useCallback(() => dispatch({ type: 'SET_STYLEIDS', styleIds: value }), [dispatch, value]);

  const styleBadges = useMemo(() => {
    return styles.map(style => {
      const active = value.includes(style.id);

      return (
        <StyleBadge
          onClick={() => {
            toggleStyle(style);
            console.log(value);
            setStyleIds();
          }}
          key={style.id}
          color={active ? 'active' : 'disabled'}
        >
          {style.name}
        </StyleBadge>
      );
    });
  }, [styles, value, toggleStyle, setStyleIds]);

  return (
    <Container>
      <StyledTitle>
        {props.username}님의 스타일을 <br /> 알려주세요!
      </StyledTitle>
      <StyleDescription>어떤 스타일의 옷을 좋아하시나요?</StyleDescription>
      <StyleSection>{styleBadges}</StyleSection>
    </Container>
  );
});

const Container = styled.div`
  padding: 40px 20px;
`;

const StyledTitle = styled(Title)`
  margin-top: 117px;
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
