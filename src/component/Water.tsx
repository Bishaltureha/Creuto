import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import WaterSplash from '../assets/svg/WaterSplash';
import {scaleHeight, scaleWidth, screenWidth} from '../utility/dimen';

const Water = () => {
  return (
    <View style={styles.container}>
      <WaterSplash />
      <Text style={styles.content}>India’s Most Reliable Agricultural App</Text>
    </View>
  );
};

export default Water;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: screenWidth,
    left: -scaleWidth(16),
  },
  content: {
    position: 'absolute',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: scaleHeight(18),
    fontSize: scaleWidth(12),
    color: '#0082BE',
  },
});
