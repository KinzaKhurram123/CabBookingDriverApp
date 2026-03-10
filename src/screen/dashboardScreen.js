import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Icon} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import Header from '../component/Header';
import CustomText from '../component/customText';
import CustomImage from '../component/customImage';
import Images from '../assests/Appimages';
import {windowHeight, windowWidth} from '../utility/utils';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import {rideRequests} from '../constant/arrays';
import RideRequestCard from '../component/rideRequestCard';
import {useTheme} from '../context/ThemeContext';

const DashBoardScreen = () => {
  const {theme} = useTheme();
  const today_date = Date.now();

  const CardView = () => {
    return (
      <View style={styles.cards_row}>
        <View
          style={[
            styles.card_big_view,
            {
              backgroundColor: theme.card,
              shadowColor: theme.primary,
            },
          ]}>
          <Icon
            name="car-sport"
            as={Ionicons}
            size={moderateScale(50, 0.6)}
            color={theme.secondary}
          />
          <CustomText
            isBold
            style={[styles.card_value, {color: theme.primary}]}>
            0
          </CustomText>
          <CustomText isBold style={[styles.card_title, {color: theme.text}]}>
            Today’s Total Rides
          </CustomText>
          <CustomText style={[styles.card_text, {color: theme.darkGray}]}>
            Total rides completed today. Track how many trips you have
            successfully finished today.
          </CustomText>
        </View>

        <View style={styles.small_cards_container}>
          <View
            style={[
              styles.card_small_view,
              {
                backgroundColor: theme.card,
                shadowColor: theme.primary,
              },
            ]}>
            <Icon
              name="location"
              as={Entypo}
              size={moderateScale(20, 0.6)}
              color={theme.secondary || theme.primary}
            />
            <CustomText
              isBold
              style={[styles.small_card_value, {color: theme.primary}]}>
              0 km
            </CustomText>
            <CustomText
              isBold
              style={[styles.small_card_title, {color: theme.text}]}>
              Distance Covered
            </CustomText>
            <CustomText
              style={[styles.small_card_text, {color: theme.darkGray}]}>
              Total kilometers driven today.
            </CustomText>
          </View>

          <View
            style={[
              styles.card_small_view,
              {
                backgroundColor: theme.card,
                shadowColor: theme.primary,
              },
            ]}>
            <Icon
              name="money"
              as={FontAwesome}
              size={moderateScale(20, 0.6)}
              color={theme.accent || theme.primary}
            />
            <CustomText
              isBold
              style={[styles.small_card_value, {color: theme.primary}]}>
              $0
            </CustomText>
            <CustomText
              isBold
              style={[styles.small_card_title, {color: theme.text}]}>
              Today’s Earnings
            </CustomText>
            <CustomText
              style={[styles.small_card_text, {color: theme.darkGray}]}>
              Your total earnings for today.
            </CustomText>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        {backgroundColor: theme.background},
      ]}
      showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={theme.gradient || ['#000000', theme.primary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.header_view}>
        <Header headerColor={'transparent'} iconColor={theme.white} />
        <View style={styles.header_text_row}>
          <CustomText isBold style={[styles.heading, {color: theme.white}]}>
            Good Morning Johnson
          </CustomText>
          <View
            style={[
              styles.icon_view,
              {backgroundColor: 'rgba(255, 255, 255, 0.2)'},
            ]}>
            <Icon
              name="notifications"
              as={Ionicons}
              size={moderateScale(30, 0.6)}
              color={theme.white}
            />
          </View>
        </View>
        <CustomText style={[styles.date, {color: theme.white}]}>
          {moment(today_date).format('dddd, MMMM Do YYYY')}
        </CustomText>
        <View style={styles.image_view}>
          <CustomImage source={Images.car_image} style={styles.image} />
        </View>
      </LinearGradient>
      <View style={[styles.main_view]}>
        <CardView />

        <View style={styles.ride_request_container}>
          <CustomText isBold style={[styles.heading_text, {color: theme.text}]}>
            Ride Requests
          </CustomText>

          <FlatList
            data={rideRequests}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <RideRequestCard item={item} />}
            contentContainerStyle={{paddingBottom: moderateScale(20, 0.6)}}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  header_view: {
    width: windowWidth,
    height: windowHeight * 0.28,
    paddingTop: moderateScale(20, 0.6),
    alignItems: 'flex-start',
  },
  header_text_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    marginTop: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(15, 0.6),
  },
  heading: {
    ...FONTS.Bold24,
    width: '70%',
  },
  icon_view: {
    width: windowWidth * 0.14,
    height: windowWidth * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10, 0.7),
  },
  date: {
    ...FONTS.Regular12,
    marginTop: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(15, 0.6),
    width: windowWidth,
  },
  image_view: {
    position: 'absolute',
    top: windowHeight * 0.1,
    right: moderateScale(10, 0.6),
    width: windowWidth * 0.55,
    height: windowWidth * 0.65,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  main_view: {
    paddingHorizontal: moderateScale(15, 0.6),
    marginTop: moderateScale(10, 0.6),
    alignItems: 'center',
  },
  cards_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth * 0.92,
    marginTop: moderateScale(50, 0.6),
  },
  card_big_view: {
    width: windowWidth * 0.55,
    borderRadius: moderateScale(12, 0.6),
    padding: moderateScale(12, 0.6),
    height: windowHeight * 0.29,
    marginBottom: moderateScale(10, 0.6),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  small_cards_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card_small_view: {
    width: windowWidth * 0.35,
    borderRadius: moderateScale(10, 0.6),
    padding: moderateScale(10, 0.6),
    marginBottom: moderateScale(10, 0.6),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card_value: {
    ...FONTS.Bold34,
    marginTop: moderateScale(10, 0.6),
  },
  card_title: {
    ...FONTS.Regular16,
    marginTop: moderateScale(8, 0.6),
  },
  card_text: {
    ...FONTS.Regular12,
    marginTop: moderateScale(4, 0.6),
  },
  small_card_value: {
    ...FONTS.Bold12,
    marginTop: moderateScale(5, 0.7),
  },
  small_card_title: {
    ...FONTS.Regular12,
    marginTop: moderateScale(4, 0.6),
  },
  small_card_text: {
    ...FONTS.Regular10,
    marginTop: moderateScale(2, 0.6),
  },
  ride_request_container: {
    width: '100%',
    marginTop: moderateScale(20, 0.6),
  },
  heading_text: {
    ...FONTS.Bold18,
    marginBottom: moderateScale(10, 0.6),
  },
});

export default DashBoardScreen;
