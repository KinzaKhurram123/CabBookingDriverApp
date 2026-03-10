import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {FONTS, SIZES} from '../constant/sizes';
import CustomText from '../component/customText';
import {windowWidth} from '../utility/utils';
import {settings_item} from '../constant/arrays';
import {moderateScale} from 'react-native-size-matters';
import SettingItem from '../component/settingItems';
import {useTheme} from '../context/ThemeContext';

const Setting = () => {
  const {theme} = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        {backgroundColor: theme.background},
      ]}
      showsVerticalScrollIndicator={true}>
      <Header headerColor={theme.background} hideUser={true} />
      <View style={[styles.main_view, {backgroundColor: theme.background}]}>
        <CustomText style={[styles.heading, {color: theme.text}]} isBold>
          Settings
        </CustomText>
        <FlatList
          data={settings_item}
          renderItem={({item}) => {
            return <SettingItem item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  main_view: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    paddingTop: SIZES.padding2,
  },
  heading: {
    ...FONTS.Bold18,
    textAlign: 'left',
    width: windowWidth * 0.9,
    marginTop: SIZES.padding2,
  },
});
