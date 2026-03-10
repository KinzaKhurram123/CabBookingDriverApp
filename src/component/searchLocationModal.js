import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Colors from '../config/appTheme';
import CustomText from './customText';
import {windowHeight, windowWidth} from '../utility/utils';
import {FONTS} from '../constant/sizes';
import {Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {GoogleApiKey} from '../config';

const SearchLocationModal = ({
  isModalVisible,
  setIsModalVisible,
  setLocation,
  locationType,
  setPickupLocation,
  setdropOffLocation,
  onPressCurrentLocation,
  isyourLocation = false,
}) => {
  const handleSelect = (data, details) => {
    const payload = {
      name: data?.description ?? data?.structured_formatting?.main_text,
      lat: details?.geometry?.location?.lat,
      lng: details?.geometry?.location?.lng,
    };

    if (locationType === 'pickup') {
      setPickupLocation(payload);
    } else {
      setdropOffLocation(payload);
    }

    setIsModalVisible(false);
  };

  return (
    <Modal
      hasBackdrop={true}
      coverScreen={true}
      statusBarTranslucent={true}
      backdropOpacity={0.4}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      avoidKeyboard={true}
      swipeDirection={['down']}
      onSwipeComplete={() => setIsModalVisible(false)}
      propagateSwipe={true}
      style={{
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      isVisible={isModalVisible}
      onBackButtonPress={() => setIsModalVisible(false)}
      onBackdropPress={() => {
        setIsModalVisible(false);
      }}>
      <View style={styles.maincontainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: windowWidth * 0.8,
          }}>
          <CustomText
            style={{
              color: Colors.black,
              marginBottom: moderateScale(15, 0.3),
              ...FONTS.Bold18,
            }}
            isBold>
            Select Location
          </CustomText>
          <Icon
            name="squared-cross"
            as={Entypo}
            size={moderateScale(30, 0.6)}
            color={Colors.red}
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
        {locationType == 'pickup' && (
          <TouchableOpacity
            onPress={onPressCurrentLocation}
            style={{
              width: windowWidth * 0.8,
              height: windowHeight * 0.05,
              marginVertical: moderateScale(5, 0.2),
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon
              name="my-location"
              as={MaterialIcons}
              size={moderateScale(25, 0.6)}
              color={Colors.veryLightGray}
            />
            <CustomText
              style={{
                ...FONTS.Regular12,
                marginLeft: moderateScale(10, 0.6),
                color: Colors.veryLightGray,
              }}>
              Use Your Current Location
            </CustomText>
          </TouchableOpacity>
        )}
        <GooglePlacesAutocomplete
          onFail={error => console.warn('Places error:', error)}
          keyboardShouldPersistTaps="always"
          placeholder={
            locationType === 'pickup'
              ? ' select your pickup location'
              : 'select your dropoff location'
          }
          textInputProps={{
            placeholderTextColor: '#5d5d5d',
            ...FONTS.Regular13,
          }}
          onPress={(data, details = null) => {
            handleSelect(data, details);
          }}
          query={{
            key: GoogleApiKey,
            language: 'en',
          }}
          isRowScrollable={true}
          fetchDetails={true}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          enablePoweredByContainer={false}
          debounce={200}
          keyboardDismissMode="on-drag"
          listViewProps={{
            keyboardShouldPersistTaps: 'always',
            nestedScrollEnabled: true,
          }}
          keepResultsAfterBlur={true}
          styles={{
            container: {
              flex: 0,
            },
            textInputContainer: {
              width: windowWidth * 0.85,
              marginLeft: moderateScale(5, 0.6),
              height: windowWidth * 0.12,
            },
            textInput: {
              height: windowWidth * 0.16,
              color: '#5d5d5d',
              fontSize: 16,
              borderWidth: 2,
              borderColor: Colors.ColorsColorLight,
              borderRadius: moderateScale(10, 0.6),
              backgroundColor: Colors.lightGrey,
            },
            listView: {
              width: windowWidth * 0.83,
              borderColor: Colors.lightGrey,
              alignSelf: 'center',
              marginTop: moderateScale(20, 0.6),
              borderWidth: 1,
              maxHeight: windowHeight * 0.4,
              backgroundColor: Colors.white,
            },
            description: {
              color: 'black',
            },
          }}
        />
      </View>
    </Modal>
  );
};

export default SearchLocationModal;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: Colors.white,
    width: windowWidth * 0.9,
    height: windowHeight * 0.7,
    alignItems: 'center',
    borderRadius: moderateScale(20, 0.3),
    paddingVertical: moderateScale(15, 0.3),
    borderWidth: 1,
    borderColor: Colors.themeColor,
  },
});
