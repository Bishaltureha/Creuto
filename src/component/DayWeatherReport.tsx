import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import RightArrowIcon from '../assets/svg/RightArrowIcon';
import LeftArrowIcon from '../assets/svg/LeftArrowIcon';
import {WeatherList} from '../types';
import {Helpers} from '../utility/helper';
import {weatherIcons} from '../utility/weatherIcons';
import {scaleHeight, scaleWidth} from '../utility/dimen';

// const weatherData = [
//   {
//     date: 'Wednesday, 05 June 2024',
//     location: 'Jalandhar, Punjab, India',
//     temp: 32,
//     condition: 'Sunny, Cloudy',
//     humidity: '77%',
//     icon: require('../assets/image/Sun.png'),
//   },
//   {
//     date: 'Thursday, 06 June 2024',
//     location: 'Amritsar, Punjab, India',
//     temp: 28,
//     condition: 'Rainy',
//     humidity: '85%',
//     icon: require('../assets/image/Sun.png'),
//   },
//   {
//     date: 'Friday, 07 June 2024',
//     location: 'Ludhiana, Punjab, India',
//     temp: 35,
//     condition: 'Hot, Sunny',
//     humidity: '60%',
//     icon: require('../assets/image/Sun.png'),
//   },
//   {
//     date: 'Saturday, 08 June 2024',
//     location: 'Chandigarh, Punjab, India',
//     temp: 30,
//     condition: 'Partly Cloudy',
//     humidity: '70%',
//     icon: require('../assets/image/Sun.png'),
//   },
//   {
//     date: 'Sunday, 09 June 2024',
//     location: 'Patiala, Punjab, India',
//     temp: 27,
//     condition: 'Light Rain',
//     humidity: '80%',
//     icon: require('../assets/image/Sun.png'),
//   },
//   {
//     date: 'Monday, 10 June 2024',
//     location: 'Bathinda, Punjab, India',
//     temp: 33,
//     condition: 'Sunny',
//     humidity: '65%',
//     icon: require('../assets/image/Sun.png'),
//   },
//   {
//     date: 'Tuesday, 11 June 2024',
//     location: 'Mohali, Punjab, India',
//     temp: 31,
//     condition: 'Thunderstorm',
//     humidity: '90%',
//     icon: require('../assets/image/Sun.png'),
//   },
// ];

const DayWeatherReport = ({
  weatherList,
  location,
  index,
  handlePrev,
  handleNext,
}: {
  weatherList: WeatherList[];
  location: string;
  index: number;
  handlePrev: () => void;
  handleNext: () => void;
}) => {
  const data = weatherList[index];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Helpers.formatDate(data.dt_txt)}</Text>
      <Text style={styles.subtitle}>{Helpers.capitalize(location)}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.circle}
          onPress={handlePrev}
          disabled={index === 0}>
          <LeftArrowIcon size={20} color={index === 0 ? '#ccc' : '#000'} />
        </TouchableOpacity>

        <Image
          source={
            weatherIcons[
              Helpers.mapForecastToClimate(data) as keyof typeof weatherIcons
            ]
          }
          style={styles.sunImage}
        />

        <TouchableOpacity
          style={styles.circle}
          onPress={handleNext}
          disabled={index === weatherList.length - 1}>
          <RightArrowIcon
            size={20}
            color={index === weatherList.length - 1 ? '#ccc' : '#000'}
          />
        </TouchableOpacity>
      </View>
      {/* Weather Info */}
      <View style={styles.weatherInfo}>
        <Text style={styles.temp}>
          {data.main.temp}
          <Text style={styles.degree}>°</Text>
        </Text>
        <View>
          <Text style={styles.condition}>
            {Helpers.capitalize(data.weather[0].description)}
          </Text>
          <Text style={styles.humidity}>Humidity {data.main.humidity}</Text>
        </View>
      </View>
    </View>
  );
};

export default DayWeatherReport;

const styles = StyleSheet.create({
  container: {
    marginTop: scaleHeight(20),
    width: scaleWidth(328),
    height: scaleHeight(262),
    borderRadius: scaleWidth(8),
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: scaleHeight(12),
    alignSelf: 'center',
  },
  title: {
    fontSize: scaleWidth(18),
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: scaleWidth(16),
    fontWeight: '400',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    height: scaleHeight(40),
    width: scaleWidth(40),
    borderRadius: scaleWidth(20),
    backgroundColor: '#E1EFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunImage: {
    width: scaleWidth(120),
    height: scaleHeight(120),
    resizeMode: 'contain',
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleHeight(8),
  },
  temp: {
    fontSize: scaleWidth(42),
    fontWeight: '700',
    color: '#000',
    marginRight: scaleWidth(10),
  },
  degree: {
    fontSize: scaleWidth(42),
    fontWeight: '400',
    color: '#000',
  },
  condition: {
    fontSize: scaleWidth(16),
    fontWeight: '500',
    color: '#0066cc',
  },
  humidity: {
    fontSize: scaleWidth(14),
    color: '#666',
  },
});
