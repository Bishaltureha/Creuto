import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import CloudCard from '../assets/svg/CloudCard';
import {scaleHeight, scaleWidth} from '../utility/dimen';

interface Props {
  containerStyle: ViewStyle;
  refreshLocation: () => void;
}

const YellowCard = ({containerStyle, refreshLocation}: Props) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <CloudCard
        style={styles.bgImage}
        width={'100%'}
        height={'100%'}
        preserveAspectRatio="xMidYMid slice"
      />
      <View style={styles.row}>
        <Image
          source={require('../assets/image/Phone.png')}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.text}>
            Get weather reports for your area. Turn on location.
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={refreshLocation}>
            <Text style={styles.buttonText}>Enable Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default YellowCard;

const styles = StyleSheet.create({
  card: {
    height: scaleHeight(124),
    borderRadius: scaleWidth(12),
    backgroundColor: '#FFFFFF',
    position: 'relative',
    justifyContent: 'center',

    // iOS shadow
    shadowColor: '#919EAB',
    shadowOffset: {width: 0, height: scaleHeight(6)},
    shadowOpacity: 0.12,
    shadowRadius: scaleWidth(12),

    // Android shadow
    elevation: 4,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: scaleHeight(12),
  },
  image: {
    width: scaleWidth(86),
    height: scaleHeight(86),
    resizeMode: 'contain',
    marginRight: scaleWidth(12),
    marginLeft: scaleWidth(24),
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    gap: scaleHeight(12),
    height: '100%',
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
    color: '#FFFFFF',
    fontSize: scaleWidth(13),
    fontWeight: '500',
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: scaleWidth(12),
    overflow: 'hidden',
  },
});
