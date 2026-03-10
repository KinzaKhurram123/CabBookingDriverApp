import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import React, {useState} from 'react';
import {Alert, Platform, StyleSheet, ToastAndroid, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import CustomImage from '../component/customImage';
import CustomText from '../component/customText';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import navigationServices from '../navigator/navigationServices';
import {moderateScale} from 'react-native-size-matters';
import {useTheme} from '../context/ThemeContext';

const Header = props => {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  const notification = useSelector(state => state.commonReducer.notification);
  const riderEvent = useSelector(state => state.commonReducer.riderEventData);
  const cartData = useSelector(state => state.commonReducer.cart);
  const navigationN = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const {
    title,
    showBack,
    showList,
    headerColor,
    titleColor,
    close,
    navigateTO,
    index,
    cart,
    Notify,
    hideUser,
    navigation,
    textstyle,
    isGredient = false,
    iconColor,
    isborder = true,
  } = props;

  const [searchText, setSearchText] = useState('');
  const user_type = useSelector(state => state.authReducer.user_type);
  const user = useSelector(state => state.commonReducer.userData);
  const userRole = useSelector(state => state.commonReducer.selectedRole);
  const token = useSelector(state => state.authReducer.token);
  const [currentPossition, setcurrentPossition] = useState({});
  const [time, setTime] = useState(0);
  const statusArray = [
    {label: 'Change Password', value: 'ChangePassword'},
    {label: 'Terms & Conditions', value: 'TermsAndConditions'},
    {label: 'Financial Breakdown', value: 'FinancialBreakDown'},
    {label: 'Logout', value: 'Logout'},
  ];

  const getHeaderBackground = () => {
    if (headerColor) {
      return headerColor;
    }
    if (isGredient) {
      return theme.gradient || theme.themegredient;
    }
    return theme.background;
  };

  const getIconColor = () => {
    if (iconColor) {
      return iconColor;
    }
    return theme.text;
  };

  const getTitleColor = () => {
    if (titleColor) {
      return titleColor;
    }
    return theme.text;
  };

  const renderLeftIcon = () => (
    <View
      style={{
        height: SIZES.h26,
        width: SIZES.h26,
        borderRadius: SIZES.h10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {showBack ? (
        <Icon
          name={'arrow-back'}
          as={Ionicons}
          size={SIZES.h24 + 10}
          color={getIconColor()}
          onPress={() => {
            navigationN.goBack();
          }}
        />
      ) : (
        <Icon
          name={'menu'}
          as={Feather}
          size={moderateScale(30, 0.6)}
          color={getIconColor()}
          onPress={() => {
            navigationN.toggleDrawer();
          }}
        />
      )}
    </View>
  );

  const renderCenter = () => (
    <CustomText
      style={[styles.text, textstyle, {color: getTitleColor()}]}
      isBold>
      {title}
    </CustomText>
  );

  const renderRightIcon = () =>
    !hideUser && cart ? (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: SIZES.h10,
        }}>
        {cartData?.length > 0 && (
          <View
            style={{
              width: SIZES.h14,
              height: SIZES.h14,
              borderRadius: SIZES.font,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.error || '#FF0000',
              position: 'absolute',
              right: -4,
              zIndex: 1,
              top: 0,
            }}>
            <CustomText
              style={{
                fontSize: 8,
                color: theme.white,
              }}>
              {cartData?.length < 10 ? cartData?.length : '9+'}
            </CustomText>
          </View>
        )}

        <Icon
          name={'shopping-cart'}
          as={Feather}
          size={SIZES.h14}
          color={getIconColor()}
          onPress={() => {
            if (token == null) {
              Alert.alert('Login Required', 'Please login to view cart');
            } else if (cartData?.length > 0) {
              navigationServices.navigate('CartScreen');
            } else {
              return Platform.OS == 'android'
                ? ToastAndroid.show('No Item in cart', ToastAndroid.SHORT)
                : Alert.alert('Cart Empty', 'No Item in cart');
            }
          }}
        />
      </View>
    ) : (
      <View
        style={{
          width: SIZES.windowHeight * 0.045,
          justifyContent: 'center',
          alignItems: 'center',
          height: SIZES.windowHeight * 0.045,
          borderRadius: (SIZES.windowHeight * 0.045) / 2,
        }}></View>
    );

  return (
    <>
      {isGredient ? (
        <LinearGradient
          style={[styles.header2, index && {zIndex: 1}]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={getHeaderBackground()}>
          {renderLeftIcon()}
          {renderCenter()}
          {!hideUser && cart && renderRightIcon()}
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.header2,
            index && {zIndex: 1},
            isborder && {
              backgroundColor: getHeaderBackground(),
              borderBottomWidth: 2,
              borderBottomColor: theme.white,
            },
          ]}>
          {renderLeftIcon()}
          {renderCenter()}
          {!hideUser && cart && renderRightIcon()}
        </View>
      )}
    </>
  );
};

Header.defaultProps = {
  showBack: false,
  hideUser: false,
  cart: false,
  isGredient: false,
};

const styles = StyleSheet.create({
  header1: {
    width: SIZES.windowWidth,
    height: SIZES.windowHeight * 0.1,
    marginBottom: SIZES.base,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  user_name: {
    fontSize: SIZES.h20,
  },
  text: {
    ...FONTS.Bold20,
    textAlign: 'center',
    width: '90%',
  },
  menu: {
    height: SIZES.windowHeight * 0.05,
    width: SIZES.windowHeight * 0.05,
    borderRadius: (SIZES.windowHeight * 0.05) / 2,
    textAlign: 'center',
    backgroundColor: 'white',
    paddingTop: SIZES.h10,
  },
  shadowporp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  statusModal: {
    alignSelf: 'flex-end',
    paddingVertical: SIZES.h14,
    paddingHorizontal: SIZES.h14,
    marginTop: SIZES.h26,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  header2: {
    width: SIZES.windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.h20,
    paddingVertical: SIZES.h14,
    alignItems: 'center',
  },
  notificationCircle: {
    position: 'absolute',
    height: SIZES.h10,
    width: SIZES.h10,
    borderRadius: SIZES.font,
    backgroundColor: Colors.green,
    right: SIZES.font,
  },
});

export default Header;
