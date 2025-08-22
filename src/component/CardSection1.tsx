import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import CultureCard from './CultureCard';
import {scaleHeight, scaleWidth} from '../utility/dimen';

interface Props {
  onSeeMore?: () => void;
  title: string;
}

const CardSection1 = ({title = 'Culture Manual', onSeeMore}: Props) => {
  const data = [
    {
      source: require('../assets/image/CultureManual1.png'),
      date: '03 June, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      source: require('../assets/image/CultureManual2.png'),
      date: '05 June, 2024',
      description: 'Another manual description here.',
    },
    {
      source: require('../assets/image/CultureManual1.png'),
      date: '03 June, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      source: require('../assets/image/CultureManual2.png'),
      date: '05 June, 2024',
      description: 'Another manual description here.',
    },
    {
      source: require('../assets/image/CultureManual1.png'),
      date: '03 June, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      source: require('../assets/image/CultureManual2.png'),
      date: '05 June, 2024',
      description: 'Another manual description here.',
    },
    {
      source: require('../assets/image/CultureManual1.png'),
      date: '03 June, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      source: require('../assets/image/CultureManual2.png'),
      date: '05 June, 2024',
      description: 'Another manual description here.',
    },
    {
      source: require('../assets/image/CultureManual1.png'),
      date: '03 June, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      source: require('../assets/image/CultureManual2.png'),
      date: '05 June, 2024',
      description: 'Another manual description here.',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onSeeMore}>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <CultureCard
            source={item.source}
            date={item.date}
            description={item.description}
          />
        )}
      />
    </View>
  );
};
export default CardSection1;
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: scaleHeight(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    fontSize: scaleWidth(18),
    color: '#0A0A0A',
  },
  seeMore: {
    fontWeight: '600',
    fontSize: scaleWidth(14),
    color: '#0063D8',
  },
  flatlistContainer: {
    marginTop: scaleHeight(8),
    paddingHorizontal: scaleWidth(1),
    gap: scaleWidth(12),
  },
  flatlist: {
    flexGrow: 0,
    paddingBottom: scaleHeight(18),
  },
});
