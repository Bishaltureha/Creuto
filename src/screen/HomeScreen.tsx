import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import BlueBackground from '../assets/svg/BlueBackground';
import NotificationBell from '../assets/svg/NotificationBell';
import Menu from '../assets/svg/Menu';
import WeatherCard from '../component/WeatherCard';
import YellowCard from '../component/YellowCard';
import SmallBox from '../component/SmallBox';
import RateUS from '../component/RateUS';
import BlueCard from '../component/BlueCard';
import CardSection1 from '../component/CardSection1';
import CardSection2 from '../component/CardSection2';
import Water from '../component/Water';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight, scaleWidth, screenWidth} from '../utility/dimen';
import {useAppContext} from '../context/AppContext';
import {getCurrentWeather, getWeatherForecast} from '../utility/weatherApi';
import {RefreshControl} from 'react-native-gesture-handler';
import {WeatherHomeResponse, WeatherType} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '../storage/storageKeys';

const data = [
  {
    id: '1',
    text: 'Crop Manuals',
    source: require('../assets/image/CropManuals.png'),
  },
  {
    id: '2',
    text: 'Crop Diseases',
    source: require('../assets/image/CropDiseases.png'),
  },
  {id: '3', text: 'Sell Crop', source: require('../assets/image/SellCrop.png')},
  {id: '4', text: 'Profile', source: require('../assets/image/Profile.png')},
];

const Data = [{}];

const HomeScreen = () => {
  const {loading, hasPermission, location, refreshLocation, weatherData} =
    useAppContext();

  const [localWeatherData, setLocalWeatherData] = useState<{
    weather: WeatherHomeResponse;
    forecast: WeatherType;
  } | null>(weatherData);

  const [isLoading, setIsLoading] = useState(false);

  const inset = useSafeAreaInsets();

  const getHomeWeather = async () => {
    try {
      setIsLoading(true);
      const data = (await Promise.allSettled([
        getCurrentWeather(location.latitude, location.longitude),
        getWeatherForecast(location.latitude, location.longitude),
      ])) as any;

      if (data[0]?.value && data[1]?.value) {
        const weatherData = {
          weather: data[0]?.value,
          forecast: data[1]?.value,
        };

        setLocalWeatherData(weatherData);
        AsyncStorage.setItem(
          STORAGE_KEYS.WEATHER_DATA,
          JSON.stringify(weatherData),
        );
      }
    } catch (error) {
      console.info(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHomeWeather();
  }, []);

  if (!localWeatherData) {
    return null;
  }

  return (
    <View style={styles.root}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getHomeWeather} />
        }
        contentContainerStyle={[
          styles.scrollContainer,
          {paddingTop: inset.top},
        ]}
        showsVerticalScrollIndicator={false}>
        <BlueBackground
          width={screenWidth + 2}
          height={224}
          preserveAspectRatio="none"
          style={styles.backgroundSvg}
        />
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Menu />
            <NotificationBell />
          </View>
          <Text style={styles.Text}>Good Morning Nihar,</Text>

          <WeatherCard weatherData={localWeatherData} />

          {!hasPermission && (
            <YellowCard
              refreshLocation={refreshLocation}
              containerStyle={styles.enableLocation}
            />
          )}

          <View style={styles.grid}>
            {data.map(item => (
              <SmallBox key={item.id} text={item.text} source={item.source} />
            ))}
          </View>

          <CardSection1 title="Culture Manual" />
          <BlueCard />
          <CardSection2 title="Crop Diseases" />
          <RateUS />

          <Water />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backgroundSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scaleHeight(48),
  },
  Text: {
    fontSize: scaleWidth(18),
    fontWeight: '700',
    color: '#ffffff',
  },
  grid: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: scaleHeight(12),
    marginTop: scaleHeight(8),
  },
  enableLocation: {
    marginVertical: scaleHeight(12),
  },
  contentContainer: {
    marginHorizontal: scaleWidth(16),
  },
});
