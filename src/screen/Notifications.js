import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {FONTS, SIZES} from '../constant/sizes';
import CustomText from '../component/customText';
import {windowHeight, windowWidth} from '../utility/utils';
import {notifications} from '../constant/arrays';
import {moderateScale} from 'react-native-size-matters';
import {useTheme} from '../context/ThemeContext';

const NotificationScreen = () => {
  const {theme} = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        {backgroundColor: theme.background},
      ]}
      showsVerticalScrollIndicator={true}>
      <Header headerColor={theme.background} hideUser={true} />

      <View style={[styles.main_view, {backgroundColor: theme.background}]}>
        <CustomText style={[styles.heading, {color: theme.text}]} isBold>
          Notifications
        </CustomText>

        <CustomText style={[styles.subHeading, {color: theme.veryLightGray}]}>
          you have one Unread notification
        </CustomText>

        <FlatList
          data={notifications}
          style={{
            flex: 1,
            paddingBottom: moderateScale(10, 0.6),
          }}
          contentContainerStyle={{
            paddingBottom: moderateScale(10, 0.6),
          }}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles.card_view,
                  {
                    backgroundColor: item?.background || theme.card,
                    borderColor: item?.border || theme.border,
                    borderWidth: 1,
                  },
                ]}>
                <View style={{flex: 1}}>
                  <CustomText
                    isBold
                    style={[styles.title, {color: theme.text}]}>
                    {item?.title}
                  </CustomText>

                  <CustomText
                    style={[
                      styles.message,
                      {color: theme.mediumGray},
                      item?.type === 'ride_request'
                        ? styles.smallMessage
                        : styles.regularMessage,
                    ]}>
                    {item?.message}
                  </CustomText>

                  {item?.type === 'ride_request' && (
                    <View style={styles.locationContainer}>
                      <View style={styles.locationRow}>
                        <CustomText
                          isBold
                          style={[styles.locationLabel, {color: theme.text}]}>
                          {'from :'}
                        </CustomText>
                        <CustomText
                          style={[
                            styles.locationValue,
                            {color: theme.mediumGray},
                          ]}>
                          {item?.location?.pickup}
                        </CustomText>
                      </View>

                      <View style={styles.locationRow}>
                        <CustomText
                          isBold
                          style={[styles.locationLabel, {color: theme.text}]}>
                          {'To :'}
                        </CustomText>
                        <CustomText
                          style={[
                            styles.locationValue,
                            {color: theme.mediumGray},
                          ]}>
                          {item?.location?.dropoff || item?.location?.pickup}
                        </CustomText>
                      </View>
                    </View>
                  )}
                </View>

                {/* Time */}
                <CustomText style={[styles.time, {color: theme.mediumGray}]}>
                  {item?.time}
                </CustomText>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  main_view: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    paddingTop: SIZES.padding2,
  },
  heading: {
    ...FONTS.Bold18,
    textAlign: 'left',
    width: windowWidth * 0.9,
    marginTop: SIZES.padding2,
    marginBottom: SIZES.base,
  },
  subHeading: {
    ...FONTS.UrbanistLight14,
    textAlign: 'left',
    width: windowWidth * 0.9,
    marginBottom: SIZES.padding,
  },
  card_view: {
    width: windowWidth * 0.9,
    minHeight: windowWidth * 0.22,
    marginTop: SIZES.padding,
    paddingHorizontal: moderateScale(12, 0.6),
    paddingVertical: moderateScale(12, 0.6),
    borderRadius: moderateScale(10, 0.8),
    alignSelf: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...FONTS.Bold13,
    marginBottom: moderateScale(4, 0.6),
  },
  message: {
    width: '90%',
    marginBottom: moderateScale(4, 0.6),
  },
  regularMessage: {
    ...FONTS.Regular13,
  },
  smallMessage: {
    ...FONTS.UrbanistLight11,
  },
  locationContainer: {
    marginTop: moderateScale(4, 0.6),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(2, 0.6),
  },
  locationLabel: {
    ...FONTS.UrbanistLight11,
    marginRight: moderateScale(4, 0.5),
  },
  locationValue: {
    ...FONTS.UrbanistLight11,
    flex: 1,
  },
  time: {
    ...FONTS.UrbanistLight11,
    position: 'absolute',
    top: moderateScale(12, 0.6),
    right: moderateScale(12, 0.6),
  },
  row_view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image_view: {
    width: SIZES.windowWidth * 0.18,
    height: SIZES.windowWidth * 0.18,
    borderRadius: SIZES.windowWidth / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
