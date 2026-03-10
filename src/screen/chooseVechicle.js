import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../component/customButton';
import CustomText from '../component/customText';
import Header from '../component/Header';
import TextInputWithTitle from '../component/textInputWithTitle';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import navigationServices from '../navigator/navigationServices';
import {useSafeArea, View} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../utility/utils';
import CustomImage from '../component/customImage';
import Images from '../assests/Appimages';
import {useState} from 'react';
import {driverCategories} from '../constant/arrays';
import {useDispatch} from 'react-redux';
import {setVechicalType} from '../store/slices/common';
import {useTheme} from '../context/ThemeContext';

const ChooseVechicle = () => {
  const {theme} = useTheme();
  const [selected_vechicle, setSelectedVechicle] = useState('cab');
  console.log(selected_vechicle, '========>');
  const dispatch = useDispatch();

  const ButtonCard = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.input_container,
          {
            backgroundColor:
              selected_vechicle == item?.value
                ? `rgba(${parseInt(theme.primary.slice(1, 3), 16)}, ${parseInt(
                    theme.primary.slice(3, 5),
                    16,
                  )}, ${parseInt(theme.primary.slice(5, 7), 16)}, 0.2)`
                : 'rgba(199, 199, 198, 0.1)',
            borderWidth: selected_vechicle == item?.value ? 2 : 0.5,
            borderColor:
              selected_vechicle == item?.value ? theme.primary : theme.black,
          },
        ]}
        onPress={() => {
          setSelectedVechicle(item?.value);
          navigationServices.navigate('DrawerNavigators');
          dispatch(setVechicalType(item?.value));
        }}>
        <View style={{width: windowWidth * 0.55}}>
          <CustomText isBold style={[styles.heading, {color: theme.text}]}>
            {' '}
            {item?.title}
          </CustomText>
          <CustomText
            style={[
              styles.text,
              {marginTop: moderateScale(5, 0.6), color: theme.darkGray},
            ]}>
            {item?.text}
          </CustomText>
        </View>
        <View
          style={{
            width: windowWidth * 0.35,
            height: windowWidth * 0.22,
          }}>
          <CustomImage source={item?.image} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}>
      <Header />
      <ImageBackground
        style={[styles.gradient, {backgroundColor: theme.background}]}
        source={Images.background_image}>
        <CustomText
          isBold
          style={{
            ...FONTS.Bold22,
            color: theme.text,
            paddingVertical: SIZES.padding2,
            textAlign: 'left',
            width: '95%',
          }}>
          Choose Your Driving Category
        </CustomText>
        <CustomText style={[styles.main_text, {color: theme.veryLightGray}]}>
          Select the type of service you want to provide. You can drive
          passengers, deliver packages, transport pets, or offer bike rides
          depending on your vehicle and preference
        </CustomText>
        {driverCategories.map((item, index) => (
          <ButtonCard key={index} item={item} />
        ))}
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
  text: {
    ...FONTS.Regular12,
    textAlign: 'left',
  },
  main_text: {
    ...FONTS.Regular13,
  },
  heading: {
    ...FONTS.Bold13,
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  input_container: {
    borderWidth: 1,
    borderRadius: moderateScale(10, 0.6),
    width: SIZES.windowWidth * 0.92,
    alignItems: 'center',
    paddingHorizontal: SIZES.h10,
    backgroundColor: 'rgba(199, 199, 198, 0.2)',
    marginTop: SIZES.padding,
    paddingVertical: SIZES.windowWidth * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.windowWidth * 0.55,
  },
  forgotpassword: {
    ...FONTS.Medium13,
    textAlign: 'right',
    width: '95%',
    paddingVertical: SIZES.base,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ChooseVechicle;
