import {StyleSheet, Text, View} from 'react-native';
import {scaleWidth} from '../utility/dimen';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CommunityScreen</Text>
    </View>
  );
};

export default CommunityScreen;

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
