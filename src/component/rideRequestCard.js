import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import CustomText from './customText';
import Colors from '../config/appTheme';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../utility/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FONTS, SIZES} from '../constant/sizes';
import {Divider, Icon} from 'native-base';
import CustomButton from './customButton';
import navigationServices from '../navigator/navigationServices';
import {useTheme} from '../context/ThemeContext';
const RideRequestCard = ({item}) => {
  const {theme} = useTheme();

  return (
    <View
      style={[
        styles.card_view,
        {
          backgroundColor: theme.card,
          shadowColor: theme.primary,
        },
      ]}>
      <View style={styles.row}>
        <Image source={item.image} style={styles.rider_image} />
        <View style={{marginLeft: moderateScale(10, 0.6)}}>
          <CustomText isBold style={[styles.rider_name, {color: theme.text}]}>
            {item.name}
          </CustomText>
          <CustomText style={[styles.rating, {color: theme.darkGray}]}>
            {item.riderRating} ⭐
          </CustomText>
        </View>
        <CustomText isBold style={[styles.vehicle, {color: theme.primary}]}>
          {item.fare}
        </CustomText>
      </View>

      <View style={styles.locationContainer}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Icon
            as={FontAwesome}
            name="location-arrow"
            size={moderateScale(20, 0.2)}
            color={theme.error || '#DA3029'}
          />
          <TouchableOpacity style={styles.locationPickerBtn}>
            <CustomText
              isBold
              style={[
                styles.locationText,
                {
                  color: theme.text,
                  width: windowWidth * 0.7,
                },
              ]}>
              {item?.pickupLocation}
            </CustomText>
          </TouchableOpacity>
        </View>

        <View style={styles.dotView}>
          <View style={{gap: -5}}>
            <Icon
              as={Entypo}
              name="dots-two-vertical"
              size={moderateScale(20, 0.2)}
              color={theme.primary}
            />
          </View>
          <Divider
            bg={theme.border}
            width={'2xs'}
            borderWidth={0.2}
            marginLeft={2}
            borderColor={theme.border}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Icon
            as={Entypo}
            name="location-pin"
            size={moderateScale(20, 0.2)}
            color={theme.accent || theme.yellow || '#EBB645'}
          />
          <TouchableOpacity onPress={() => {}} style={styles.locationPickerBtn}>
            <CustomText
              isBold
              style={[
                styles.locationText,
                {
                  color: theme.text,
                  width: windowWidth * 0.7,
                },
              ]}>
              {item?.dropoffLocation}
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.row, {marginTop: moderateScale(10, 0.6)}]}>
        <View style={styles.info_box}>
          <FontAwesome
            name="road"
            size={moderateScale(18, 0.6)}
            color={theme.primary}
          />
          <CustomText isBold style={[styles.info_text, {color: theme.text}]}>
            {item.distance}
          </CustomText>
        </View>

        <View style={styles.info_box}>
          <Ionicons
            name="time-outline"
            size={moderateScale(18, 0.6)}
            color={theme.primary}
          />
          <CustomText isBold style={[styles.info_text, {color: theme.text}]}>
            {item.duration}
          </CustomText>
        </View>

        <View style={styles.info_box}>
          <FontAwesome
            name="dollar"
            size={moderateScale(18, 0.6)}
            color={theme.primary}
          />
          <CustomText isBold style={[styles.info_text, {color: theme.text}]}>
            {item.fare}
          </CustomText>
        </View>
      </View>
      <CustomButton
        text={'Accept Request'}
        textColor={theme.white}
        width={windowWidth * 0.8}
        height={windowHeight * 0.06}
        marginTop={SIZES.padding}
        bgColor={theme.button_gredient || ['#46cc00', '#339500']}
        borderRadius={moderateScale(10, 0.6)}
        isBold
        isGradient
        elevation
        // onPress={() =>
        //   navigationServices.navigate('AcceptRideRequest', {data: item})
        // }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card_view: {
    width: windowWidth * 0.9,
    padding: moderateScale(12, 0.6),
    borderRadius: moderateScale(12, 0.6),
    marginVertical: moderateScale(8, 0.6),
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rider_image: {
    width: moderateScale(50, 0.6),
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  rider_name: {
    fontSize: moderateScale(16, 0.6),
  },
  rating: {
    fontSize: moderateScale(12, 0.6),
  },
  vehicle: {
    ...FONTS.Bold22,
    marginLeft: 'auto',
  },
  locationContainer: {
    width: windowWidth * 0.9,
    marginTop: moderateScale(8, 0.6),
  },
  locationText: {
    ...FONTS.Regular12,
    marginLeft: moderateScale(10, 0.6),
  },
  locationPickerBtn: {
    paddingTop: moderateScale(8, 0.2),
    paddingLeft: moderateScale(10, 0.8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  dotView: {
    flexDirection: 'row',
    gap: moderateScale(2, 0.2),
    alignItems: 'center',
  },
  info_box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(15, 0.6),
    backgroundColor: 'rgba(0,0,0,0.03)',
    paddingHorizontal: moderateScale(8, 0.6),
    paddingVertical: moderateScale(4, 0.6),
    borderRadius: moderateScale(15, 0.6),
  },
  info_text: {
    marginLeft: moderateScale(5, 0.6),
    ...FONTS.Regular12,
  },
});

export default RideRequestCard;
