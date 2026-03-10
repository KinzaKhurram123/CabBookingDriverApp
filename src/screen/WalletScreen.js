import {Icon, View} from 'native-base';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Images from '../assests/Appimages';
import CustomImage from '../component/customImage';
import CustomText from '../component/customText';
import Header from '../component/Header';
import Colors from '../config/appTheme';
import {wallet_list} from '../constant/arrays';
import {FONTS, SIZES} from '../constant/sizes';
import {windowWidth} from '../utility/utils';
import CustomButton from '../component/customButton';

const WalletScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}>
      <Header title={'My Wallet'} headerColor={Colors.white} hideUser={true} />
      <View style={styles.gradient}>
        <View style={styles.header_view}>
          <CustomImage
            source={Images.atm_card}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: SIZES.padding,
            backgroundColor: Colors.white,
            padding: SIZES.padding2,
            borderRadius: SIZES.padding2,
            width: windowWidth * 0.8,                           
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,
            elevation: 13,
          }}>
          <CustomText style={styles.heading} isBold>
            Your Total Balance
          </CustomText>
          <CustomText style={styles.price_heading} isBold>
            $ 100.00
          </CustomText>
          <CustomButton
            text={'withdrawal'}
            textColor={Colors.white}
            width={SIZES.windowWidth * 0.6}
            height={SIZES.windowHeight * 0.06}
            marginTop={SIZES.padding}
            bgColor={Colors.button_gredient}
            borderRadius={SIZES.h16}
            isBold
            fontSize={SIZES.h16}
            isGradient
            elevation
            onPress={() => navigationServices.navigate('DrawerNavigators')}
          />
        </View>
        <CustomText
          isBold
          style={[
            styles.heading,
            {
              textAlign: 'left',
              marginTop: SIZES.padding,
            },
          ]}>
          Cab Booking App :
        </CustomText>
      </View>
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
    textAlign: 'center',
  },
  heading: {
    color: Colors.black,
    marginTop: SIZES.base,
    textAlign: 'center',
    width: SIZES.windowWidth * 0.9,
    ...FONTS.Bold20,
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
  header_view: {
    width: windowWidth * 0.85,
    height: windowWidth * 0.6,
    borderRadius: SIZES.padding,
    marginTop: SIZES.padding,
    shadowColor: '#46cc00',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  row_view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: SIZES.windowWidth * 0.3,
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
  image_view: {
    width: SIZES.windowWidth * 0.4,
    height: SIZES.windowWidth * 0.4,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: SIZES.padding * 2,
    borderTopLeftRadius: SIZES.padding * 2,
    borderBottomLeftRadius: SIZES.padding * 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.padding + 10,
    borderBottomLeftRadius: SIZES.padding + 10,
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
  price_heading: {
    color: Colors.themeColor,
    marginTop: SIZES.base,
    textAlign: 'center',
    width: SIZES.windowWidth * 0.9,
    ...FONTS.Bold24,
  },
});

export default WalletScreen;
