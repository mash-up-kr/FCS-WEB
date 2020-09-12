export type WeatherType = 'CLEAR' | 'CLOUDS' | 'RAIN' | 'SNOW' | 'THUNDERSTORM';

export enum WeatherEnum {
  CLEAR = 'CLEAR',
  CLOUDS = 'CLOUDS',
  RAIN = 'RAIN',
  SNOW = 'SNOW',
  THUNDERSTORM = 'THUNDERSTORM',
}

export const Weather = {
  [WeatherEnum.CLEAR]: '맑음',
  [WeatherEnum.CLOUDS]: '흐림',
  [WeatherEnum.RAIN]: '비',
  [WeatherEnum.SNOW]: '우박',
  [WeatherEnum.THUNDERSTORM]: '천둥',
};

export interface UserFilter {
  styleIds: number[];
  weather: WeatherType;
  temperature: number;
  tempDifference: number;
}
