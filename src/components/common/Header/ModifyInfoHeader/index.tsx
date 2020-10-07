import React, { useMemo } from 'react';
import Back from '../../../../assets/ic_navigation_back.png';
import styled from 'styled-components';
import { gray8 } from '../../../../utils/color';

interface Props {
  title?: string;
  leftBtn?: React.ReactElement<{ style: React.CSSProperties }>;
  rightBtn?: React.ReactElement<{ style: React.CSSProperties }>;
  children: any;
}

const ModifyInfoHeader = React.memo<Props>(props => {
  const { children, leftBtn, rightBtn, title, ...restProps } = props;

  const clonedLeftBtn = useMemo(() => {
    return (
      leftBtn &&
      React.cloneElement(leftBtn, {
        style: { marginRight: 'auto' },
      })
    );
  }, [leftBtn]);

  const clonedRightBtn = useMemo(() => {
    return (
      rightBtn &&
      React.cloneElement(rightBtn, {
        style: { marginLeft: 'auto' },
      })
    );
  }, [rightBtn]);

  return (
    <HeaderContainer>
      {clonedLeftBtn}
      <Title>{title}</Title>
      {clonedRightBtn}
    </HeaderContainer>
  );
});

const HeaderContainer = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  color: ${gray8};
`;

export default ModifyInfoHeader;
