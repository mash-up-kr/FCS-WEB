import React, { useCallback } from 'react';
import styled from 'styled-components';
import { gray1, gray6 } from '../../../utils/color';

interface Props {
  tempDifference: number;
  onTempDiffChange: (tempDifference: number) => void;
}

export const TempDiffCalculator = React.memo<Props>(({ tempDifference, onTempDiffChange }) => {
  const increaseTempDiff = useCallback(() => {
    onTempDiffChange(tempDifference + 1);
  }, [onTempDiffChange, tempDifference]);

  const decreaseTempDiff = useCallback(() => {
    onTempDiffChange(tempDifference - 1);
  }, [onTempDiffChange, tempDifference]);

  return (
    <Container>
      <Button onClick={decreaseTempDiff}>-</Button>
      <Temperature>{tempDifference}°</Temperature>
      <Button onClick={increaseTempDiff}>+</Button>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  border: 1px solid ${gray1};
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;

  font-size: 20px;
  background-color: ${gray1};
  outline: none;
  color: ${gray6};
`;

const Temperature = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  padding: 0px 15px 0px 20px;
`;
