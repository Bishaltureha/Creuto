import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import DoubleFrontArrow from '../assets/svg/DoubleFrontArrow';
import {useNavigation} from '@react-navigation/native';
import {Helpers} from '../utility/helper';
import {weatherIcons} from '../utility/weatherIcons';
import {WeatherHomeResponse, WeatherType} from '../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {scaleHeight, scaleWidth} from '../utility/dimen';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const scaleX = screenWidth / 360;
const scaleY = screenHeight / 800;

const WeatherCard = ({
  weatherData,
}: {
  weatherData: {
    weather: WeatherHomeResponse;
    forecast: WeatherType;
  } | null;
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  if (!weatherData || !weatherData?.weather || !weatherData.forecast) {
    return null;
  }

  const weather = weatherData.weather;
  const forecast = Helpers.getDailyForecast(weatherData?.forecast?.list);
  let lastDay: number;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.dateText}>
            {Helpers.formatDate(new Date().toDateString())}
          </Text>
          <Text style={styles.locationText}>{weather.name}</Text>

          <View style={styles.tempRow}>
            <Text style={styles.tempText}>{weather.main.temp}</Text>
            <Text style={styles.degree}>°</Text>
          </View>

          <Text style={styles.weatherStatus}>
            {Helpers.capitalize(weather.weather[0].description)}
          </Text>
          <Text style={styles.humidityText}>
            Humidity {weather.main.humidity}%
          </Text>
        </View>

        {/* Weather Icon */}
        <Image
          source={
            weatherIcons[
              Helpers.mapForecastToClimate(weather) as keyof typeof weatherIcons
            ]
          }
          style={styles.weatherIcon}
          resizeMode="contain"
        />
      </View>

      {/* Divider */}
      <View style={styles.dashedLine} />

      {/* Small Cards Row */}
      <View style={styles.row}>
        {Array(7)
          .fill(0)
          .map((_, index) => {
            const item = forecast[index];
            lastDay = item?.dt ?? lastDay + 86400;
            return (
              <View style={styles.smallCard} key={index}>
                {item?.weather?.[0]?.icon ? (
                  <Image
                    source={
                      weatherIcons[
                        Helpers.mapForecastToClimate(
                          item,
                        ) as keyof typeof weatherIcons
                      ]
                    }
                    style={{width: 24, height: 24}}
                    resizeMode="contain"
                  />
                ) : (
                  <View style={styles.emptyBox} />
                )}
                <View style={styles.textBox}>
                  {item?.main?.temp ? (
                    <View style={styles.tempRow}>
                      <Text style={styles.smallTempText}>
                        {item.main.temp.toFixed(1)}
                      </Text>
                      <Text style={styles.smallDegree}>°</Text>
                    </View>
                  ) : (
                    <Text style={styles.dashText}>--</Text>
                  )}
                  <Text style={styles.dayText}>
                    {Helpers.formatDateUnix(lastDay)}
                  </Text>
                </View>
              </View>
            );
          })}
      </View>

      <View style={styles.dashedLine} />

      <TouchableOpacity
        style={styles.moreRow}
        onPress={() =>
          navigation.navigate('WeatherReport', {
            weatherData: weatherData.forecast,
          })
        }>
        <Text style={styles.moreText}>Check More on Weather</Text>
        <DoubleFrontArrow />
      </TouchableOpacity>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    padding: scaleWidth(12),
    borderRadius: scaleWidth(8),
    backgroundColor: '#ffffff',
    shadowColor: '#111111',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: scaleWidth(4),
    elevation: 3,
    marginTop: scaleHeight(40),
    marginBottom: scaleHeight(8),
    flexGrow: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 14 * scaleX,
    fontWeight: '400',
    color: '#0A0A0A',
    marginBottom: 4,
  },
  locationText: {
    color: '#C4C4C4',
    fontWeight: '400',
    fontSize: 12 * scaleX,
    marginBottom: 12 * scaleY,
  },
  weatherIcon: {
    width: 122 * scaleX,
    height: 122 * scaleY,
  },
  tempRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tempText: {
    fontSize: 32 * scaleX,
    fontWeight: '700',
    color: '#0A0A0A',
  },
  degree: {
    fontSize: 14 * scaleX,
    fontWeight: '700',
    marginTop: 2 * scaleY,
    color: '#0A0A0A',
  },
  weatherStatus: {
    color: '#0063D8',
    fontWeight: '600',
    fontSize: 12 * scaleX,
  },
  humidityText: {
    fontWeight: '400',
    fontSize: 12 * scaleX,
    color: '#C4C4C4',
  },
  row: {
    flexDirection: 'row',
    height: 64 * scaleY,
    width: 304 * scaleX,
    gap: 4 * scaleX,
  },
  smallCard: {
    width: 40 * scaleX,
    height: 64 * scaleY,
    borderRadius: 6 * scaleX,
    paddingVertical: 4 * scaleY,
    paddingHorizontal: 8 * scaleX,
    backgroundColor: '#F7FBFF',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyBox: {
    width: 24 * scaleX,
    height: 24 * scaleY,
    backgroundColor: '#ffffff',
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallTempText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0A0A0A',
  },
  smallDegree: {
    fontSize: 11 * scaleX,
    fontWeight: '600',
    marginTop: -5 * scaleY,
    color: '#0A0A0A',
  },
  dashText: {
    color: '#0A0A0A',
    fontSize: 12 * scaleX,
    fontWeight: '500',
  },
  dashedLine: {
    width: 304 * scaleX,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#F5F5F5',
    marginVertical: 8 * scaleY,
  },
  moreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4 * scaleY,
  },
  moreText: {
    color: '#0063D8',
    fontWeight: '600',
    fontSize: 14 * scaleX,
    marginRight: 4 * scaleX,
  },
  dayText: {
    fontWeight: '400',
    fontSize: 11 * scaleX,
    color: '#C4C4C4',
    marginTop: 2,
  },
});
