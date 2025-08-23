import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/svg/Logo';
import {Helpers} from '../utility/helper';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  // AsyncStorage.clear();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const timer = useRef<NodeJS.Timeout>();

  const handleNavigation = async () => {
    const hasOnboarded = await Helpers.checkOnboardingStatus();

    timer.current = setTimeout(() => {
      if (hasOnboarded) {
        navigation.replace('BottomNavigation');
      } else {
        navigation.replace('WelcomeScreen');
      }
    }, 1500);
  };

  useEffect(() => {
    handleNavigation();

    return () => clearTimeout(timer.current);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Logo />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1d75',
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1d75',
  },
});
