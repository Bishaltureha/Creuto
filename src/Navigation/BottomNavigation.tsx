// Custom BottomNavigation
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Screens
import HomeScreen from '../screen/HomeScreen';
import PriceScreen from '../screen/PriceScreen';
import CommunityScreen from '../screen/CommunityScreen';
import TradeScreen from '../screen/TradeScreen';

// SVG Icons
import HomeIcon from '../assets/svg/HomeIcon';
import CommunityIcon from '../assets/svg/CommunityIcon';
import TradeIcon from '../assets/svg/TradeIcon';
import PricesIcon from '../assets/svg/PricesIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight, scaleWidth} from '../utility/dimen';

const TABS = [
  {name: 'Home', component: HomeScreen, Icon: HomeIcon},
  {name: 'Price', component: PriceScreen, Icon: PricesIcon},
  {name: 'Community', component: CommunityScreen, Icon: CommunityIcon},
  {name: 'Trade', component: TradeScreen, Icon: TradeIcon},
];

const BottomNavigation = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  const inset = useSafeAreaInsets();

  const ActiveScreen =
    TABS.find(tab => tab.name === selectedTab)?.component || HomeScreen;

  return (
    <View style={styles.container}>
      {/* Active Screen */}
      <View style={styles.content}>
        <ActiveScreen />
      </View>

      {/* Bottom Navigation */}
      <View
        style={[styles.bottomTab, {paddingBottom: Math.min(inset.bottom, 22)}]}>
        {TABS.map(({name, Icon}) => {
          const isActive = selectedTab === name;
          return (
            <TouchableOpacity
              key={name}
              activeOpacity={0.7}
              style={styles.tabButton}
              onPress={() => setSelectedTab(name)}>
              <Icon color={isActive ? '#0063D8' : '#C4C4C4'} />
              <Text
                style={[
                  styles.label,
                  {color: isActive ? '#0063D8' : '#C4C4C4'},
                ]}>
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  bottomTab: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: scaleHeight(10),
    paddingHorizontal: scaleWidth(8),
    paddingBottom: scaleHeight(6),
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: scaleWidth(60),
    paddingVertical: scaleHeight(6),
  },
  label: {
    fontSize: scaleWidth(12),
    marginTop: scaleHeight(2),
    color: '#0A0A0A',
    fontWeight: '500',
  },
});
