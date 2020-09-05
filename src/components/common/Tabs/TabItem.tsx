import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { gray4, gray9 } from '../../../utils/color';

export type TabItemProps = {
  title: string;
  active: boolean;
  children?: ReactNode;
  value?: string;
};

export const TabItem = React.memo<TabItemProps>(props => {
  const { title, active, value, children } = props;

  console.log(active);

  return (
    <>
      <TabName active={active}>{title}</TabName>
      <TabContent>{children}</TabContent>
    </>
  );
});

const TabName = styled.li<{ active: boolean }>`
  display: inline-block;
  margin-right: 15px;
  font-size: 18px;
  font-weight: normal;
  color: ${props => (props.active ? gray9 : gray4)};
  list-style-type: none;
  cursor: pointer;
`;

const TabContent = styled.div`
  display: block;
`;
