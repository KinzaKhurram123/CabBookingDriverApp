import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const SIZES = {
  base: moderateScale(8),
  font: moderateScale(14),
  radius_sm: moderateScale(4),
  radius: moderateScale(30),
  padding: moderateScale(20),
  padding2: moderateScale(12),

  h8: moderateScale(8),
  h9: moderateScale(9),
  h10: moderateScale(10),
  h11: moderateScale(11),
  h12: moderateScale(12),
  h13: moderateScale(13),
  h14: moderateScale(14),
  h16: moderateScale(16),
  h18: moderateScale(18),
  h20: moderateScale(20),
  h22: moderateScale(22),
  h23: moderateScale(23),
  h24: moderateScale(24),
  h26: moderateScale(26),
  h30: moderateScale(30),
  h34: moderateScale(34),

  windowWidth: width,
  windowHeight: height,
};

export const FONTS = {
  UrbanistBold8: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h8),
  },
  UrbanistBold11: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h11),
  },
  UrbanistBold12: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h12),
  },
  UrbanistBold13: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h13),
  },
  UrbanistBold14: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h14),
  },
  UrbanistBold16: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h16),
  },
  UrbanistBold18: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h18),
  },
  UrbanistBold20: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h20),
  },

  UrbanistBold22: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h22),
  },
  UrbanistBold24: {
    fontFamily: 'ArchivoBlack-Regular',
    fontSize: RFValue(SIZES.h24),
  },
  UrbanistBold26: {
    fontFamily: 'Urbanist-Bold',
    fontSize: RFValue(SIZES.h26),
  },

  // Medium Fonts
  UrbanistMedium8: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h8),
  },
  UrbanistMedium11: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h11),
  },
  UrbanistMedium12: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h12),
  },
  UrbanistMedium13: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  UrbanistMedium14: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  UrbanistMedium16: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  UrbanistMedium18: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h18),
  },
  UrbanistMedium20: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h20),
  },
  UrbanistMedium24: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h24),
  },
  // Regular Fonts
  UrbanistRegular9: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h9),
  },
  UrbanistRegular10: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  UrbanistRegular11: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  UrbanistRegular12: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  UrbanistRegular13: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  UrbanistRegular14: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  UrbanistRegular16: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h16),
  },
  UrbanistRegular18: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  UrbanistRegular20: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h20),
  },
  //UrbanistLight Fonts
  UrbanistLight10: {
    fontFamily: 'Urbanist-Light',
    fontSize: RFValue(SIZES.h10),
  },
  UrbanistLight11: {
    fontFamily: 'Urbanist-Light',
    fontSize: RFValue(SIZES.h11),
  },
  UrbanistLight13: {
    fontFamily: 'Urbanist-Light',
    fontSize: RFValue(SIZES.h13),
  },
  UrbanistLight14: {
    fontFamily: 'Urbanist-Light',
    fontSize: RFValue(SIZES.h14),
  },
  UrbanistSemiBold7: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: RFValue(SIZES.h7),
  },
  UrbanistSemiBold8: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: RFValue(SIZES.h8),
  },
  UrbanistSemiBold12: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: RFValue(SIZES.h12),
  },

  UrbanistSemiBold13: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: RFValue(SIZES.h13),
  },
  //  Monstserrat
  // Bold Fonts
  Bold8: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h8),
  },
  Bold11: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  Bold12: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Bold13: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Bold14: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  Bold16: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h16),
  },
  Bold18: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  Bold20: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h20),
  },

  Bold22: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h22),
  },
  Bold24: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h24),
  },
  Bold26: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h26),
  },
  Bold30: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h30),
  },
  Bold34: {
    fontFamily: 'Bungee-Regular',
    fontSize: RFValue(SIZES.h34),
  },
  // Medium Fonts
  Medium11: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h11),
  },
  Medium12: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h12),
  },
  Medium13: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  Medium14: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  Medium16: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  Medium18: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h18),
  },
  Medium20: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h20),
  },
  Medium24: {
    fontFamily: 'Urbanist-Medium',
    fontSize: RFValue(SIZES.h24),
  },
  // Regular Fonts
  Regular9: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h9),
  },
  Regular10: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  Regular11: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  Regular12: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Regular13: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Regular14: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  Regular16: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h16),
  },
  Regular18: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  Regular20: {
    fontFamily: 'Urbanist-Regular',
    fontSize: RFValue(SIZES.h20),
  },
  //UrbanistLight Fonts
  UrbanistLight10: {
    fontFamily: 'Urbanist-Light',
    fontSize: RFValue(SIZES.h10),
  },
  UrbanistLight11: {
    fontFamily: 'Urbanist-Light',
    fontSize: RFValue(SIZES.h11),
  },
  UrbanistLight13: {
    fontFamily: 'Urbanist-Light',
    fontSize: RFValue(SIZES.h13),
  },
  UrbanistLight14: {
    fontFamily: 'Urbanist-Light',
    fontSize: RFValue(SIZES.h14),
  },
  black13: {
    fontFamily: 'Urbanist-Black',
    fontSize: RFValue(SIZES.h13),
  },
  black14: {
    fontFamily: 'Urbanist-Black',
    fontSize: RFValue(SIZES.h14),
  },
  black18: {
    fontFamily: 'Urbanist-Black',
    fontSize: RFValue(SIZES.h18),
  },
  black24: {
    fontFamily: 'Urbanist-Black',
    fontSize: RFValue(SIZES.h24),
  },
  heavy12: {
    fontFamily: 'Urbanist-Heavy',
    fontSize: RFValue(SIZES.h12),
  },
  heavy14: {
    fontFamily: 'Urbanist-Heavy',
    fontSize: RFValue(SIZES.h14),
  },
  heavy16: {
    fontFamily: 'Urbanist-Heavy',
    fontSize: RFValue(SIZES.h16),
  },
  heavy20: {
    fontFamily: 'Urbanist-Heavy',
    fontSize: RFValue(SIZES.h20),
  },
};

const appTheme = {SIZES, FONTS};

export default appTheme;
