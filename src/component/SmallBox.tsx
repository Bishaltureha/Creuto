import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';
import {scaleHeight, scaleWidth, screenWidth} from '../utility/dimen';

interface Props {
  text: string;
  source: ImageSourcePropType;
}

const SmallBox = ({text, source}: Props) => {
  return (
    <View style={[styles.outerBox, styles.shadow]}>
      <View style={styles.innerBox}>
        <Image source={source} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SmallBox;

const styles = StyleSheet.create({
  outerBox: {
    height: scaleHeight(142),
    borderRadius: scaleWidth(12),
    padding: scaleWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: (screenWidth - scaleWidth(48)) / 2, // ✅ responsive
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: scaleHeight(2)},
    shadowOpacity: 0.08,
    shadowRadius: scaleWidth(6),
    elevation: 3,
  },
  image: {
    width: scaleWidth(72),
    height: scaleHeight(72),
  },
  innerBox: {
    flex: 1,
    width: '100%',
    borderRadius: scaleWidth(8),
    padding: scaleWidth(8),
    backgroundColor: '#E1EFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: scaleHeight(8),
    fontWeight: '600',
    fontSize: scaleWidth(14),
    lineHeight: scaleHeight(22),
    textAlign: 'center',
    color: '#111111',
  },
});
