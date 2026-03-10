import React from 'react';
import {
  ActivityIndicator,
  I18nManager,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import CustomText from './customText';
import {Icon} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import {useTheme} from '../context/ThemeContext';

const CustomButton = props => {
  const {theme} = useTheme();

  const {
    activeOpacity,
    onPress,
    width,
    height,
    bgColor,
    borderWidth,
    borderColor,
    marginTop,
    marginBottom,
    justifyContent,
    borderRadius,
    isGradient,
    fontSize,
    loader,
    loaderColor,
    iconName,
    iconType,
    iconStyle,
    textColor,
    textTransform,
    text,
    isBold,
    disabled = false,
    alignSelf,
    elevation,
    marginRight,
    textstyle,
    iconIsImage,
    image,
    fontcase,
    style,
    btn_style,
  } = props;

  const getButtonColors = () => {
    if (disabled) {
      return {
        bg: theme.themeLightGray || '#8D8D8D',
        text: theme.white || '#FFFFFF',
        border: theme.themeLightGray || '#8D8D8D',
      };
    }

    if (bgColor) {
      return {
        bg: bgColor,
        text: textColor || theme.white,
        border: borderColor || bgColor,
      };
    }

    return {
      bg: theme.primary || '#205205',
      text: textColor || theme.white || '#FFFFFF',
      border: borderColor || theme.primary || '#205205',
    };
  };

  const getGradientColors = () => {
    if (disabled) {
      return [
        theme.themeLightGray || '#8D8D8D',
        theme.themeLightGray || '#8D8D8D',
      ];
    }

    if (Array.isArray(bgColor)) {
      return bgColor;
    }

    if (isGradient) {
      return theme.button_gredient || ['#46cc00', '#339500'];
    }

    const color = getButtonColors().bg;
    return [color, color];
  };

  const buttonColors = getButtonColors();
  const gradientColors = getGradientColors();

  const buttonStyle = [
    styles.mainBtn,
    {
      width: width,
      height: height,
      borderWidth: borderWidth,
      backgroundColor: isGradient ? 'transparent' : buttonColors.bg,
      borderColor: buttonColors.border,
      marginTop: marginTop || 0,
      marginBottom: marginBottom || 0,
    },
    elevation && {
      shadowColor: theme.themeBlack || '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
    alignSelf && {alignSelf: alignSelf},
    justifyContent && {justifyContent: justifyContent},
    marginRight && {marginRight: marginRight},
    borderRadius && {borderRadius: borderRadius},
    borderWidth && {borderWidth: borderWidth},
    style,
  ];

  const renderContent = () => (
    <>
      {loader && (
        <ActivityIndicator
          style={styles.indicatorStyle}
          size="small"
          color={loaderColor || buttonColors.text}
        />
      )}

      {iconIsImage && (
        <View style={styles.iconImageContainer}>
          {image && (
            <CustomImage
              source={image}
              style={[styles.iconImage, {tintColor: buttonColors.text}]}
            />
          )}
        </View>
      )}

      {iconName && iconType && (
        <Icon
          name={iconName}
          as={iconType}
          size={moderateScale(26, 0.6)}
          color={buttonColors.text}
          style={[styles.icon, iconStyle]}
        />
      )}

      <CustomText
        style={[
          styles.text,
          textstyle,
          {
            color: buttonColors.text,
            fontSize: fontSize || SIZES.h13,
          },
          textTransform && {textTransform: textTransform},
          disabled && {opacity: 0.6},
          btn_style,
        ]}
        isBold={isBold}>
        {text}
      </CustomText>
    </>
  );

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.9}
      onPress={onPress}
      style={buttonStyle}
      disabled={disabled}>
      {isGradient ? (
        <LinearGradient
          style={[
            styles.gradientContainer,
            {
              width: width,
              height: height,
              borderRadius: borderRadius || 5,
            },
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={gradientColors}>
          {renderContent()}
        </LinearGradient>
      ) : (
        renderContent()
      )}
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  activeOpacity: 0.9,
  width: '90%',
  height: moderateScale(48, 0.6),
  borderRadius: 8,
  isGradient: false,
  disabled: false,
  isBold: true,
  textTransform: 'uppercase',
};

const styles = StyleSheet.create({
  mainBtn: {
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    overflow: 'hidden',
  },
  gradientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
  },
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 0.9,
    ...FONTS.Medium11,
  },
  indicatorStyle: {
    paddingRight: 5,
    paddingLeft: I18nManager.isRTL ? 5 : 0,
  },
  icon: {
    marginRight: moderateScale(6, 0.5),
  },
  iconImageContainer: {
    width: SIZES.windowWidth * 0.07,
    marginRight: SIZES.h10,
    height: SIZES.windowWidth * 0.07,
    overflow: 'hidden',
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
});

export default CustomButton;
