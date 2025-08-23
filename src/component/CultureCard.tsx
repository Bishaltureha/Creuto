import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';
import {scaleHeight, scaleWidth, screenWidth} from '../utility/dimen';

interface Props {
  source: ImageSourcePropType;
  date: string;
  description: string;
}

const CultureCard = ({source, date, description}: Props) => {
  return (
    <View style={styles.card}>
      <Image source={source} style={styles.image} resizeMode="cover" />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </View>
  );
};
export default CultureCard;

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.55,
    borderRadius: scaleWidth(8),
    backgroundColor: '#FFFFFF',
    padding: scaleWidth(4),
    paddingBottom: scaleHeight(6),
    shadowColor: '#111111',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: scaleWidth(3),
    elevation: 2,
  },
  image: {
    width: '100%',
    height: scaleHeight(100),
    borderRadius: scaleWidth(6),
    marginBottom: scaleHeight(8),
  },
  date: {
    fontSize: scaleWidth(12),
    color: '#C4C4C4',
    marginBottom: scaleHeight(4),
    marginLeft: scaleWidth(4),
    lineHeight: scaleHeight(16),
  },
  description: {
    fontSize: scaleWidth(14),
    color: '#0A0A0A',
    fontWeight: '400',
    marginLeft: scaleWidth(4),
    lineHeight: scaleHeight(20),
  },
});
