import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Header from '../component/Header';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import {windowHeight, windowWidth} from '../utility/utils';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Divider, Icon} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../component/customImage';
import Images from '../assests/Appimages';
import CustomText from '../component/customText';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../component/customButton';
import navigationServices from '../navigator/navigationServices';
import SearchLocationModal from '../component/searchLocationModal';
import {GoogleApiKey} from '../config';
import Geolocation from 'react-native-geolocation-service';
import {useIsFocused} from '@react-navigation/native';
import {getDistance, isValidCoordinate} from 'geolib';
import PulsingMarker from '../component/pulsingMarker';
import {mapstyle} from '../constant/mapStyle';
import {useTheme} from '../context/ThemeContext';

const RideBooking = () => {
  const {theme} = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickupLocation, setPickUpLocation] = useState({});
  const [dropOffLocation, setDropOffLocation] = useState({});
  const [locationType, setLocationType] = useState('pickup');
  const [isYourLocation, setIsyourLocation] = useState(null);
  const isFocused = useIsFocused();
  const mapRef = useRef(null);
  const [isNearDestination, setIsNearDestination] = useState(false);
  const [address, setAddress] = useState('');
  const data = {};
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const origin = {
    lat: currentPosition?.latitude,
    lng: currentPosition?.longitude,
  };

  const destination = {
    lat: parseFloat(data?.dropoff_location_lat),
    lng: parseFloat(data?.dropoff_location_lng),
  };

  useEffect(() => {
    getCurrentLocation();
  }, [isFocused]);
  const getCurrentLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => {
            const coords = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            console.log(
              position.coords.latitude,
              position.coords.longitude,
              'currrent location',
            );
            resolve(coords);
            getAddressFromCoordinates(
              position.coords.latitude,
              position.coords.longitude,
            );
          },
          error => {
            reject(new Error(error.message));
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          },
        );
      });
      setCurrentPosition(position);
    } catch (error) {
      console.error('Error getting location:', error);
      throw error;
    }
  };

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition(prevLocation => ({
          ...prevLocation,
          latitude,
          longitude,
        }));

        const distance = getDistance(currentPosition, destination);
        setIsNearDestination(distance <= 20);
      },
      error => console.log('Error getting location:', error),
      {
        enableHighAccuracy: true,
        distanceFilter: 1,
        interval: 1000,
      },
    );
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, [isFocused]);

  useEffect(() => {
    if (isValidCoordinate(currentPosition)) {
      mapRef.current?.animateToRegion(
        {
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        1000,
      );
    }
  }, [currentPosition]);

  const getAddressFromCoordinates = async (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GoogleApiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'OK') {
        const givenaddress = data.results[0].formatted_address;
        setAddress(givenaddress);
      } else {
        console.log('No address found');
      }
    } catch (error) {
      console.error('--------------------------------- error', error);
    }
  };

  const pramsData = {
    pickupLocation: isYourLocation ? currentPosition : pickupLocation,
    dropOffLocation: dropOffLocation,
  };
  console.log('Google API Key:', GoogleApiKey);

  return (
    <View style={styles.scrollContainer}>
      <MapView
        ref={mapRef}
        style={styles.map}
        showsMyLocationButton={true}
        showsUserLocation={true}
        onMapReady={() => console.log('Map is ready')}
        onError={error => console.log('Map error:', error)}
        initialRegion={{
          latitude: currentPosition.latitude || 37.78825,
          longitude: currentPosition.longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {isValidCoordinate(currentPosition) && (
          <PulsingMarker
            coordinate={{
              latitude: currentPosition?.latitude,
              longitude: currentPosition?.longitude,
            }}
            color={theme.primary}
            text="📍"
          />
        )}
      </MapView>
      <View style={styles.overlay} pointerEvents="box-none">
        <View
          style={[
            styles.locationCard,
            {
              backgroundColor: theme.white,
              shadowColor: theme.primary,
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              as={FontAwesome}
              name="location-arrow"
              size={moderateScale(24, 0.2)}
              color={theme.primary}
            />
            <TouchableOpacity
              onPress={() => {
                setLocationType('pickup');
                setIsModalVisible(true);
              }}
              style={styles.locationPickerBtn}>
              <CustomText
                numberOfLines={3}
                style={[styles.locationText, {color: theme.veryLightGray}]}>
                {Object.keys(pickupLocation).length > 0
                  ? isYourLocation
                    ? 'Your Live Location'
                    : pickupLocation?.name
                  : 'Choose Your Pickup Location'}
              </CustomText>
              <Icon
                as={AntDesign}
                name={
                  Object.keys(pickupLocation).length == 0 ? 'plus' : 'close'
                }
                color={theme.primary}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.dotView}>
            <View style={{gap: -3}}>
              <Icon
                as={Entypo}
                name="dots-two-vertical"
                size={moderateScale(24, 0.2)}
                color={theme.primary}
              />
              <Icon
                as={Entypo}
                name="dots-two-vertical"
                size={moderateScale(24, 0.2)}
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

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              as={Entypo}
              name="location-pin"
              size={moderateScale(24, 0.2)}
              color={theme.primary}
            />
            <TouchableOpacity
              onPress={() => {
                setLocationType('dropOff');
                setIsModalVisible(true);
              }}
              style={styles.locationPickerBtn}>
              <CustomText
                numberOfLines={2}
                style={[styles.locationText, {color: theme.veryLightGray}]}>
                {Object.keys(dropOffLocation).length > 0
                  ? dropOffLocation?.name
                  : 'Choose Your Drop Location'}
              </CustomText>
              <Icon
                as={AntDesign}
                name={
                  Object.keys(dropOffLocation).length == 0 ? 'plus' : 'close'
                }
                color={theme.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomSheet}>
          <View
            style={[
              styles.bottom_main_view,
              {backgroundColor: 'rgba(255,255,255,0.9)'},
            ]}>
            <View style={styles.bottom_view}>
              <View
                style={[
                  styles.small_card,
                  {backgroundColor: theme.white, shadowColor: theme.primary},
                ]}>
                <View style={styles.vehicleImageContainer}>
                  <CustomImage
                    source={Images.carimage}
                    style={styles.vehicleImage}
                  />
                </View>
                <View style={styles.vehicleInfo}>
                  <CustomText
                    style={[styles.heading, {color: theme.primary}]}
                    isBold>
                    Basic
                  </CustomText>
                  <CustomText
                    style={[styles.text, {color: theme.veryLightGray}]}>
                    4 Seater
                  </CustomText>
                  <CustomText
                    isBold
                    style={[styles.price, {color: theme.primary}]}>
                    6 $
                  </CustomText>
                </View>
              </View>

              <View
                style={[
                  styles.image_card_view,
                  {
                    backgroundColor: theme.white,
                    shadowColor: theme.primary,
                    borderBottomColor: theme.primary,
                  },
                ]}>
                <View style={styles.vehicleImageContainer}>
                  <CustomImage
                    source={Images.carimage}
                    style={styles.vehicleImage}
                  />
                </View>
                <CustomText
                  style={[styles.heading, {color: theme.primary}]}
                  isBold>
                  Premium
                </CustomText>
                <CustomText style={[styles.text, {color: theme.veryLightGray}]}>
                  4 Seater
                </CustomText>
                <CustomText
                  isBold
                  style={[styles.price, {color: theme.primary}]}>
                  6 $
                </CustomText>
              </View>

              <View
                style={[
                  styles.small_card,
                  {backgroundColor: theme.white, shadowColor: theme.primary},
                ]}>
                <View style={styles.vehicleImageContainer}>
                  <CustomImage
                    source={Images.carimage}
                    style={styles.vehicleImage}
                  />
                </View>
                <View style={styles.vehicleInfo}>
                  <CustomText
                    style={[styles.heading, {color: theme.primary}]}
                    isBold>
                    Standard
                  </CustomText>
                  <CustomText
                    style={[styles.text, {color: theme.veryLightGray}]}>
                    4 Seater
                  </CustomText>
                  <CustomText
                    isBold
                    style={[styles.price, {color: theme.primary}]}>
                    6 $
                  </CustomText>
                </View>
              </View>
            </View>

            <View style={styles.dividerContainer}>
              <View style={[styles.divider, {backgroundColor: theme.border}]} />
              <View
                style={[
                  styles.paymentCard,
                  {backgroundColor: `${theme.primary}`},
                ]}>
                <CustomText
                  isBold
                  style={[styles.pm_text, {color: theme.text}]}>
                  Payment Method
                </CustomText>
                <View style={styles.paymentMethod}>
                  <CustomText
                    isBold
                    style={[styles.pm_text, {color: theme.mediumGray}]}>
                    Credit Card
                  </CustomText>
                  <Icon
                    name="triangle-right"
                    as={Entypo}
                    size={moderateScale(25, 0.6)}
                    color={theme.mediumGray}
                  />
                </View>
              </View>
            </View>
          </View>

          <CustomButton
            text={'Book Now'}
            textColor={theme.white}
            width={SIZES.windowWidth * 0.85}
            height={SIZES.windowHeight * 0.08}
            marginTop={SIZES.padding}
            bgColor={theme.button_gredient || ['#46cc00', '#339500']}
            borderRadius={SIZES.padding}
            isBold
            isGradient
            elevation
            onPress={() =>
              navigationServices.navigate('RideDetails', {pramsData})
            }
          />
        </View>
      </View>

      <SearchLocationModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setPickupLocation={setPickUpLocation}
        setdropOffLocation={setDropOffLocation}
        locationType={locationType}
        onPressCurrentLocation={() => {
          setIsyourLocation(true);
          setIsModalVisible(false);
          setPickUpLocation(currentPosition);
        }}
      />
    </View>
  );
};

export default RideBooking;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationCard: {
    width: windowWidth * 0.9,
    gap: moderateScale(-7, 0.1),
    borderRadius: moderateScale(10, 0.2),
    padding: moderateScale(12, 0.2),
    position: 'absolute',
    top: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  locationPickerBtn: {
    padding: moderateScale(7, 0.2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  locationText: {
    width: windowWidth * 0.6,
    ...FONTS.Regular12,
  },
  dotView: {
    flexDirection: 'row',
    gap: moderateScale(2, 0.2),
    alignItems: 'center',
  },
  bottomSheet: {
    width: windowWidth,
    height: windowHeight * 0.4,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  bottom_main_view: {
    width: windowWidth * 0.95,
    height: windowWidth * 0.55,
    alignSelf: 'center',
    borderRadius: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(6, 0.5),
  },
  bottom_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  small_card: {
    width: windowWidth * 0.28,
    height: windowWidth * 0.34,
    borderRadius: moderateScale(10, 0.6),
    alignSelf: 'center',
    top: -50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  image_card_view: {
    width: windowWidth * 0.33,
    height: windowWidth * 0.4,
    borderRadius: moderateScale(10, 0.6),
    alignSelf: 'center',
    top: -50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderBottomWidth: 5,
  },
  vehicleImageContainer: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
  },
  vehicleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  vehicleInfo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
  },
  heading: {
    ...FONTS.Bold13,
  },
  text: {
    ...FONTS.Regular13,
  },
  price: {
    ...FONTS.Bold16,
  },
  dividerContainer: {
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: '95%',
    height: 0.5,
  },
  paymentCard: {
    width: '95%',
    height: windowWidth * 0.15,
    marginTop: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  pm_text: {
    ...FONTS.Bold14,
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
