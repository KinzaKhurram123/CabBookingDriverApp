import {Badge, Checkbox, Icon, Switch} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../component/customText';
import Colors from '../config/appTheme';
import {FONTS, SIZES} from '../constant/sizes';
import {windowWidth} from '../utility/utils';
import navigationServices from '../navigator/navigationServices';
import {useTheme} from '../context/ThemeContext';

const SettingItem = ({item}) => {
  const {theme} = useTheme();
  const [darkColors, setDarkColors] = useState(false);
  const [displayTraffic, setDisplayTraffic] = useState(false);
  const [dontCallMe, setDontCallMe] = useState(false);
  const [shareLocation, setShareLocation] = useState(false);
  const [appLanguage, setAppLanguage] = useState('English');

  const isThemeItem =
    item?.title === 'Theme' ||
    item?.title === 'App Theme' ||
    item?.title?.toLowerCase().includes('theme');
  const handlePress = () => {
    if (isThemeItem) {
      navigationServices.navigate('ThemeSettings');
    } else {
      console.log('Pressed:', item?.title);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.card_view,
        {
          backgroundColor: theme.card,
          borderBottomColor: theme.border,
        },
      ]}
      activeOpacity={0.7}>
      <View style={styles.textContainer}>
        <CustomText isBold style={[styles.heading, {color: theme.text}]}>
          {item?.title}
        </CustomText>
        {item?.description ? (
          <CustomText style={[styles.description, {color: theme.darkGray}]}>
            {item?.description}
          </CustomText>
        ) : (
          <CustomText style={[styles.description, {color: theme.darkGray}]}>
            {item?.status || appLanguage}
          </CustomText>
        )}
      </View>

      {item?.check !== undefined ? (
        <Switch
          value={item?.check}
          onToggle={value => console.log('Switch toggled:', value)}
          trackColor={{false: theme.border, true: theme.primary}}
          thumbColor={'#FFFFFF'}
          ios_backgroundColor={theme.border}
          size="md"
        />
      ) : (
        <View style={styles.iconContainer}>
          {isThemeItem && (
            <View
              style={[styles.themePreview, {backgroundColor: theme.primary}]}>
              <View
                style={[
                  styles.themePreviewDot,
                  {backgroundColor: theme.secondary},
                ]}
              />
            </View>
          )}
          <Icon
            name="chevron-right"
            as={Entypo}
            size={moderateScale(20, 0.6)}
            color={theme.veryLightGray}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  card_view: {
    width: windowWidth * 0.9,
    marginTop: SIZES.padding2,
    paddingHorizontal: moderateScale(16, 0.6),
    paddingVertical: SIZES.padding2,
    borderRadius: moderateScale(12, 0.8),
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    marginRight: moderateScale(12, 0.6),
  },
  heading: {
    ...FONTS.Bold14,
    marginBottom: moderateScale(4, 0.6),
  },
  description: {
    ...FONTS.Regular12,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  themePreview: {
    width: moderateScale(24, 0.6),
    height: moderateScale(24, 0.6),
    borderRadius: moderateScale(12, 0.6),
    marginRight: moderateScale(8, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  themePreviewDot: {
    width: moderateScale(12, 0.6),
    height: moderateScale(12, 0.6),
    borderRadius: moderateScale(6, 0.6),
  },
});
