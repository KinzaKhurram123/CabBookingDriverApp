import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Header from '../component/Header';
import CustomText from '../component/customText';
import CustomImage from '../component/customImage';
import CustomButton from '../component/customButton';
import {FONTS, SIZES} from '../constant/sizes';
import {windowHeight, windowWidth} from '../utility/utils';
import {moderateScale} from 'react-native-size-matters';
import {useTheme} from '../context/ThemeContext';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../assests/Appimages';
import navigationServices from '../navigator/navigationServices';
import {ridesData} from '../constant/arrays';

const MyBookingScreen = () => {
  const {theme} = useTheme();
  const [activeTab, setActiveTab] = useState('Active');

  const tabs = ['Active', 'Completed', 'Cancelled'];

  const filteredRides = ridesData.filter(item => item.status === activeTab);

  const renderRideItem = ({item}) => {
    const isActive = item.status === 'Active';
    const isCompleted = item.status === 'Completed';
    const isCancelled = item.status === 'Cancelled';

    return (
      <TouchableOpacity
        style={[styles.card, {backgroundColor: theme.card}]}
        // onPress={() => navigationServices.navigate('RideDetails', {ride: item})}
        activeOpacity={0.7}>
        <View style={styles.cardHeader}>
          <View style={styles.driverImageContainer}>
            <CustomImage source={item.driverImage} style={styles.driverImage} />
          </View>
          <View style={styles.driverInfo}>
            <View style={styles.nameRatingRow}>
              <CustomText
                isBold
                style={[styles.driverName, {color: theme.text}]}>
                {item.driverName}
              </CustomText>
              {/* <View style={styles.ratingContainer}>
                <Icon
                  as={Ionicons}
                  name="star"
                  size={moderateScale(14, 0.6)}
                  color={theme.accent || '#FFD700'}
                />
                <CustomText style={[styles.ratingText, {color: theme.text}]}>
                  {item.rating}
                </CustomText>
              </View> */}
            </View>

            <View style={styles.carInfoRow}>
              <Icon
                as={Ionicons}
                name="car-outline"
                size={moderateScale(14, 0.6)}
                color={theme.primary}
              />
              <CustomText style={[styles.carText, {color: theme.mediumGray}]}>
                {item.carModel} · {item.carColor} · {item.carNumber}
              </CustomText>
            </View>
          </View>
        </View>

        {/* Locations */}
        <View style={styles.locationsContainer}>
          <View style={styles.locationRow}>
            <View
              style={[styles.locationDot, {backgroundColor: theme.primary}]}
            />
            <CustomText
              style={[styles.locationText, {color: theme.text}]}
              numberOfLines={1}>
              {item.pickupLocation}
            </CustomText>
          </View>

          <View style={styles.locationRow}>
            <View
              style={[
                styles.locationPin,
                {backgroundColor: theme.error || '#DA3029'},
              ]}
            />
            <CustomText
              style={[styles.locationText, {color: theme.text}]}
              numberOfLines={1}>
              {item.dropoffLocation}
            </CustomText>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon
              as={Ionicons}
              name="time-outline"
              size={moderateScale(16, 0.6)}
              color={theme.primary}
            />
            <CustomText style={[styles.statText, {color: theme.mediumGray}]}>
              {item.duration}
            </CustomText>
          </View>

          <View style={styles.statItem}>
            <Icon
              as={Entypo}
              name="map"
              size={moderateScale(16, 0.6)}
              color={theme.primary}
            />
            <CustomText style={[styles.statText, {color: theme.mediumGray}]}>
              {item.distance}
            </CustomText>
          </View>

          <View style={styles.statItem}>
            <Icon
              as={FontAwesome}
              name="dollar"
              size={moderateScale(16, 0.6)}
              color={theme.primary}
            />
            <CustomText style={[styles.statText, {color: theme.mediumGray}]}>
              {item.fare}
            </CustomText>
          </View>
        </View>

        <View style={styles.dateTimeContainer}>
          <Icon
            as={Ionicons}
            name="calendar-outline"
            size={moderateScale(16, 0.6)}
            color={theme.primary}
          />
          <CustomText style={[styles.dateTime, {color: theme.text}]}>
            {item.date} at {item.time}
          </CustomText>
        </View>

        <View style={styles.actionButtons}>
          {isActive && (
            <>
              <CustomButton
                text={'Cancel'}
                textColor={theme.white}
                width={SIZES.windowWidth * 0.3}
                height={SIZES.windowHeight * 0.04}
                marginTop={SIZES.padding}
                bgColor={theme.error}
                isBold
                elevation
              />
              <CustomButton
                text={'Accept'}
                textColor={theme.white}
                width={SIZES.windowWidth * 0.3}
                height={SIZES.windowHeight * 0.04}
                marginTop={SIZES.padding}
                bgColor={theme.button_gredient}
                isBold
                isGradient
                elevation
              />
            </>
          )}

          {isCompleted && (
            <>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  {backgroundColor: theme.primary + '20'},
                ]}
                // onPress={() =>
                //   navigationServices.navigate('BookRide', {ride: item})
                // }
              >
                <CustomText style={[styles.actionText, {color: theme.primary}]}>
                  Re-Book
                </CustomText>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.actionButton,
                  {backgroundColor: theme.accent + '20' || '#FFA50020'},
                ]}
                // onPress={() =>
                //   navigationServices.navigate('RateRide', {ride: item})
                // }
              >
                <CustomText
                  style={[
                    styles.actionText,
                    {color: theme.accent || '#FFA500'},
                  ]}>
                  Rate Driver
                </CustomText>
              </TouchableOpacity>
            </>
          )}

          {isCancelled && (
            <>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  {backgroundColor: theme.error + '20'},
                ]}
                onPress={() => console.log('View details:', item.id)}>
                <CustomText style={[styles.actionText, {color: theme.error}]}>
                  Details
                </CustomText>
              </TouchableOpacity>
            </>
          )}
        </View>

        {isCancelled && (
          <View
            style={[styles.statusBadge, {backgroundColor: theme.error + '20'}]}>
            <CustomText style={[styles.statusText, {color: theme.error}]}>
              Cancelled
            </CustomText>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Header headerColor={theme.background} isborder={false} />
      <View style={[styles.tabContainer, {backgroundColor: theme.card}]}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            gap
            style={[
              styles.tab,
              activeTab === tab && {
                borderBottomColor: theme.primary,
                borderBottomWidth: 2,
              },
            ]}
            onPress={() => setActiveTab(tab)}>
            <CustomText
              style={[
                styles.tabText,
                {
                  color: activeTab === tab ? theme.primary : theme.mediumGray,
                },
              ]}
              isBold={activeTab === tab}>
              {tab}{' '}
              {tab === 'Active' ? '(2)' : tab === 'Completed' ? '(2)' : '(2)'}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredRides}
        renderItem={renderRideItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon
              as={MaterialIcons}
              name="directions-car"
              size={moderateScale(60, 0.6)}
              color={theme.mediumGray}
            />
            <CustomText style={[styles.emptyText, {color: theme.mediumGray}]}>
              No {activeTab} rides found
            </CustomText>
            {activeTab === 'Active' && (
              <CustomButton
                text="Book a Ride"
                // onPress={() => navigationServices.navigate('BookRide')}
                width={windowWidth * 0.5}
                height={moderateScale(40, 0.6)}
                marginTop={SIZES.base}
                bgColor={theme.primary}
                borderRadius={SIZES.base}
              />
            )}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.base,
  },
  tab: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  tabText: {
    ...FONTS.Medium14,
  },
  listContainer: {
    padding: SIZES.padding,
  },
  card: {
    borderRadius: moderateScale(12, 0.6),
    padding: moderateScale(12, 0.6),
    marginBottom: SIZES.padding,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: SIZES.base,
  },
  driverImageContainer: {
    width: moderateScale(50, 0.6),
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    overflow: 'hidden',
    marginRight: SIZES.base,
  },
  driverImage: {
    width: '100%',
    height: '100%',
  },
  driverInfo: {
    flex: 1,
  },
  nameRatingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(4, 0.6),
  },
  driverName: {
    ...FONTS.Bold14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    ...FONTS.Medium12,
    marginLeft: moderateScale(2, 0.6),
  },
  carInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carText: {
    ...FONTS.Regular11,
    marginLeft: moderateScale(4, 0.6),
    flex: 1,
  },
  locationsContainer: {
    marginBottom: SIZES.base,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(2, 0.6),
  },
  locationDot: {
    width: moderateScale(8, 0.6),
    height: moderateScale(8, 0.6),
    borderRadius: moderateScale(4, 0.6),
    marginRight: moderateScale(8, 0.6),
  },
  locationPin: {
    width: moderateScale(8, 0.6),
    height: moderateScale(8, 0.6),
    borderRadius: moderateScale(4, 0.6),
    marginRight: moderateScale(8, 0.6),
  },
  locationText: {
    ...FONTS.Regular12,
    flex: 1,
  },
  locationLine: {
    flexDirection: 'row',
    marginLeft: moderateScale(2, 0.6),
    marginVertical: moderateScale(2, 0.6),
  },
  lineDot: {
    width: moderateScale(3, 0.6),
    height: moderateScale(3, 0.6),
    borderRadius: moderateScale(1.5, 0.6),
    marginRight: moderateScale(2, 0.6),
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: SIZES.base,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: SIZES.base,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    ...FONTS.Medium12,
    marginLeft: moderateScale(4, 0.6),
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.base,
  },
  dateTime: {
    ...FONTS.Medium12,
    marginLeft: SIZES.base,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: SIZES.base,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12, 0.6),
    paddingVertical: moderateScale(6, 0.6),
    borderRadius: moderateScale(6, 0.6),
  },
  actionText: {
    ...FONTS.Medium12,
  },
  statusBadge: {
    position: 'absolute',
    top: moderateScale(12, 0.6),
    right: moderateScale(12, 0.6),
    paddingHorizontal: moderateScale(8, 0.6),
    paddingVertical: moderateScale(2, 0.6),
    borderRadius: moderateScale(4, 0.6),
  },
  statusText: {
    ...FONTS.Medium10,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(50, 0.6),
  },
  emptyText: {
    ...FONTS.Medium14,
    marginTop: SIZES.base,
  },
});

export default MyBookingScreen;
