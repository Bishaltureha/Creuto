import React from 'react';
import {
StyleSheet,
View,
Text,
Image,
Dimensions,
TouchableOpacity,
} from 'react-native';
import DoubleFrontArrow from '../assets/svg/DoubleFrontArrow';
import {useNavigation} from '@react-navigation/native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const scaleX = screenWidth / 360;
const scaleY = screenHeight / 800;

const WeatherCard = () => {
const navigation = useNavigation();

const forecast = [
{icon: require('../assets/image/Cloudy.png'), temp: 30, day: 'Sun'},
{icon: require('../assets/image/Raining.png'), temp: 29, day: 'Mon'},
{icon: require('../assets/image/Lighting.png'), temp: 31, day: 'Tue'},
{icon: require('../assets/image/Sun.png'), temp: 32, day: 'Wed'},
{icon: null, temp: null, day: 'Thu'},
{icon: null, temp: null, day: 'Fri'},
{icon: null, temp: null, day: 'Sat'},
];

return (
<View style={styles.card}>
{/_ Top Section _/}
<View style={styles.topRow}>
<View>
<Text style={styles.dateText}>Wednesday, 05 June 2024</Text>
<Text style={styles.locationText}>Jalandhar, Punjab, India</Text>

          {/* Temperature + Degree */}
          <View style={styles.tempRow}>
            <Text style={styles.tempText}>32</Text>
            <Text style={styles.degree}>°</Text>
          </View>

          <Text style={styles.weatherStatus}>Sunny, Cloudy</Text>
          <Text style={styles.humidityText}>Humidity 77%</Text>
        </View>

        {/* Weather Icon */}
        <Image
          source={require('../assets/image/Sun.png')}
          style={styles.weatherIcon}
          resizeMode="contain"
        />
      </View>

      {/* Divider */}
      <View style={styles.dashedLine} />

      {/* Small Cards Row */}
      <View style={styles.row}>
        {forecast.map((item, index) => (
          <View style={styles.smallCard} key={index}>
            {item.icon ? (
              <Image
                source={item.icon}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
            ) : (
              <View style={styles.emptyBox} />
            )}
            <View style={styles.textBox}>
              {item.temp !== null ? (
                <View style={styles.tempRow}>
                  <Text style={styles.smallTempText}>{item.temp}</Text>
                  <Text style={styles.smallDegree}>°</Text>
                </View>
              ) : (
                <Text style={styles.dashText}>--</Text>
              )}
              <Text style={styles.dayText}>{item.day}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Divider */}
      <View style={styles.dashedLine} />

      {/* Check More Row */}
      <TouchableOpacity
        style={styles.moreRow}
        onPress={() => navigation.navigate('WeatherReport')}>
        <Text style={styles.moreText}>Check More on Weather</Text>
        <DoubleFrontArrow />
      </TouchableOpacity>
    </View>

);
};

export default WeatherCard;

const styles = StyleSheet.create({
card: {
width: 328 _ scaleX,
height: 280 _ scaleY,
padding: 12 _ scaleX,
borderRadius: 8 _ scaleX,
backgroundColor: '#FFFFFF',
shadowColor: '#111111',
shadowOffset: {width: 0, height: 0},
shadowOpacity: 0.15,
shadowRadius: 4 _ scaleX,
elevation: 4,
alignSelf: 'center',
marginTop: 90 _ scaleY,
},
topRow: {
flexDirection: 'row',
justifyContent: 'space-between',
},
dateText: {
fontSize: 14 _ scaleX,
fontWeight: '400',
color: '#0A0A0A',
},
locationText: {
color: '#C4C4C4',
fontWeight: '400',
fontSize: 12 _ scaleX,
marginBottom: 12 _ scaleY,
},
weatherIcon: {
width: 122 _ scaleX,
height: 122 _ scaleY,
},
tempRow: {
flexDirection: 'row',
alignItems: 'flex-start',
},
tempText: {
fontSize: 32 _ scaleX,
fontWeight: '700',
color: '#0A0A0A',
},
degree: {
fontSize: 14 _ scaleX,
fontWeight: '700',
marginTop: 2 _ scaleY,
color: '#0A0A0A',
},
weatherStatus: {
color: '#0063D8',
fontWeight: '600',
fontSize: 12 _ scaleX,
},
humidityText: {
fontWeight: '400',
fontSize: 12 _ scaleX,
color: '#C4C4C4',
},
row: {
flexDirection: 'row',
height: 64 _ scaleY,
width: 304 _ scaleX,
gap: 4 _ scaleX,
},
smallCard: {
width: 40 _ scaleX,
height: 64 _ scaleY,
borderRadius: 6 _ scaleX,
paddingVertical: 4 _ scaleY,
paddingHorizontal: 8 _ scaleX,
backgroundColor: '#F7FBFF',
justifyContent: 'space-between',
alignItems: 'center',
},
emptyBox: {
width: 24 _ scaleX,
height: 24 _ scaleY,
backgroundColor: '#ffffff',
},
textBox: {
justifyContent: 'center',
alignItems: 'center',
},
smallTempText: {
fontSize: 12 _ scaleX,
fontWeight: '500',
color: '#0A0A0A',
lineHeight: 12 _ scaleY,
},
smallDegree: {
fontSize: 11 _ scaleX,
fontWeight: '600',
marginTop: -5 _ scaleY,
color: '#0A0A0A',
},
dashText: {
color: '#0A0A0A',
fontSize: 12 _ scaleX,
fontWeight: '500',
},
dashedLine: {
width: 304 _ scaleX,
borderWidth: 1,
borderStyle: 'dashed',
borderColor: '#F5F5F5',
marginVertical: 8 _ scaleY,
},
moreRow: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
marginTop: 4 _ scaleY,
},
moreText: {
color: '#0063D8',
fontWeight: '600',
fontSize: 14 _ scaleX,
marginRight: 4 _ scaleX,
},
dayText: {
fontWeight: '400',
fontSize: 11 \* scaleX,
color: '#C4C4C4',
},
});
