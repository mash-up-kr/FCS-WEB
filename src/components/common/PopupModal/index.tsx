import React, { useState, useMemo, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { white, gray8, gray1 } from '../../../utils/color';

interface Props {
  title?: string;
  leftBtn?: React.ReactElement<{ style: React.CSSProperties }>;
  rightBtn?: React.ReactElement<{ style: React.CSSProperties }>;
  opener?: React.ReactElement<{ onClick: () => void }>;
  divider?: boolean;
  children: any;
}

export const PopupModal = React.memo<Props>(props => {
  const { opener, children, leftBtn, rightBtn, title, divider, ...restProps } = props;

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

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

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [visible]);

  return (
    <>
      {clonedOpener}
      <Dialog visible={visible} {...restProps}>
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
`;

const HeaderSection = styled.div<{ divider: boolean | undefined }>`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 12px 26px;

  ${props => props.divider && `border-bottom: 1px solid ${gray1}`}
`;

const Title = styled.p`
  font-size: 18px;
  color: ${gray8};
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
`;
