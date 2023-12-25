import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const PHONE_WIDTH = Dimensions.get('window').width;
const HomeScreen = () => {
  return (
    <View style={styles.HomeScreenContainer}>
      <View style={styles.HomeScreenTopBar}>
        <Image style={styles.MenuImg} source={require('../assets/Menu.png')} />
        <Image
          style={styles.AlarmImg}
          source={require('../assets/Alarm.jpg')}
        />
      </View>
      <View style={styles.SearchIcon}>
        {/* <Icon name="search" size={20} color="gray" style={{margin: 10}} /> */}
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            flex: 1,
          }}
          placeholder="Search..."
        />
      </View>
      <View style={styles.UpcomingEvents}>
        <Text style={styles.UpcomingEventsText}>Upcoming Appointments</Text>
        <Text style={styles.UpcomingEventsText2}>See All</Text>
      </View>
      <View style={styles.UpcomingEventsCard}>
        <Image
          style={styles.UpcomingEventsUserLogo}
          source={require('../assets/userlogo.png')}
        />
        <View style={styles.UpcomingEventsDeepBox}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.BackgroundColorWhite,
  },
  HomeScreenTopBar: {
    width: PHONE_WIDTH,
    height: 38,
    marginTop: 20,
    backgroundColor: COLORS.BackgroundColorWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // overflow: 'hidden',
  },
  MenuImg: {
    marginLeft: 24,
  },
  AlarmImg: {
    marginRight: 24,
  },
  SearchIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 24,
    marginRight: 24,
    // overflow: 'hidden',
    // borderRadius: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#909090',
  },
  UpcomingEvents: {
    display: 'flex',
    width: PHONE_WIDTH,
    height: 25,
    paddingRight: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 26,
    marginRight: 23,
    marginTop: 18,
  },
  UpcomingEventsText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    // lineHeight: 22,
  },
  UpcomingEventsText2: {
    marginRight: 49,
    color: COLORS.TextColorBlue,
    fontFamily: 'Inter',
    fontSize: 13,
    textAlign: 'right',
  },
  UpcomingEventsCard: {
    width: PHONE_WIDTH - 47,
    height: 155,
    backgroundColor: COLORS.BackGroundColorBlue,
    marginLeft: 24,
    borderRadius: 18,
    marginTop: 14,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UpcomingEventsUserLogo: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: 'Black',
    borderBlockColor: 'Black',
    marginTop: 15,
    marginLeft: 15,
    bottom: 35,
  },
  UpcomingEventsDeepBox: {
    backgroundColor: COLORS.BackGroundColorDeepBlue,
    top: 32,
    right: 55,
    width: 308,
    height: 58,
    borderRadius: 18,
    // marginTop: 73,
    // display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
    marginRight: 18,
  },
});
export default HomeScreen;
