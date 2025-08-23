import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import {scaleHeight, scaleWidth} from '../utility/dimen';

interface DayWeatherCardProps {
  date: string;
  condition: string;
  humidity: number | string;
  temp: number | string;
  icon: ImageSourcePropType;
}

const DayWeatherCard: React.FC<DayWeatherCardProps> = ({
  date,
  condition,
  humidity,
  temp,
  icon,
}) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.condition}>{condition}</Text>
        <Text style={styles.humidity}>Humidity: {humidity}%</Text>
      </View>
      <Text style={styles.temp}>{temp}°</Text>
    </View>
  );
};

export default DayWeatherCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(16),
    marginBottom: scaleHeight(10),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: scaleHeight(2)},
    shadowRadius: scaleWidth(4),
  },
  icon: {
    width: scaleWidth(64),
    height: scaleHeight(64),
  },
  container: {
    flex: 1,
    marginLeft: scaleWidth(12),
  },
  date: {
    fontSize: scaleWidth(14),
    fontWeight: '600',
    color: '#0A0A0A',
  },
  condition: {
    fontSize: scaleWidth(14),
    fontWeight: '500',
    color: '#007BFF',
    marginTop: scaleHeight(2),
  },
  humidity: {
    fontSize: scaleWidth(12),
    color: '#999',
    marginTop: scaleHeight(2),
  },
  temp: {
    fontSize: scaleWidth(26),
    fontWeight: '700',
    color: '#0A0A0A',
  },
});
