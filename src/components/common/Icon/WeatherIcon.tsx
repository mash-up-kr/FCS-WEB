import React from 'react';
import { Icon } from './index';

interface Props {
  weather: 'CLEAR' | 'CLOUDS' | 'RAIN' | 'SNOW' | 'THUNDERSTORM';
}

interface ButtonType {
  CLEAR: 'sun';
  CLOUDS: 'cloud';
  RAIN: 'rain';
  SNOW: 'snow';
  THUNDERSTORM: 'thunder';
}

export enum WeatherType {
  CLEAR = 'CLEAR',
  CLOUDS = 'CLOUDS',
  RAIN = 'RAIN',
  SNOW = 'SNOW',
  THUNDERSTORM = 'THUNDERSTORM',
}

export const ButtonIcon: ButtonType = {
  [WeatherType.CLEAR]: 'sun',
  [WeatherType.CLOUDS]: 'cloud',
  [WeatherType.RAIN]: 'rain',
  [WeatherType.SNOW]: 'snow',
  [WeatherType.THUNDERSTORM]: 'thunder',
};

export const WeatherIcon = React.memo<Props>(({ weather }) => {
  return <Icon icon={ButtonIcon[weather]}></Icon>;
});
