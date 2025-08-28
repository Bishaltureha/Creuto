import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppProvider} from '../context/AppContext';
import SplashScreen from '../screen/SplashScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import BottomNavigation from './BottomNavigation';
import WeatherReport from '../screen/WeatherReport';
import {WeatherList} from '../types';

export type RootStackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  BottomNavigation: undefined;
  WeatherReport: {
    weatherData: {
      length: number;
      list: WeatherList[];
      cnt: number;
      city: {name: string};
    };
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{animation: 'fade'}}
          />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{animation: 'fade'}}
          />
          <Stack.Screen name="WeatherReport" component={WeatherReport} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Navigation;
