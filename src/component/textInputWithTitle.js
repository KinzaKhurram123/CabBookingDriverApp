import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  I18nManager,
  Platform,
} from 'react-native';
import {FONTS, SIZES} from '../constant/sizes';
import {useState} from 'react';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import CustomText from './customText';
import Colors from '../config/appTheme';
import {Icon} from 'native-base';
import {windowHeight, windowWidth} from '../utility/utils';
import {moderateScale} from 'react-native-size-matters';
import {useTheme} from '../context/ThemeContext';

const TextInputWithTitle = props => {
  const {theme} = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {props?.title && (
        <CustomText
          isBold
          style={[
            {
              color: theme.mediumGray,
              ...FONTS.Bold14,
              width: SIZES.windowWidth * props.viewWidth,
              paddingHorizontal: SIZES.h15,
              marginTop: props.marginTop ? props.marginTop : SIZES.h10,
            },
            props?.titleStlye,
          ]}>
          {props?.title}
        </CustomText>
      )}
      <View
        style={[
          styles.fieldSet,
          {
            width: SIZES.windowWidth * props.viewWidth,
            borderWidth: props.border,
            backgroundColor: props.backgroundColor,
            borderBottomWidth: props.borderBottomWidth,
            borderColor: props.borderColor ? props.borderColor : theme.border,
          },
          props.elevation && {
            shadowColor: theme.primary,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          },
          props.marginBottom && {
            marginBottom: props.marginBottom,
          },
          props.autoCapitalize && {
            textTransform: props.autoCapitalize,
          },
          props.borderRadius && {
            borderRadius: props.borderRadius,
          },
          props.multiline && {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          props.viewHeight && {
            height: SIZES.windowHeight * props.viewHeight,
          },
          props.marginTop >= 0 && {
            marginTop: props.marginTop,
          },
          props.alignItems && {
            alignItems: props.alignItems,
          },
          props.iconName &&
            !props.rightIcon && {
              paddingLeft: SIZES.h15,
            },
          props.inputStyle,
        ]}>
        {props.foundation && (
          <Icon
            color={props.iconColor || theme.primary}
            name={props.iconName}
            as={props.iconType}
            size={moderateScale(30, 0.2)}
          />
        )}
        {props.iconName && !props.foundation && (
          <Icon
            name={props.iconName}
            as={props.iconType}
            style={[
              {
                textAlign: 'center',
                width: windowWidth * 0.07,
                color:
                  props.color && !props.disable
                    ? props.color
                    : theme.veryLightGray,
                fontSize: moderateScale(16, 0.6),
              },
              props.numberOfLines > 1 && {
                paddingTop: Dimensions.get('window').height * 0.005,
              },
              props.iconHeight && {
                height: windowHeight * props.iconHeight,
              },
              props.rightIcon && {
                position: 'absolute',
                right: moderateScale(10, 0.3),
              },
              props.leftIcon && {
                position: 'absolute',
                left: moderateScale(10, 0.3),
              },
            ]}
            size={props.iconHeight ? props.iconHeight : moderateScale(20, 0.6)}
            onPress={props.onPressLeft}
          />
        )}
        {props.secureText ? (
          <>
            <TextInput
              style={[
                {
                  width: SIZES.windowWidth * props.inputWidth,
                  color: theme.text,
                },
                Platform.OS === 'android'
                  ? [
                      styles.inputBox,
                      {
                        paddingBottom: 10,
                        fontSize: props?.fontSize ? props?.fontSize : SIZES.h12,
                        fontWeight: '400',
                      },
                    ]
                  : [
                      styles.inputBox,
                      {
                        paddingBottom: 0,
                      },
                    ],
              ]}
              onChangeText={text => props.setText(text)}
              value={props.value}
              secureTextEntry={!showPassword}
              placeholder={`${props.placeholder}`}
              placeholderTextColor={
                props.placeholderColor
                  ? props.placeholderColor
                  : theme.mediumGray
              }
              keyboardType={props.keyboardType}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{
                paddingHorizontal: Dimensions.get('window').width * 0.04,
                position: 'absolute',
                right: 0,
                height:
                  Platform.OS === 'android'
                    ? Dimensions.get('window').height * 0.0725
                    : Dimensions.get('window').height * 0.0525,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                as={FontAwesome}
                color={theme.primary}
                size={moderateScale(18, 0.3)}
              />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity activeOpacity={1} onPress={props.onPressLeft}>
            <TextInput
              maxLength={props?.maxLength}
              style={[
                {
                  width: SIZES.windowWidth * props.inputWidth,
                  color: props.disable ? theme.darkGray : theme.text,
                },
                Platform.OS === 'android'
                  ? styles.inputBox
                  : [styles.inputBox, {paddingBottom: 0}],
                props.numberOfLines > 1 && {
                  textAlignVertical: 'top',
                },
                props.inputHeight && {
                  height: SIZES.windowHeight * props.inputHeight,
                },
                props.disable && {
                  color: theme.darkGray,
                },
                props.multiline && {
                  paddingTop: SIZES.h10,
                  textAlignVertical: 'top',
                  marginLeft: SIZES.h16,
                },
                props.color && {
                  color: theme.text,
                },
                props.inputColor && {
                  color: props.inputColor,
                },
              ]}
              onChangeText={text => props.setText(text)}
              value={props.value}
              placeholder={`${props.placeholder}`}
              placeholderTextColor={
                props.placeholderColor
                  ? props.placeholderColor
                  : theme.mediumGray
              }
              keyboardType={props.keyboardType}
              multiline={props.multiline || false}
              numberOfLines={props.numberOfLines || 1}
              editable={props.disable ? false : true}
              autoCapitalize="none"
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fieldSet: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    borderColor: Colors.lightGrey,
    flexDirection: 'row',
    placeholderTextColor: Colors.white,
  },
  inputBox: {
    paddingLeft: SIZES.h20,
    borderRadius: 8,
    fontSize: SIZES.h14,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: Colors.themeLightGray,
  },
});

export default TextInputWithTitle;
