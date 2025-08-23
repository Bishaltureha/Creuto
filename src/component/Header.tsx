import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BackArrow from '../assets/svg/BackArrow';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {scaleWidth, screenWidth} from '../utility/dimen';
import {Helpers} from '../utility/helper';
import {useAppContext} from '../context/AppContext';

interface Props {
  onBack: () => void;
  currentIndex: number;
}

const Header = ({onBack, currentIndex}: Props) => {
  const {refreshLocation} = useAppContext();
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      {currentIndex > 0 ? (
        <TouchableOpacity onPress={onBack}>
          <BackArrow size={28} color="#000000" />
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}

      <TouchableOpacity
        onPress={() => {
          Helpers.setOnboardingDone();
          refreshLocation(true);
          navigation.navigate('BottomNavigation');
        }}>
        <Text style={styles.city}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(16),
    width: screenWidth,
  },
  city: {
    fontSize: scaleWidth(18),
    fontWeight: '600',
    color: '#000',
  },
  spacer: {
    width: scaleWidth(24),
  },
});
