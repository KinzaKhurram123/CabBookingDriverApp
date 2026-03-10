import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../config/appTheme';
import Header from '../component/Header';
import {FONTS, SIZES} from '../constant/sizes';
import CustomText from '../component/customText';
import {windowHeight, windowWidth} from '../utility/utils';
import {history} from '../constant/arrays';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../component/customImage';
import {useTheme} from '../context/ThemeContext'; // Theme context import

const HistoryScreen = () => {
  const {theme} = useTheme(); // Theme le lo

  // Function to get status colors
  const getStatusColors = status => {
    if (status === 'Cancel' || status === 'Cancelled') {
      return {
        borderColor: theme.error || '#DA3029',
        backgroundColor: theme.error
          ? `${theme.error}20`
          : 'rgba(218, 48, 41, 0.2)', // 20% opacity
        textColor: theme.error || '#DA3029',
      };
    } else if (status === 'Completed') {
      return {
        borderColor: theme.success || theme.primary || '#46cc00',
        backgroundColor: theme.primary
          ? `${theme.primary}20`
          : 'rgba(70, 204, 0, 0.2)',
        textColor: theme.success || theme.primary || '#46cc00',
      };
    } else {
      return {
        borderColor: theme.accent || '#FFA500',
        backgroundColor: theme.accent
          ? `${theme.accent}20`
          : 'rgba(255, 165, 0, 0.2)',
        textColor: theme.accent || '#FFA500',
      };
    }
  };

  const renderHistoryItem = ({item}) => {
    const statusColors = getStatusColors(item?.status);

    return (
      <View
        style={[
          styles.card_view,
          {
            borderColor: statusColors.borderColor,
            backgroundColor: statusColors.backgroundColor,
          },
        ]}>
        <View style={[styles.image_view, {borderColor: theme.border}]}>
          <CustomImage source={item?.image} style={styles.image} />
        </View>

        <View style={{width: '55%'}}>
          <CustomText style={[styles.locationText, {color: theme.text}]} isBold>
            {item?.from}
          </CustomText>

          <CustomText
            style={[
              styles.locationText,
              {
                marginTop: moderateScale(6, 0.6),
                color: theme.text,
              },
            ]}
            isBold>
            {item?.to}
          </CustomText>

          <View style={[styles.row_view, {marginTop: moderateScale(5, 0.6)}]}>
            <CustomText
              style={[styles.statusLabel, {color: theme.veryLightGray}]}
              isBold>
              {'Status :'}
            </CustomText>
            <CustomText
              style={[
                styles.statusValue,
                {
                  color: statusColors.textColor,
                  marginLeft: moderateScale(5, 0.6),
                },
              ]}
              isBold>
              {item?.status}
            </CustomText>
          </View>
        </View>

        <View style={styles.fareContainer}>
          <CustomText style={[styles.dateText, {color: theme.veryLightGray}]}>
            {item?.date}
          </CustomText>
          <CustomText isBold style={[styles.fareText, {color: theme.primary}]}>
            {'$ ' + item?.fare}
          </CustomText>
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
      showsVerticalScrollIndicator={true}>
      <Header
        title={'History'}
        headerColor={theme.background}
        hideUser={true}
      />

      <View style={[styles.main_view, {backgroundColor: theme.background}]}>
        <CustomText style={[styles.heading, {color: theme.text}]} isBold>
          Your Previous Ride History
        </CustomText>

        <FlatList
          data={history}
          style={{
            height: windowHeight,
            width: windowWidth,
          }}
          contentContainerStyle={{
            paddingBottom: moderateScale(20, 0.6),
          }}
          renderItem={renderHistoryItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  main_view: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding2,
  },
  heading: {
    ...FONTS.Bold18,
    textAlign: 'left',
    width: windowWidth * 0.9,
    marginTop: SIZES.padding2,
    marginBottom: SIZES.base,
  },
  card_view: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.22,
    marginTop: SIZES.padding,
    paddingHorizontal: moderateScale(8, 0.6),
    paddingVertical: SIZES.padding,
    borderRadius: moderateScale(10, 0.8),
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row_view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image_view: {
    width: SIZES.windowWidth * 0.18,
    height: SIZES.windowWidth * 0.18,
    // borderRadius: SIZES.windowWidth / 2,
    // borderWidth: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  locationText: {
    ...FONTS.Bold12,
  },
  statusLabel: {
    ...FONTS.Bold11,
  },
  statusValue: {
    ...FONTS.Bold11,
  },
  fareContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
  },
  dateText: {
    ...FONTS.UrbanistLight11,
  },
  fareText: {
    ...FONTS.Bold18,
  },
});
