import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import Images from '../assests/Appimages';
import CustomButton from '../component/customButton';
import CustomImage from '../component/customImage';
import CustomText from '../component/customText';
import TextInputWithTitle from '../component/textInputWithTitle';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import {windowWidth} from '../utility/utils';
import {useTheme} from '../context/ThemeContext';

const SignupScreen = () => {
  const {theme} = useTheme();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}>
      <ImageBackground source={Images.background_image} style={styles.gradient}>
        <View
          style={{
            height: SIZES.windowHeight * 0.14,
            width: SIZES.windowHeight * 0.14,
          }}>
          <CustomImage
            resizeMode="contain"
            source={Images.car_image}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <CustomText isBold style={styles.heading}>
          C2 Driver App
        </CustomText>
        <CustomText style={styles.text}>
          Sign up to start driving, accept ride requests, and earn with every
          trip.
        </CustomText>
        <View style={[styles.input_container, {borderTopColor: theme.primary}]}>
          <CustomText
            isBold
            style={{
              ...FONTS.Bold18,
              color: Colors.black,
              paddingVertical: SIZES.padding2,
              textAlign: 'center',
            }}>
            Create Your Account
          </CustomText>
          <TextInputWithTitle
            title={'Full Name:'}
            placeholder={'Enter Your Full Name'}
            viewHeight={0.075}
            viewWidth={0.85}
            inputWidth={0.8}
            fontSize={SIZES.h12}
            borderRadius={10}
            backgroundColor={'rgba(230, 232, 230,0.6)'}
            marginTop={SIZES.base}
            placeholderColor={Colors.mediumGray}
            borderColor={theme.primary}
            inputStyle={{
              borderBottomWidth: 3,
              borderBottomColor: Colors.darkGray,
            }}
          />
          <TextInputWithTitle
            title={'Email Address :'}
            placeholder={'Enter Your Email Address'}
            viewHeight={0.075}
            viewWidth={0.85}
            inputWidth={0.8}
            fontSize={SIZES.h12}
            borderColor={theme.primary}
            borderRadius={10}
            backgroundColor={'rgba(230, 232, 230,0.6)'}
            marginTop={SIZES.h10}
            placeholderColor={Colors.mediumGray}
            inputStyle={{
              borderBottomWidth: 3,
              borderBottomColor: Colors.darkGray,
            }}
          />
          <TextInputWithTitle
            titleText={'Username'}
            title={'Password :'}
            placeholder={'Enter Your Password :'}
            viewHeight={0.075}
            borderColor={theme.primary}
            viewWidth={0.85}
            inputWidth={0.8}
            fontSize={SIZES.h14}
            borderRadius={10}
            backgroundColor={'rgba(230, 232, 230,0.6)'}
            marginTop={SIZES.h10}
            placeholderColor={Colors.mediumGray}
            inputStyle={{
              borderBottomWidth: 4,
              borderBottomColor: Colors.black,
            }}
          />
          <TextInputWithTitle
            titleText={'Username'}
            title={'Confirm Password :'}
            placeholder={'Enter Your Password :'}
            viewHeight={0.075}
            viewWidth={0.85}
            inputWidth={0.8}
            fontSize={SIZES.h14}
            borderRadius={10}
            backgroundColor={'rgba(230, 232, 230,0.6)'}
            marginTop={SIZES.h10}
            placeholderColor={Colors.mediumGray}
            borderColor={theme.primary}
            inputStyle={{
              borderBottomWidth: 4,
              borderBottomColor: Colors.black,
            }}
          />
          <CustomButton
            text={'Sign In'}
            textColor={Colors.white}
            width={SIZES.windowWidth * 0.8}
            height={SIZES.windowHeight * 0.07}
            marginTop={SIZES.padding}
            bgColor={theme.buttonGredient}
            borderRadius={SIZES.h16}
            isBold
            isGradient
            elevation
          />
        </View>
        <View
          style={[
            styles.row_view,
            {paddingVertical: SIZES.padding, width: windowWidth * 0.6},
          ]}>
          <CustomText style={styles.do_text}>Don’t have an account?</CustomText>
          <CustomText isBold style={styles.Sign_text}>
            Sign Up
          </CustomText>
        </View>
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
  },
  text: {
    color: Colors.veryLightGray,
    marginTop: SIZES.padding2,
    width: SIZES.windowWidth * 0.85,
    ...FONTS.Regular14,
    textAlign: 'center',
  },
  heading: {
    color: Colors.black,
    marginTop: SIZES.padding2,
    textAlign: 'left',
    width: SIZES.windowWidth * 0.7,
    ...FONTS.Bold20,
    textAlign: 'center',
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
    width: SIZES.windowWidth * 0.56,
    alignSelf: 'center',
  },
  forgotpassword: {
    ...FONTS.Medium13,
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

export default SignupScreen;
