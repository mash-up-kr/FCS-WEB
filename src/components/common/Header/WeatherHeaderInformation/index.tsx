import React from 'react';
import styled from 'styled-components';
import { gray8, red, blue } from '../../../../utils/color';
import SUN from '../../../../assets/img_sun.png';

interface Props {
  active: boolean;
}

export const WeatherHeaderInformation: React.FC<Props> = React.memo(props => {
  const { active } = props;

  return (
    <>
      {active ? (
        <Wrapper>
          <AreaName>서울 용산구</AreaName>
          <WeatherWrapper>
            <Icon src={SUN} alt="sunny" />
            <Temperature>24°</Temperature>

            <TempDetail>
              <MaxTemp>32°</MaxTemp>
              <MinTemp>18°</MinTemp>
            </TempDetail>
          </WeatherWrapper>
        </Wrapper>
      ) : null}
    </>
  );
});

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const AreaName = styled.h2`
  font-size: 14px;
  color: ${gray8};
`;

const WeatherWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const Temperature = styled.span`
  margin-left: auto;
  font-size: 24px;
  margin-right: 8px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const TempDetail = styled.div``;

const MinTemp = styled.span`
  display: block;
  color: ${blue};
  font-size: 14px;
`;

const MaxTemp = styled.span`
  display: block;
  color: ${red};
  font-size: 14px;
`;
