import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { gray1, gray8, white } from '../../../utils/color';

interface Props {
  title?: string;
  leftBtn?: React.ReactElement<{ style: React.CSSProperties }>;
  rightBtn?: React.ReactElement<{ style: React.CSSProperties }>;
  opener?: React.ReactElement<{ onClick: () => void }>;
  opened?: boolean;
  divider?: boolean;
  children: any;
}

export const PopupModal = React.memo<Props>(props => {
  const { opener, children, leftBtn, rightBtn, title, divider, opened, ...restProps } = props;

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  //memo(@kirby): 필요하면 주석 풀기
  // const closeModal = useCallback(() => {
  //   setVisible(false);
  // }, []);

  const clonedOpener = useMemo(() => {
    return (
      opener &&
      React.cloneElement(opener, {
        onClick: showModal,
      })
    );
  }, [opener, showModal]);

  const [visible, setVisible] = useState(false);

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

  const modalOpened = useMemo(() => {
    return opened ? opened : visible;
  }, [opened, visible]);

  useEffect(() => {
    if (modalOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalOpened]);

  return (
    <>
      {clonedOpener}
      <Dialog visible={modalOpened} {...restProps}>
        <HeaderSection divider={divider}>
          {clonedLeftBtn}
          <Title>{title}</Title>
          {clonedRightBtn}
        </HeaderSection>
        {children}
      </Dialog>
    </>
  );
});

const Dialog = styled.div<{ visible: boolean }>`
  z-index: 999;
  position: fixed;
  background-color: ${white};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ${props => !props.visible && `transform: translateY(100%);`}
  transition: all 225ms ease-out;
  overflow: scroll;
`;

const HeaderSection = styled.div<{ divider: boolean | undefined }>`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 12px 26px;
  align-items: center;

  ${props => props.divider && `border-bottom: 1px solid ${gray1}`}
`;

const Title = styled.div`
  font-size: 18px;
  color: ${gray8};

  font-weight: bold;
`;
