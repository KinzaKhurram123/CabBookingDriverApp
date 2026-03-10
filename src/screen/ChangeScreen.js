import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../component/customButton';
import CustomText from '../component/customText';
import Header from '../component/Header';
import TextInputWithTitle from '../component/textInputWithTitle';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import navigationServices from '../navigator/navigationServices';
import {useTheme} from '../context/ThemeContext';

const ChangeScreen = () => {
  const {theme} = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        {backgroundColor: theme.background},
      ]}
      showsVerticalScrollIndicator={true}>
      <Header headerColor={theme.background} hideUser={true} />

      <ImageBackground
        style={[styles.gradient, {backgroundColor: theme.background}]}
        source={null}>
        <CustomText
          isBold
          style={[
            styles.heading,
            {
              color: theme.text,
            },
          ]}>
          Change Your Password
        </CustomText>

        <CustomText style={[styles.text, {color: theme.veryLightGray}]}>
          Enter a new password below to regain access to your account. Please
          choose a password you haven’t used before.
        </CustomText>

        <TextInputWithTitle
          title={'Your Email'}
          placeholder={'Enter Your Email Here'}
          viewHeight={0.075}
          viewWidth={0.9}
          inputWidth={0.9}
          fontSize={SIZES.h12}
          borderRadius={10}
          backgroundColor={theme.card}
          marginTop={SIZES.h10}
          placeholderColor={theme.mediumGray}
          borderColor={theme.primary}
          inputStyle={{
            borderBottomWidth: 2,
            borderBottomColor: theme.border,
          }}
          titleStyle={{color: theme.text}}
        />

        <TextInputWithTitle
          title={'New Password:'}
          placeholder={'Enter New Password Here'}
          viewHeight={0.075}
          viewWidth={0.9}
          inputWidth={0.9}
          fontSize={SIZES.h12}
          borderRadius={10}
          backgroundColor={theme.card}
          marginTop={SIZES.h10}
          placeholderColor={theme.mediumGray}
          borderColor={theme.primary}
          inputStyle={{
            borderBottomWidth: 2,
            borderBottomColor: theme.border,
          }}
          titleStyle={{color: theme.text}}
          secureTextEntry={true}
        />

        <TextInputWithTitle
          title={'Confirm New Password :'}
          placeholder={'Enter Confirm New Password Here'}
          viewHeight={0.075}
          viewWidth={0.9}
          inputWidth={0.9}
          fontSize={SIZES.h12}
          borderRadius={10}
          backgroundColor={theme.card}
          marginTop={SIZES.h10}
          placeholderColor={theme.mediumGray}
          borderColor={theme.primary}
          inputStyle={{
            borderBottomWidth: 2,
            borderBottomColor: theme.border,
          }}
          titleStyle={{color: theme.text}}
          secureTextEntry={true}
        />

        <CustomButton
          text={'Submit'}
          textColor={theme.white}
          width={SIZES.windowWidth * 0.9}
          height={SIZES.windowHeight * 0.07}
          marginTop={SIZES.padding + 15}
          bgColor={theme.button_gredient || ['#46cc00', '#339500']}
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
  },
  heading: {
    ...FONTS.Bold22,
    paddingVertical: SIZES.padding2,
    textAlign: 'left',
    width: '95%',
  },
  text: {
    width: '95%',
    ...FONTS.Regular14,
    textAlign: 'left',
    marginBottom: SIZES.base,
  },
  passwordStrengthContainer: {
    width: '95%',
    marginTop: SIZES.base,
  },
  strengthBar: {
    height: 4,
    borderRadius: 2,
    width: '100%',
    marginBottom: 4,
  },
  strengthFill: {
    height: '100%',
    borderRadius: 2,
  },
  strengthText: {
    ...FONTS.Regular10,
    textAlign: 'right',
  },
  requirementsContainer: {
    width: '95%',
    marginTop: SIZES.padding,
    padding: SIZES.base,
    borderRadius: SIZES.base,
  },
  requirementsTitle: {
    ...FONTS.Bold12,
    marginBottom: SIZES.base,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  requirementText: {
    ...FONTS.Regular10,
    marginLeft: SIZES.base,
  },
});

export default ChangeScreen;
