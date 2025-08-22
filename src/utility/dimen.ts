import {Dimensions} from 'react-native';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');
const scaleX = screenWidth / 360;
const scaleY = screenHeight / 800;

export const scaleWidth = (size: number) => {
  return size;
  return size * scaleX;
};

export const scaleHeight = (size: number) => {
  return size;
  return size * scaleX;
};
