import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import Images from '../assests/Appimages';
import CustomButton from '../component/customButton';
import CustomImage from '../component/customImage';
import CustomText from '../component/customText';
import TextInputWithTitle from '../component/textInputWithTitle';
import Colors from '../config/appTheme';
import arrays from '../constant/arrays';
import {FONTS, SIZES} from '../constant/sizes';
import navigationServices from '../navigator/navigationServices';
import {windowWidth} from '../utility/utils';
import {useDispatch} from 'react-redux';
import {setRiderMode} from '../store/slices/common';

const SelectUserTypeScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}>
      <ImageBackground
        source={Images.background_splash_screen}
        style={styles.gradient}>
        <CustomText isBold style={styles.heading}>
          Select User Type Here
        </CustomText>
        <CustomText style={styles.text}>
          Choose your role to continue. You can proceed as a Rider to book rides
          or as a Driver to accept ride requests.
        </CustomText>
        <CustomButton
          text={'I am Rider'}
          textColor={Colors.white}
          width={SIZES.windowWidth * 0.8}
          height={SIZES.windowHeight * 0.07}
          marginTop={SIZES.padding}
          bgColor={Colors.button_gredient}
          borderRadius={SIZES.h16}
          isBold
          isGradient
          elevation
          onPress={() => {
            navigationServices.navigate('LoginScreen');
            dispatch(setRiderMode(true));
          }}
        />
        <CustomButton
          text={'I am User'}
          textColor={Colors.white}
          width={SIZES.windowWidth * 0.8}
          height={SIZES.windowHeight * 0.07}
          marginTop={SIZES.padding}
          bgColor={Colors.white}
          borderRadius={SIZES.h16}
          isBold
          isGradient
          elevation
          onPress={() => {
            navigationServices.navigate('LoginScreen');
          }}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    paddingTop: SIZES.windowWidth * 0.1,
    justifyContent: 'center',
  },
  text: {
    color: Colors.veryLightGray,
    marginTop: SIZES.padding2,
    width: SIZES.windowWidth * 0.9,
    ...FONTS.Regular14,
    textAlign: 'center',
  },
  heading: {
    color: Colors.black,
    marginTop: SIZES.padding2,
    textAlign: 'center',
    width: SIZES.windowWidth * 0.9,
    ...FONTS.Bold22,
  },
  input_container: {
    borderTopWidth: 6,
    borderTopColor: Colors.themeColor,
    borderRadius: 20,
    width: SIZES.windowWidth * 0.95,
    alignItems: 'center',
    paddingTop: SIZES.h16,
    paddingHorizontal: SIZES.h10,
    backgroundColor: 'rgba(199, 199, 198, 0.2)',
    marginTop: SIZES.padding,
    paddingVertical: SIZES.windowWidth * 0.05,
  },
  row_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.windowWidth * 0.55,
  },
  forgotpassword: {
    ...FONTS.Medium12,
    color: Colors.themeColor,
    textAlign: 'right',
    width: '95%',
    paddingVertical: SIZES.base,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  icon_view: {
    width: SIZES.windowWidth * 0.15,
    height: SIZES.windowWidth * 0.15,
    backgroundColor: 'rgba(247, 247, 247, 0.9)',
    borderRadius: SIZES.windowWidth / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.windowWidth / 2,
  },
  lines: {
    borderWidth: 0.5,
    borderColor: Colors.veryLightGray,
    width: '30%',
    backgroundColor: Colors.veryLightGray,
    marginHorizontal: SIZES.padding2,
  },
  do_text: {
    letterSpacing: 0.5,
    color: Colors.darkGray,
    ...FONTS.Medium14,
  },
  Sign_text: {
    color: Colors.themeColor,
    ...FONTS.Bold18,
    marginLeft: SIZES.radius_sm,
  },
});

export default SelectUserTypeScreen;
