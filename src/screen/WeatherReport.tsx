import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import BackArrow from '../assets/svg/BackArrow';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DayWeatherReport from '../component/DayWeatherReport';
import {WeatherList} from '../types';
import InfoCard from '../component/InfoCard';
import LeftArrowIcon from '../assets/svg/LeftArrowIcon';
import RightArrowIcon from '../assets/svg/RightArrowIcon';
import {DateFormats, Helpers} from '../utility/helper';
import DayWeatherCard from '../component/DayWeatherCard';
import {weatherIcons} from '../utility/weatherIcons';
import {scaleHeight, scaleWidth} from '../utility/dimen';
// type ForecastTodayItem = {
//   image: any;
//   title: string;
//   id: number;
//   unit: string;
//   getMinValue?: (item?: WeatherList) => number | undefined;
//   getMaxValue?: (item?: WeatherList) => number | undefined;
//   getValue?: (item: WeatherList) => number | undefined;
// };

// const forecastToday = [
//   {
//     image: require('../assets/image/Temperature.png'),
//     title: 'Temperature',
//     id: 1,
//     unit: '°C',
//     getMinValue: (item?: WeatherList) => item?.main?.temp_min ?? '',
//     getMaxValue: (item?: WeatherList) => item?.main?.temp_max ?? '',
//   },
//   {
//     image: require('../assets/image/Humidity.png'),
//     title: 'Humidity',
//     id: 2,
//     unit: '%',
//     getValue: (item: WeatherList) => item?.main?.humidity ?? '',
//   },
//   {
//     image: require('../assets/image/Rainfall.png'),
//     title: 'Rainfall',
//     id: 3,
//     unit: 'mm',
//     getValue: (item: WeatherList) => item.rain?.['3h'] ?? '',
//   },
//   {
//     image: require('../assets/image/WindSpeed.png'),
//     title: 'Wind Speed',
//     id: 4,
//     unit: 'ms',
//     getValue: (item: WeatherList) => item.wind?.speed ?? '',
//   },
// ];

type ForecastTodayItem = {
  image: any;
  title: string;
  id: number;
  unit: string;
  getMinValue?: (item?: WeatherList) => number | undefined;
  getMaxValue?: (item?: WeatherList) => number | undefined;
  getValue?: (item: WeatherList) => number | undefined;
};

const forecastToday: ForecastTodayItem[] = [
  {
    image: require('../assets/image/Temperature.png'),
    title: 'Temperature',
    id: 1,
    unit: '°C',
    getMinValue: (item?: WeatherList) => item?.main?.temp_min,
    getMaxValue: (item?: WeatherList) => item?.main?.temp_max,
  },
  {
    image: require('../assets/image/Humidity.png'),
    title: 'Humidity',
    id: 2,
    unit: '%',
    getValue: (item: WeatherList) => item?.main?.humidity,
  },
  {
    image: require('../assets/image/Rainfall.png'),
    title: 'Rainfall',
    id: 3,
    unit: 'mm',
    getValue: (item: WeatherList) => item?.rain?.['3h'],
  },
  {
    image: require('../assets/image/WindSpeed.png'),
    title: 'Wind Speed',
    id: 4,
    unit: 'ms',
    getValue: (item: WeatherList) => item?.wind?.speed,
  },
];

