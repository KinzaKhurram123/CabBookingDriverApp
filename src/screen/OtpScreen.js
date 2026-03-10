import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import CustomButton from '../component/customButton';
import CustomText from '../component/customText';
import Header from '../component/Header';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useEffect, useState} from 'react';
import navigationServices from '../navigator/navigationServices';
import {useTheme} from '../context/ThemeContext';

const OtpScreen = props => {
  const {theme} = useTheme();
  const email = props?.route?.params?.email;
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
  const [abcd, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const [time, settime] = useState(120);
  const [timerLabel, settimerLabel] = useState('Resend In ');
  if (time > 0) {
    setTimeout(function () {
      settime(time - 1);
    }, 1000);
  }

  const label = () => {
    time == 0 && (settimerLabel('Resend otp '), settime(''));
  };
  useEffect(() => {
    label();
  }, [time]);
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
          OTP Verification
        </CustomText>
        <CustomText style={styles.text}>
          We’ve sent a one-time password to your registered contact details.
          Please enter it below to continue.
        </CustomText>
        <CodeField
          placeholder={'0'}
          ref={ref}
          value={code}
          onChangeText={setCode}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[
                styles.cellRoot,
                isFocused && {
                  borderWidth: 2,
                  borderColor: theme.primary,
                },
              ]}>
              <CustomText
                style={[styles.cellText, isFocused && {color: Colors.black}]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </CustomText>
            </View>
          )}
        />
        <CustomText style={[styles.txt3, {width: SIZES.windowWidth * 0.9}]}>
          Didn’t get Code yet?
        </CustomText>
        <CustomButton
          text={'Next'}
          textColor={Colors.white}
          width={SIZES.windowWidth * 0.9}
          height={SIZES.windowHeight * 0.07}
          marginTop={SIZES.padding + 15}
          bgColor={theme.buttonGredient}
          borderRadius={SIZES.h16}
          isBold
          isGradient
          elevation
          onPress={() => navigationServices.navigate('ResetPassword')}
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
  codeFieldRoot: {
    marginTop: SIZES.h20,
    marginBottom: SIZES.h14,
    width: SIZES.windowWidth * 0.9,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: SIZES.windowWidth * 0.18,
    height: SIZES.windowWidth * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 35, 66, 0.1)',
    borderRadius: SIZES.base,
    marginHorizontal: SIZES.base,
  },
  focusCell: {
    borderWidth: 2,
  },
  cellText: {
    color: Colors.themeBlack,
    fontSize: SIZES.h20,
    textAlign: 'center',
  },
  txt3: {
    color: Colors.mediumGray,
    textAlign: 'center',
    width: '95%',
    marginTop: SIZES.h10,
    lineHeight: SIZES.h20,
    ...FONTS.Medium14,
  },
});

export default OtpScreen;
