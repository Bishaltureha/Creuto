import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import BlueBox from '../assets/svg/BlueBox';
import {scaleHeight, scaleWidth} from '../utility/dimen';

const BlueCard = () => {
  return (
    <View style={styles.card}>
      <BlueBox
        style={styles.bgImage}
        width={'100%'}
        height={'100%'}
        preserveAspectRatio="xMidYMid slice"
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          Complete Your Profile to help us know you better.
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => console.log('Complete Profile')}>
          <Text style={styles.buttonText}>Complete Profile</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/image/BlueBox.png')}
        style={styles.image}
      />
    </View>
  );
};

export default BlueCard;
const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: scaleHeight(124),
    borderRadius: scaleWidth(12),
    elevation: 4,
    shadowColor: '#919EAB',
    shadowOffset: {width: 0, height: scaleHeight(6)},
    shadowOpacity: 0.12,
    shadowRadius: scaleWidth(12),
    backgroundColor: 'white',
    position: 'relative',
    marginBottom: scaleHeight(4),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: scaleWidth(116),
    height: scaleHeight(116),
    resizeMode: 'contain',
    marginRight: scaleWidth(12),
    marginLeft: scaleWidth(24),
    bottom: scaleHeight(-12),
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    gap: scaleHeight(12),
    marginLeft: scaleWidth(12),
  },
  text: {
    fontSize: scaleWidth(14),
    color: '#0A0A0A',
    fontWeight: '600',
    flexShrink: 1,
    lineHeight: scaleHeight(22),
  },
  button: {
    backgroundColor: '#0063D8',
    paddingVertical: scaleHeight(8),
    paddingHorizontal: scaleWidth(10),
    borderRadius: scaleWidth(8),
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: scaleWidth(12),
    fontWeight: 'bold',
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: scaleWidth(12),
    overflow: 'hidden',
  },
});
