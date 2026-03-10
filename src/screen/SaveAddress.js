import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../config/appTheme';
import Header from '../component/Header';
import {FONTS, SIZES} from '../constant/sizes';
import CustomText from '../component/customText';
import {windowHeight, windowWidth} from '../utility/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../component/customImage';
import {Icon} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../context/ThemeContext';
import navigationServices from '../navigator/navigationServices';

const SaveAddress = () => {
  const {theme} = useTheme();

  const addressOptions = [
    {
      id: 1,
      type: 'add',
      icon: 'bookmark',
      iconType: FontAwesome5,
      label: 'Add Address',
      action: () => navigationServices.navigate('AddAddress'),
      color: theme.error || '#DA3029',
    },
    {
      id: 2,
      type: 'home',
      icon: 'home',
      iconType: Ionicons,
      label: 'Add Home Address',
      action: () => navigationServices.navigate('AddAddress', {type: 'home'}),
      color: theme.error || '#DA3029',
    },
    {
      id: 3,
      type: 'work',
      icon: 'building',
      iconType: FontAwesome5,
      label: 'Add Work Address',
      action: () => navigationServices.navigate('AddAddress', {type: 'work'}),
      color: theme.error || '#DA3029',
    },
  ];

  const renderAddressCard = item => (
    <TouchableOpacity
      key={item.id}
      style={[
        styles.card_view,
        {
          backgroundColor: theme.card,
          borderBottomColor: theme.border,
        },
      ]}
      onPress={item.action}
      activeOpacity={0.7}>
      <View
        style={[styles.iconContainer, {backgroundColor: `${item.color}20`}]}>
        <Icon
          name={item.icon}
          as={item.iconType}
          size={moderateScale(20, 0.6)}
          color={item.color}
        />
      </View>
      <CustomText
        style={[
          styles.addressLabel,
          {
            color: theme.text,
          },
        ]}>
        {item.label}
      </CustomText>
      <View style={styles.rightIconContainer}>
        <Icon
          name="plus"
          as={FontAwesome5}
          size={moderateScale(18, 0.6)}
          color={theme.primary}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        {backgroundColor: theme.background},
      ]}
      showsVerticalScrollIndicator={true}>
      <Header
        title={'Saved Locations'}
        headerColor={theme.background}
        hideUser={true}
      />

      <View style={[styles.main_view, {backgroundColor: theme.background}]}>
        <CustomText style={[styles.heading, {color: theme.text}]} isBold>
          My Saved Addresses :
        </CustomText>

        <View style={styles.savedAddressesContainer}>
          <View style={[styles.savedCard, {backgroundColor: theme.card}]}>
            <View style={styles.savedCardLeft}>
              <Icon
                name="home"
                as={Ionicons}
                size={moderateScale(18, 0.6)}
                color={theme.primary}
              />
              <View style={styles.savedAddressInfo}>
                <CustomText
                  isBold
                  style={[styles.savedAddressType, {color: theme.text}]}>
                  Home
                </CustomText>
                <CustomText
                  style={[styles.savedAddressText, {color: theme.darkGray}]}>
                  123 Main Street, Apartment 4B, New York, NY 10001
                </CustomText>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Icon
                name="edit"
                as={MaterialIcons}
                size={moderateScale(18, 0.6)}
                color={theme.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.addNewContainer}>
          <CustomText style={[styles.subHeading, {color: theme.text}]} isBold>
            Add New Address :
          </CustomText>
          {addressOptions.map(renderAddressCard)}
        </View>
      </View>
    </ScrollView>
  );
};

export default SaveAddress;

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
  subHeading: {
    ...FONTS.Bold16,
    textAlign: 'left',
    width: windowWidth * 0.9,
    marginTop: SIZES.padding,
    marginBottom: SIZES.base,
  },
  card_view: {
    width: windowWidth * 0.98,
    height: windowWidth * 0.16,
    marginTop: SIZES.base,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    borderRadius: moderateScale(12, 0.6),
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  iconContainer: {
    width: moderateScale(40, 0.6),
    height: moderateScale(40, 0.6),
    borderRadius: moderateScale(20, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressLabel: {
    ...FONTS.UrbanistLight13,
    textAlign: 'left',
    width: '70%',
  },
  rightIconContainer: {
    width: moderateScale(32, 0.6),
    height: moderateScale(32, 0.6),
    borderRadius: moderateScale(16, 0.6),
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  savedAddressesContainer: {
    width: windowWidth * 0.98,
    marginTop: SIZES.base,
  },
  savedCard: {
    width: '100%',
    padding: moderateScale(12, 0.6),
    borderRadius: moderateScale(12, 0.6),
    marginBottom: SIZES.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  savedCardLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  savedAddressInfo: {
    marginLeft: SIZES.base,
    flex: 1,
  },
  savedAddressType: {
    ...FONTS.Bold14,
    marginBottom: moderateScale(2, 0.6),
  },
  savedAddressText: {
    ...FONTS.Regular11,
    width: '100%',
  },
  editButton: {
    padding: moderateScale(8, 0.6),
  },
  addNewContainer: {
    width: windowWidth * 0.98,
    marginTop: SIZES.padding,
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
