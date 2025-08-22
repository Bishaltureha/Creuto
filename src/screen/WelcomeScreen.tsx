import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Header from '../component/Header';
import {scaleHeight, scaleWidth, screenWidth} from '../utility/dimen';
import {Helpers} from '../utility/helper';
import {useAppContext} from '../context/AppContext';

const onboardingData = [
  {
    text: `India’s most reliable \n aquaculture app.`,
    buttonText: 'Next',
    image: require('../assets/image/Welcome1.png'),
  },
  {
    text: `Providing Appropriate \n Advisory Services`,
    buttonText: 'Next',
    image: require('../assets/image/Welcome2.png'),
  },
  {
    text: `Reinventing Market \n Structure with \n Sustainable Solutions`,
    buttonText: 'Get Started',
    image: require('../assets/image/Welcome3.png'),
  },
];

const WelcomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const {refreshLocation} = useAppContext();

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goNext = () => {
    if (currentIndex === onboardingData.length - 1) {
      Helpers.setOnboardingDone();
      refreshLocation();
      navigation.navigate('BottomNavigation');
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const {text, buttonText, image} = onboardingData[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Image source={image} style={styles.bottomImage} resizeMode="cover" />
      <Header onBack={goBack} currentIndex={currentIndex} />
      <View style={styles.textContainer}>
        <Text style={styles.smallTitle}>Welcome to Weather App!</Text>
        <Text style={styles.bigTitle}>{text}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextButton}
          activeOpacity={0.8}
          onPress={goNext}>
          <Text style={styles.nextText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbf7ff',
  },
  textContainer: {
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
    top: scaleHeight(156),
    alignItems: 'center',
  },
  smallTitle: {
    fontSize: scaleHeight(16),
    fontWeight: '600',
    color: '#0063D8',
    marginBottom: scaleHeight(8),
  },
  bigTitle: {
    fontSize: scaleHeight(28),
    fontWeight: '600',
    color: '#111111',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: scaleHeight(32),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  nextButton: {
    height: scaleHeight(48),
    borderRadius: scaleWidth(12),
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 36,
  },
  nextText: {
    color: '#fff',
    fontSize: scaleWidth(16),
    fontWeight: '600',
  },
  bottomImage: {
    position: 'absolute',
    width: screenWidth,
    bottom: 0,
  },
});
