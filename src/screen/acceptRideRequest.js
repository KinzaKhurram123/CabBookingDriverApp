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
import {getDistance, isValidCoordinate, latitudeKeys} from 'geolib';
import PulsingMarker from '../component/pulsingMarker';
import {mapstyle} from '../constant/mapStyle';
import MapViewDirections from 'react-native-maps-directions';

const AcceptRideRequest = props => {
  const data = props?.route?.params?.data;
  console.log(data, 'dataaaaaaaaaaaaa');
  const isFocused = useIsFocused();
  const mapRef = useRef(null);
  const [address, setAddress] = useState('');
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const pickupLocation = {
    latitude: data?.pickup_latitude,
    longitude: data?.pickup_longitude,
  };

  const dropoffLocation = {
    latitude: data?.dropoff_latitude,
    longitude: data?.dropoff_longitude,
  };

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

  useEffect(() => {
    getCurrentLocation();
  }, [isFocused]);
  return (
    <View style={styles.scrollContainer}>
      <MapView
        ref={mapRef}
        style={styles.map}
        showsMyLocationButton={true}
        onMapReady={() => console.log('Map is ready')}
        onError={error => console.log('Map error:', error)}
        initialRegion={{
          latitude: currentPosition?.latitude || 37.78825,
          longitude: currentPosition?.longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {pickupLocation && (
          <Marker
            coordinate={{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            }}
            pinColor="black"
            title="Pickup Location"
          />
        )}
        <MapViewDirections
          origin={currentPosition}
          destination={pickupLocation}
          strokeColor={Colors.black}
          strokeWidth={6}
          apikey={GoogleApiKey}
          optimizeWaypoints={false}
          onStart={params => {}}
          onError={e => {
            console.log('map vview direction erorrrrrrrrrrrrrr', e);
          }}
          tappable={true}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 50,
                left: 50,
                top: 300,
                bottom: 100,
              },
            });
          }}
        />
        {dropoffLocation && (
          <Marker
            coordinate={{
              latitude: pickupLocation.latitude,
              longitude: pickupLocation.longitude,
            }}
            pinColor="black"
            title="Dropoff Location"
          />
        )}
      </MapView>
      <View
        style={{
          top: 10,
          width: windowWidth,
          paddingHorizontal: moderateScale(10, 0.6),
          position: 'absolute',
        }}>
        <Icon
          name="left"
          as={AntDesign}
          size={moderateScale(30, 0.6)}
          color={Colors.black}
        />
      </View>
      <View style={styles.bottom_main_view}></View>
    </View>
  );
};

export default AcceptRideRequest;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  main_view: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationPickerBtn: {
    // marginTop: moderateScale(6, 0.2),
    // width: windowWidth * 0.8,
    padding: moderateScale(7, 0.2),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotView: {
    flexDirection: 'row',
    gap: moderateScale(2, 0.2),
    alignItems: 'center',
  },
  locationPickerBtn: {
    // marginTop: moderateScale(6, 0.2),
    // width: windowWidth * 0.8,
    padding: moderateScale(7, 0.2),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  heading: {
    ...FONTS.Bold13,
    color: Colors.black,
  },
  image_card_view: {
    width: windowWidth * 0.33,
    height: windowWidth * 0.4,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10, 0.6),
    alignSelf: 'center',
    top: -50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#46cc00',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderBottomWidth: 5,
    borderBottomColor: Colors.ColorsColorLight,
  },
  small_card: {
    width: windowWidth * 0.28,
    height: windowWidth * 0.34,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10, 0.6),
    alignSelf: 'center',
    top: -50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottom_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottom_main_view: {
    width: windowWidth * 0.95,
    height: windowWidth * 0.55,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignSelf: 'center',
    borderRadius: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(6, 0.5),
    position: 'absolute',
    bottom: 40,
  },
  text: {
    ...FONTS.Regular13,
  },
  price: {
    ...FONTS.Bold16,
    color: Colors.ColorsColor,
  },
  pm_text: {
    ...FONTS.Bold14,
    color: Colors.black,
  },
});
