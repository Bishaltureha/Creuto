import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {scaleHeight, scaleWidth} from '../utility/dimen';

const RateUS = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>
        Join us in revolutionizing aquaculture by sharing your experience with
        the Weather App app.
      </Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/image/Rating.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.subText}>Your feedback makes a difference!</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Rate Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RateUS;

const styles = StyleSheet.create({
  box: {
    height: scaleHeight(244),
    borderRadius: scaleWidth(12),
    padding: scaleWidth(12),
    borderWidth: scaleWidth(2),
    backgroundColor: '#E8FFB7',
    borderColor: '#DFFC9E',
    marginTop: scaleHeight(12),
    marginBottom: scaleHeight(20),
    gap: scaleHeight(4),
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: scaleWidth(16),
    lineHeight: scaleHeight(22),
    textAlign: 'center',
    color: '#0A0A0A',
    paddingHorizontal: scaleWidth(20),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scaleHeight(8),
  },
  image: {
    width: scaleWidth(64),
    height: scaleHeight(64),
    resizeMode: 'contain',
  },
  subText: {
    fontWeight: '400',
    fontSize: scaleWidth(12),
    lineHeight: scaleHeight(18),
    textAlign: 'center',
    color: '#0A0A0A',
    marginBottom: scaleHeight(8),
  },
  button: {
    height: scaleHeight(36),
    paddingHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(8),
    backgroundColor: '#0063D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: scaleWidth(14),
    lineHeight: scaleHeight(24),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
