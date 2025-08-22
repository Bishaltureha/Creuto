import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '../storage/storageKeys';
import {ClimateForecast, WeatherList, WeatherType} from '../types';

dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

export enum DateFormats {
  dateMonth = 'dddd, DD MMMM',
  day = 'ddd',
  dateMonthYear = 'dddd, DD MMMM YYYY',
  shortDateMonth = 'DD MMM',
}

export const Helpers = {
  formatDate: (
    dateString: string,
    format: DateFormats = DateFormats.dateMonthYear,
  ) => {
    if (!dateString) return '';

    const date = dayjs(dateString);
    const formatted = date.format(format);
    return formatted;
  },
  formatDateUnix: (dateUnix: number) => {
    const date = dayjs.unix(dateUnix);
    const formatted = date.format('ddd');
    return formatted;
  },
  mapForecastToClimate: (forecast: ClimateForecast) => {
    const mainWeather = forecast.weather[0].main;
    const description = forecast.weather[0].description;
    const clouds = forecast.clouds?.all || 0;

    let climateType;

    if (mainWeather === 'Rain') {
      climateType = 'Rain';
    } else if (mainWeather === 'Thunderstorm') {
      climateType = 'Lightning';
    } else if (mainWeather === 'Clouds') {
      climateType = clouds > 50 ? 'Cloud' : 'Clear';
    } else if (mainWeather === 'Clear') {
      climateType = 'Sun';
    } else {
      // fallback for unexpected weather types
      climateType = description.charAt(0).toUpperCase() + description.slice(1);
    }

    return climateType;
  },
  capitalize: (text: string) => {
    if (text.length === 0) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
  checkOnboardingStatus: async (): Promise<boolean> => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEYS.ONBOARDING);
      return value === 'true';
    } catch (err) {
      console.error('Error checking onboarding status:', err);
      return false;
    }
  },
  setOnboardingDone: async (): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING, 'true');
    } catch (err) {
      console.error('Error setting onboarding:', err);
    }
  },
  getDailyForecast: (list: WeatherList[]) => {
    const seen = new Set();
    return list.filter(item => {
      const date = item.dt_txt.split(' ')[0]; // extract "YYYY-MM-DD"
      if (seen.has(date)) return false;
      seen.add(date);
      return true;
    });
  },
  lodashGet: function get(obj: any, path: string, defaultValue?: any): any {
    const keys = path.replace(/\[(\w+)\]/g, '.$1').split('.');
    return (
      keys.reduce(
        (acc, key) => (acc && key in acc ? acc[key] : undefined),
        obj,
      ) ?? defaultValue
    );
  },
  chunkArray(arr: WeatherList[], size: number) {
    if (!arr) {
      return [];
    }
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  },
};
