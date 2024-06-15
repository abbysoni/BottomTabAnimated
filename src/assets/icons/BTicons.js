import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = ({ width = 24, height = 24, fill = 'black' }) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" fill="#000000">
    <Path d="M32 12L4 40H16V56H28V44H36V56H48V40H60L32 12Z" fill={fill} />
  </Svg>
);

export const SettingsIcon = ({ width = 64, height = 64, fill = 'black' }) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
    <Path d="M32 4C18.7452 4 8 14.7452 8 28C8 41.2548 18.7452 52 32 52C45.2548 52 56 41.2548 56 28C56 14.7452 45.2548 4 32 4ZM32 48C21.2975 48 12 38.7025 12 28C12 17.2975 21.2975 8 32 8C42.7025 8 52 17.2975 52 28C52 38.7025 42.7025 48 32 48Z" fill={fill} />
  </Svg>
);

export const ProfileIcon = ({ width = 44, height = 44, fill = 'black' }) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
    <Path d="M32 2C15.984 2 2 15.984 2 32C2 48.016 15.984 62 32 62C48.016 62 62 48.016 62 32C62 15.984 48.016 2 32 2ZM32 8C39.736 8 46 14.264 46 22C46 29.736 39.736 36 32 36C24.264 36 18 29.736 18 22C18 14.264 24.264 8 32 8ZM32 54C25.904 54 20.262 50.73 17 45.75C17.06 40.686 27 37.5 32 37.5C37 37.5 46.94 40.686 47 45.75C43.738 50.73 38.096 54 32 54Z" fill={fill} />
  </Svg>
);
