import React, { ReactNode, useMemo, useState } from 'react';
import styled from 'styled-components';
import { gray4, gray9 } from '../../../utils/color';

type TabProps = {
  title: string;
  content: ReactNode;
};

interface Props {
  data: TabProps[];
}

export const Tabs = React.memo<Props>(({ data }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const tabTitles = useMemo(() => {
    return data.map((item, idx) => (
      <TabTitle active={idx === selectedIdx} key={idx} onClick={() => setSelectedIdx(idx)}>
        {item.title}
      </TabTitle>
    ));
  }, [data, selectedIdx, setSelectedIdx]);

  const tabContent = useMemo(() => {
    return data[selectedIdx].content;
  }, [data, selectedIdx]);

  return (
    <TabContainer>
      <TabTitleSection>{tabTitles}</TabTitleSection>
      <TabContentSection>{tabContent}</TabContentSection>
    </TabContainer>
  );
});

const TabContainer = styled.div``;

const TabTitleSection = styled.ul`
  padding: 10px 20px;
`;

const TabTitle = styled.li<{ active: boolean }>`
  display: inline-block;
  list-style-type: none;
  font-size: 18px;
  margin-right: 15px;

  color: ${props => (props.active ? gray9 : gray4)};
`;

const TabContentSection = styled.div``;
