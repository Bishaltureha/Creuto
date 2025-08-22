import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';
import {scaleHeight, scaleWidth} from '../utility/dimen';

export interface InfoCardProps {
  icon: ImageSourcePropType;
  title: string;
  min?: number;
  max?: number;
  unit: string;
  value?: number;
}

const InfoCard = ({icon, title, min, max, unit, value}: InfoCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <View>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          {min !== undefined && (
            <Text style={styles.text}>
              Min: {min.toFixed(0)}
              {unit}
            </Text>
          )}
          {max !== undefined && (
            <Text style={styles.text}>
              Max: {max.toFixed(0)}
              {unit}
            </Text>
          )}
          {value !== undefined && (
            <Text style={styles.text}>
              {value.toFixed(0)}
              {unit}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default InfoCard;

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
    justifyContent: 'space-between',
    margin: scaleWidth(6),
  },
  icon: {
    width: scaleWidth(80),
    height: scaleHeight(80),
    marginBottom: scaleHeight(8),
    alignSelf: 'center',
  },
  title: {
    fontSize: scaleWidth(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: scaleHeight(4),
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: scaleWidth(12),
    color: '#C4C4C4',
  },
});
