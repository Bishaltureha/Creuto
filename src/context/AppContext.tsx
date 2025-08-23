import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  Linking,
  PermissionsAndroid,
  Platform,
  unstable_batchedUpdates,
} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WeatherHomeResponse, WeatherType} from '../types';
import {STORAGE_KEYS} from '../storage/storageKeys';
import {Helpers} from '../utility/helper';

type Location = {
  latitude: number;
  longitude: number;
};

type AppContextType = {
  location: Location;
  loading: boolean;
  hasPermission: boolean;
  weatherData: {
    weather: WeatherHomeResponse;
    forecast: WeatherType;
  } | null;
  refreshLocation: (isOnboarding?: boolean) => Promise<void>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const MUMBAI_COORDS: Location = {
  latitude: 19.076,
  longitude: 72.8777,
};

const STORAGE_KEY = 'user_location';

export const AppProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [location, setLocation] = useState<Location>(MUMBAI_COORDS);
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    initLocation();
  }, []);

  const initLocation = async () => {
    try {
      let currentLocation: Location;
      let permission = false;
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        currentLocation = JSON.parse(stored);
      } else {
        // default Mumbai
        currentLocation = MUMBAI_COORDS;
      }

      const status = await Helpers.checkOnboardingStatus();

      if (status) {
        permission = await requestPermission();
      }

      const cacheWeather = await AsyncStorage.getItem(
        STORAGE_KEYS.WEATHER_DATA,
      );

      unstable_batchedUpdates(() => {
        setLocation(currentLocation);
        setHasPermission(permission);
        if (cacheWeather) {
          setWeatherData(JSON.parse(cacheWeather));
        }
      });
    } catch (err) {
      console.error('initLocation error:', err);
      setLoading(false);
    }
  };

  const requestPermission = async (isOnboarding = false): Promise<boolean> => {
    if (Platform.OS === 'ios') {
      const status = await Geolocation.requestAuthorization('whenInUse');
      return status === 'granted';
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need your location to improve app experience.',
          buttonPositive: 'OK',
        },
      );

      if (
        isOnboarding &&
        granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
      ) {
        Linking.openSettings();
        return false;
      }

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  };

  const refreshLocation = async (isOnboarding = false) => {
    try {
      const hasPermission = await requestPermission(isOnboarding);
      if (!hasPermission) {
        setHasPermission(false);
        console.warn('Location permission denied');
        setLoading(false);
        return;
      }

      setHasPermission(true);

      Geolocation.getCurrentPosition(
        async (pos: GeoPosition) => {
          const coords: Location = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          };
          setLocation(coords);
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(coords));
          setLoading(false);
        },
        error => {
          console.error('Error getting location:', error);
          setLoading(false);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (err) {
      console.error('refreshLocation error:', err);
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        location,
        loading,
        refreshLocation,
        hasPermission,
        weatherData,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useLocation must be used within AppProvider');
  }
  return context;
};
