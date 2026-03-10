import {Icon} from 'native-base';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../assests/Appimages';
import CustomImage from '../component/customImage';
import CustomText from '../component/customText';
import VehicleCard from '../component/vehicleCard';
import Colors from '../config/appTheme';
import {rideHistory} from '../constant/arrays';
import {FONTS, SIZES} from '../constant/sizes';
import {windowWidth} from '../utility/utils';
import Header from '../component/Header';
import {useTheme} from '../context/ThemeContext';

const HomeScreen = () => {
  const {theme} = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        {backgroundColor: theme.background},
      ]}
      showsVerticalScrollIndicator={true}>
      <Header headerColor={theme.background} hideUser={true} />

      <View
        style={[
          styles.header_view,
          {
            backgroundColor: theme.card,
            borderTopColor: theme.primary,
            shadowColor: theme.primary,
          },
        ]}>
        <View
          style={[
            styles.row_view,
            {
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding2,
            },
          ]}>
          <View>
            <View style={styles.row_view}>
              <CustomText isBold style={[styles.heading, {color: theme.text}]}>
                Hello
              </CustomText>
              <CustomText
                isBold
                style={[styles.name_heading, {color: theme.text}]}>
                Path Jhonson
              </CustomText>
            </View>
            <CustomText style={[styles.text, {color: theme.mediumGray}]}>
              Jhonson@gmail.com
            </CustomText>
          </View>

          <View style={[styles.image_view, {borderColor: theme.primary}]}>
            <CustomImage
              source={Images.user_image2}
              style={[
                styles.image,
                {
                  borderRadius: SIZES.windowWidth / 2,
                },
              ]}
            />
          </View>
        </View>
        <View
          style={[
            styles.search_view,
            {
              backgroundColor: theme.lightGrey || '#F3F4F6',
            },
          ]}>
          <Icon
            name="location"
            as={Ionicons}
            size={SIZES.padding + 5}
            color={theme.error || '#DA3029'}
          />
          <View style={{marginLeft: SIZES.padding2}}>
            <CustomText
              style={[styles.location_heading, {color: theme.mediumGray}]}
              isBold>
              Yellowstone National Park
            </CustomText>
            <CustomText
              style={[styles.location_text, {color: theme.veryLightGray}]}>
              Wyoming, Montana, Idaho
            </CustomText>
          </View>
        </View>
      </View>
      <View style={[styles.sub_view, {backgroundColor: theme.background}]}>
        <CustomText style={[styles.title, {color: theme.text}]} isBold>
          Let's Book Your Ride :
        </CustomText>

        <VehicleCard />

        <CustomText
          style={[styles.title, {marginTop: SIZES.padding, color: theme.text}]}
          isBold>
          Past Rides :
        </CustomText>

        <FlatList
          data={rideHistory}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.past_ride_card,
                  {
                    backgroundColor: theme.card,
                    shadowColor: theme.primary,
                  },
                ]}>
                <View
                  style={[
                    styles.history_image,
                    {
                      backgroundColor: theme.background,
                      shadowColor: theme.primary,
                    },
                  ]}>
                  <Icon
                    name="location-outline"
                    as={Ionicons}
                    size={SIZES.padding + 10}
                    color={theme.width}
                  />
                </View>

                <View style={{width: '78%'}}>
                  <CustomText
                    isBold
                    style={[styles.history_title, {color: theme.text}]}>
                    {item?.to}
                  </CustomText>
                  <CustomText
                    style={[styles.history_txt, {color: theme.mediumGray}]}>
                    {item?.from}
                  </CustomText>
                </View>

                <CustomText style={[styles.date, {color: theme.veryLightGray}]}>
                  {item?.date}
                </CustomText>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SIZES.base,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  header_view: {
    width: SIZES.windowWidth * 0.92,
    height: SIZES.windowHeight * 0.22,
    alignSelf: 'center',
    marginTop: SIZES.padding2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: SIZES.padding,
    paddingVertical: SIZES.padding2,
    borderTopWidth: 6,
  },
  sub_view: {
    width: SIZES.windowWidth,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  row_view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heading: {
    ...FONTS.Bold22,
  },
  name_heading: {
    ...FONTS.Bold22,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  text: {
    ...FONTS.Medium12,
    textTransform: 'lowercase',
  },
  image_view: {
    width: SIZES.windowWidth * 0.18,
    height: SIZES.windowWidth * 0.18,
    borderRadius: SIZES.windowWidth / 2,
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  search_view: {
    width: SIZES.windowWidth * 0.86,
    height: SIZES.windowWidth * 0.17,
    alignSelf: 'center',
    marginTop: SIZES.padding2,
    borderRadius: SIZES.padding2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
  },
  location_heading: {
    ...FONTS.Regular12,
  },
  location_text: {
    ...FONTS.UrbanistLight10,
  },
  title: {
    ...FONTS.Bold16,
    marginBottom: SIZES.h20,
  },
  flatListStyle: {
    width: SIZES.windowWidth,
    marginTop: SIZES.h10,
  },
  flatListContent: {
    paddingRight: SIZES.h20,
  },
  vehicleCard: {
    width: SIZES.windowWidth * 0.47,
    height: SIZES.windowWidth * 0.5,
    backgroundColor: Colors.lightGrey,
    marginRight: SIZES.h12,
    borderRadius: SIZES.h12,
    overflow: 'hidden',
  },
  emptyContainer: {
    width: '100%',
    height: SIZES.windowWidth * 0.32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: SIZES.h12,
    marginTop: SIZES.h10,
  },
  location: {
    ...FONTS.Regular12,
    color: Colors.grey,
  },
  date: {
    ...FONTS.Regular11,
    paddingRight: SIZES.padding2,
    position: 'absolute',
    top: 10,
    right: 0,
  },
  past_ride_card: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.2,
    marginBottom: SIZES.padding2,
    paddingHorizontal: SIZES.base,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZES.padding2,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  history_image: {
    width: windowWidth * 0.16,
    height: windowWidth * 0.16,
    borderRadius: windowWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  history_title: {
    ...FONTS.Bold12,
    width: '70%',
  },
  history_txt: {
    ...FONTS.Medium11,
    width: '80%',
  },
});
