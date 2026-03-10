import {ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomImage from '../component/customImage';
import CustomText from '../component/customText';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import Images from '../assests/Appimages';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={Images.background_splash_screen}
      style={styles.gradient}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_Container: {
    height: SIZES.windowHeight * 0.25,
    width: SIZES.windowWidth * 0.8,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  bottomImage: {
    width: SIZES.windowWidth * 0.4,
    height: SIZES.windowWidth * 0.3,
  },
  text: {
    width: SIZES.windowWidth * 0.85,
    textAlign: 'center',
    ...FONTS.Medium14,
    marginTop: SIZES.h10,
    color: Colors.lightGrey,
  },
  heading: {
    width: SIZES.windowWidth * 0.8,
    textAlign: 'center',
    ...FONTS.UrbanistBold26,
    color: Colors.white,
    marginTop: SIZES.h26,
  },
  LogoText: {
    fontSize: SIZES.h26,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
