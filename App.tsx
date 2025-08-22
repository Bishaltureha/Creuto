import React, {useEffect} from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/Navigation/Navigation';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <Navigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
