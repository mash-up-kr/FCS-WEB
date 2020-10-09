import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '../components/common/Icon';
import { Badge } from '../components/common/Badge';
import { gray8, keyColor, gray9, blue, gray7, gray1, red } from '../utils/color';
import Axios from 'axios';
const { includes, without, throttle } = require('lodash');

interface Styles {
  id: number;
  name: string;
}

const MypageContainer: React.FC = () => {
  const [value, setValue] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [nickname, setNickname] = useState('');
  const [photo, setPhoto] = useState('');
  const [isDuplicateUser, setIsDuplicateUser] = useState(true);

  const handleStyle = () => setChecked(true);

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

  useEffect(() => {}, [nickname]);

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

  const styleBadges = useMemo(() => {
    return styles.map(style => {
      const active = value.includes(style.id);

      return (
        <StyleBadge
          onClick={() => {
            toggleStyle(style);
            console.log(value);
          }}
          key={style.id}
          color={active ? 'active' : 'disabled'}
        >
          {style.name}
        </StyleBadge>
      );
    });
  }, [styles, value, toggleStyle]);

  const handleOnChange = async (e: any) => {
    setNickname(e.target.value);

    if (!nickname) {
      return;
    }

    const res = await Axios.get(`http://52.78.79.159:8080/api/users/nickname/check/${nickname}`);

    if (res.data.code === 4900) {
      setIsDuplicateUser(false);
    } else if (res.data.code === 200) {
      setIsDuplicateUser(true);
    }
  };

  const renderNicknameDuplicateFeedbackMessage = () => {
    if (nickname) {
      return isDuplicateUser ? (
        <WarnningText isDup={true}>가능한 닉네임 입니다.</WarnningText>
      ) : (
        <WarnningText isDup={false}>중복된 닉네임 입니다.</WarnningText>
      );
    }
  };

  return (
    <Wrapper>
      <Header>
        <BackBtn to="/">
          <BackIcon icon="back" />
        </BackBtn>
        <Title>내정보 수정</Title>
        <SaveIcon to="/">저장</SaveIcon>
      </Header>
      <ProfileEditIcon icon="profileEdit" />
      <NicknameSection>
        <Text>닉네임</Text>
        <Form>
          <NicknameTextArea
            type="text"
            id="nicknameInput"
            placeholder="닉네임을 입력하세요"
            onChange={handleOnChange}
          />
        </Form>
        {renderNicknameDuplicateFeedbackMessage()}
      </NicknameSection>
      <Contour />
      <StyleSettingSection>
        <Text>스타일 선택</Text>
        <SmallText>어떤 스타일의 옷을 좋아하시나요?</SmallText>
        <StyleSection>{styleBadges}</StyleSection>
      </StyleSettingSection>
    </Wrapper>
  );
};

const Form = styled.form`
  height: 21px;
  display: flex;
`;

const StyleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const StyleBadge = styled(Badge)`
  margin-right: 15px;
  margin-bottom: 15px;
`;

const StyleSettingSection = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

const Contour = styled.div`
  height: 10px;
  background-color: ${gray1};
  margin-top: 20px;
`;

const WarnningText = styled.div<{ isDup: boolean }>`
  color: ${props => (props.isDup ? blue : red)};
  font-size: 10px;
  position: absolute;
  right: 15px;
`;

const NicknameTextArea = styled.input`
  margin-left: 15px;
  height: 21px;
  border: none;
  width: 132px;
  outline-style: none;
  color: ${gray7};
`;

const SmallText = styled.div`
  color: ${gray7};
  font-size: 10px;
  margin-top: 6px;
`;

const Text = styled.div`
  color: ${gray9};
  font-weight: bold;
  font-size: 14px;
`;

const NicknameSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const ProfileEditIcon = styled(Icon)`
  margin-top: 15px;
  margin-bottom: 21px;
`;

const Title = styled.div`
  color: ${gray8};
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const BackBtn = styled(Link)`
  margin-right: auto;
`;

const BackIcon = styled(Icon)`
  display: flex;
  align-self: auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  position: relative;
`;

const SaveIcon = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-left: 20px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  float: right
  width: 48px;
  height: 24px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: normal;
  color: ${keyColor}};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default MypageContainer;
