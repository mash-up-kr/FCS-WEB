import styled from 'styled-components';
import { gray6, gray7, gray9 } from '../../utils/color';

export const Description = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: ${gray7};
  margin-top: 2px;
`;

export const Rectangle = styled.div`
  width: 8px;
  height: 2px;
  background-color: ${gray6};
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
`;

export const TextButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: ${gray9};
  font-size: 16px;
  font-weight: bold;
`;
