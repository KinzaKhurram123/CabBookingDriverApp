import {View} from 'native-base';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../component/Header';
import SearchLocation from '../component/searchLocation';
import Colors from '../config/appTheme';
import {SIZES} from '../constant/sizes';

const SetRoutes = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={true}>
      <View style={styles.main_view}>
        <Header showBack title={'Enter your Routes'} />
        <SearchLocation
          iconName="location-pin"
          iconType={Entypo}
          mainAddress="71 Pinewood, Somersetore"
          subAddress="9 Holywell Street, Oxford"
          showCross={true}
          onCrossPress={() => console.log('Cross pressed')}
        />
        <SearchLocation
          iconName="location-pin"
          iconType={Entypo}
          mainAddress="123 Main Street"
          subAddress="New York, NY 10001"
          showCross={false}
        />
      </View>
    </ScrollView>
  );
};

export default SetRoutes;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  main_view: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding2,
  },
});
