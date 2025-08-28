import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';
import {scaleHeight, scaleWidth} from '../utility/dimen';

type TemperatureCardProps = {
  icon: ImageSourcePropType;
  title: string;
  min: number;
  max: number;
};

const TemperatureCard: React.FC<TemperatureCardProps> = ({
  icon,
  title,
  min,
  max,
}) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Text style={styles.min}>Min: {min}℃</Text>
        <Text style={styles.max}>Max: {max}℃</Text>
      </View>
    </View>
  );
};

export default TemperatureCard;

const styles = StyleSheet.create({
  card: {
    width: scaleWidth(156),
    height: scaleHeight(156),
    borderRadius: scaleWidth(8),
    padding: scaleWidth(12),
    backgroundColor: '#FFFFFF',
    shadowColor: '#111111',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: scaleWidth(4),
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: scaleWidth(60),
    height: scaleHeight(60),
    marginBottom: scaleHeight(8),
  },
  title: {
    fontSize: scaleWidth(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: scaleHeight(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: scaleWidth(8),
  },
  min: {
    fontSize: scaleWidth(14),
    color: '#999',
  },
  max: {
    fontSize: scaleWidth(14),
    color: '#999',
  },
});
