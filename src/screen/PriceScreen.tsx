import {StyleSheet, Text, View} from 'react-native';
import {scaleWidth} from '../utility/dimen';

const PriceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PriceScreen</Text>
    </View>
  );
};

export default PriceScreen;

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
