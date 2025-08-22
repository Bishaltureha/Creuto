import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {scaleWidth} from '../utility/dimen';

const TradeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TradeScreen</Text>
    </View>
  );
};

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: scaleWidth(20),
    fontWeight: 'bold',
    color: '#333',
  },
});
