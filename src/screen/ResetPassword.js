import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import CustomButton from '../component/customButton';
import CustomText from '../component/customText';
import Header from '../component/Header';
import TextInputWithTitle from '../component/textInputWithTitle';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import navigationServices from '../navigator/navigationServices';
import {useTheme} from '../context/ThemeContext';

const ResetPassword = () => {
  const {theme} = useTheme();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}>
      <Header headerColor={Colors.white} showBack hideUser={true} />
      <ImageBackground style={styles.gradient}>
        <CustomText
          isBold
          style={{
            ...FONTS.Bold22,
            color: Colors.black,
            paddingVertical: SIZES.padding2,
            textAlign: 'left',
            width: '95%',
          }}>
          Create New Password
        </CustomText>
        <CustomText style={styles.text}>
          Enter a new password below to regain access to your account. Please
          choose a password you haven’t used before.
        </CustomText>
        <TextInputWithTitle
          title={'New Password:'}
          placeholder={'Enter New Password Here'}
          viewHeight={0.075}
          viewWidth={0.9}
          inputWidth={0.9}
          fontSize={SIZES.h12}
          borderRadius={10}
          backgroundColor={'rgba(230, 232, 230,0.6)'}
          marginTop={SIZES.h10}
          placeholderColor={Colors.mediumGray}
          borderColor={theme.primary}
          inputStyle={{
            borderBottomWidth: 2,
            borderBottomColor: Colors.black,
          }}
        />
        <TextInputWithTitle
          title={'Confirm New Password :'}
          placeholder={'Enter Confirm New Password Here'}
          viewHeight={0.075}
          viewWidth={0.9}
          inputWidth={0.9}
          fontSize={SIZES.h12}
          borderRadius={10}
          backgroundColor={'rgba(230, 232, 230,0.6)'}
          marginTop={SIZES.h10}
          placeholderColor={Colors.mediumGray}
          borderColor={theme.primary}
          inputStyle={{
            borderBottomWidth: 2,
            borderBottomColor: Colors.black,
          }}
        />
        <CustomButton
          text={'Submit'}
          textColor={Colors.white}
          width={SIZES.windowWidth * 0.9}
          height={SIZES.windowHeight * 0.07}
          marginTop={SIZES.padding + 15}
          bgColor={theme.buttonGredient}
          borderRadius={SIZES.h16}
          isBold
          isGradient
          elevation
          btn_style={{
            ...FONTS.Regular14,
          }}
          onPress={() => navigationServices.navigate('LoginScreen')}
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
    paddingHorizontal: SIZES.base,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.veryLightGray,
    width: '95%',
    ...FONTS.Regular14,
    textAlign: 'left',
  },
  heading: {
    color: Colors.black,
    marginTop: SIZES.base,
    textAlign: 'left',
    width: SIZES.windowWidth * 0.9,
    ...FONTS.Bold22,
    textAlign: 'left',
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

export default ResetPassword;