// Props for this screen
type WeatherReportProps = {
  route: {
    params: {
      weatherData: {
        length: number;
        list: WeatherList[];
        cnt: number;
        city: {name: string};
      };
    };
  };
};
const WeatherReport: React.FC<WeatherReportProps> = ({route}) => {
  const navigation = useNavigation();
  const [currIndex, setCurrIndex] = useState(0); // track current week
  const [index, setIndex] = useState(0); // track current week
  const weatherData = route?.params?.weatherData;
  const weatherforecast = Helpers.getDailyForecast(weatherData?.list);
  const chunkedweatherData = Helpers.chunkArray(weatherforecast, 4);

  const handlePrev = () => {
    setCurrIndex(prev => (prev === 0 ? prev : prev - 1));
  };

  const handleNext = () => {
    setCurrIndex(prev => (prev === weatherData.cnt - 1 ? prev : prev + 1));
  };

  const handleChunkPrev = () => {
    setIndex(prev => (prev === 0 ? prev : prev - 1));
  };

  const handleChunkNext = () => {
    setIndex(prev =>
      prev === chunkedweatherData.length - 1 ? prev : prev + 1,
    );
  };

  if (!weatherData) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {weatherData ? (
        <ScrollView contentContainerStyle={{paddingBottom: 20}}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <BackArrow size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>WEATHER REPORT</Text>
            <View style={{width: 24}} />
          </View>

          <DayWeatherReport
            handleNext={handleNext}
            handlePrev={handlePrev}
            index={currIndex}
            weatherList={weatherforecast}
            location={weatherData.city.name}
          />

          <View style={styles.cardsWrapper}>
            {forecastToday.map((item, index) => {
              const extras: Partial<{
                min: number;
                max: number;
                value: number;
              }> = {};

              if (item.getMinValue) {
                extras.min = item.getMinValue(weatherforecast[currIndex]);
              }

              if (item.getMaxValue) {
                extras.max = item.getMaxValue(weatherforecast[currIndex]);
              }

              if (item.getValue) {
                extras.value = item.getValue(weatherforecast[currIndex]);
              }

              console.info(extras);

              return (
                <InfoCard
                  {...extras}
                  key={item.id}
                  icon={item.image}
                  title={item.title}
                  unit={item.unit}
                />
              );
            })}
          </View>

          <View style={styles.weekWrapper}>
            <TouchableOpacity
              onPress={handleChunkPrev}
              disabled={index === 0}
              style={[styles.arrowButton, {backgroundColor: '#E1EFFF'}]}>
              <LeftArrowIcon size={20} color={index === 0 ? '#fff' : '#000'} />
            </TouchableOpacity>

            <Text style={styles.weekText}>
              {Helpers.formatDate(
                weatherforecast.at(0)?.dt_txt ?? '',
                DateFormats.shortDateMonth,
              )}
              -
              {Helpers.formatDate(
                weatherforecast.at(-1)?.dt_txt ?? '',
                DateFormats.shortDateMonth,
              )}
            </Text>

            <TouchableOpacity
              onPress={handleChunkNext}
              disabled={index === chunkedweatherData.length - 1}
              style={[styles.arrowButton, {backgroundColor: '#E1EFFF'}]}>
              <RightArrowIcon
                size={20}
                color={index === weatherData.length - 1 ? '#fff' : '#000'}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginHorizontal: scaleWidth(16)}}>
            {chunkedweatherData[index].map(item => (
              <DayWeatherCard
                key={item.dt_txt}
                date={Helpers.formatDate(item.dt_txt, DateFormats.dateMonth)}
                condition={Helpers.capitalize(item.weather[0].description)}
                humidity={item.main.humidity}
                temp={item.main.temp}
                icon={
                  weatherIcons[
                    Helpers.mapForecastToClimate(
                      item,
                    ) as keyof typeof weatherIcons
                  ]
                }
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="red" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default WeatherReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(16),
    justifyContent: 'space-between',
    marginBottom: scaleHeight(12),
  },
  backButton: {
    padding: scaleWidth(4),
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: scaleWidth(12),
    color: '#0A0A0A',
    textTransform: 'uppercase',
  },
  cardsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: scaleWidth(8),
    gap: scaleHeight(12),
    marginTop: scaleHeight(16),
  },
  weekWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(16),
    marginVertical: scaleHeight(12),
    alignContent: 'center',
  },
  weekText: {
    fontFamily: 'PublicSans-Bold',
    fontSize: scaleWidth(20),
    fontWeight: '700',
    lineHeight: scaleHeight(30),
    color: '#0A0A0A',
    textAlign: 'center',
    flex: 1,
  },
  arrowButton: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
