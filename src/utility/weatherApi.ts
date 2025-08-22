import axios from 'axios';
import {WeatherHomeResponse, WeatherType} from '../types';

// src/utility/weatherApi.js
const API_KEY = '5666698e40c8db24cedc13cfc3b487db';

export const getCurrentWeather = async (
  lat: number,
  lon: number,
): Promise<WeatherHomeResponse> => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const data = await axios.get(url);
    return data.data;
  } catch (err) {
    console.error('Weather fetch error:', err);
    throw err;
  }
};

// export const getWeeklyForecast = async (lat: number, lon: number) => {
//   try {
//     const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&units=metric&appid=${API_KEY}`;
//     console.info(url);
//     const res = await fetch(url);
//     const data = await res.json();
//     return data.daily;
//   } catch (err) {
//     console.error('Forecast fetch error:', err);
//     throw err;
//   }
// };

export const getWeatherForecast = async (
  lat: number,
  lon: number,
): Promise<WeatherType> => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const data = await axios.get(url);
    return data.data;
  } catch (err) {
    console.error('Forecast fetch error:', err);
    throw err;
  }
};

export const getPlaceWithCoords = async (lat: number, lon: number) => {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/reverselat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`;
    const data = await axios.get(url);
    return data.data;
  } catch (err) {
    console.error('Forecast fetch error:', err);
    throw err;
  }
};
