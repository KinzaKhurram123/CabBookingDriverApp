import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import Images from '../assests/Appimages';
import {drawer_items, rider_drawer_item} from '../constant/arrays';
import {FONTS, SIZES} from '../constant/sizes';
import {useTheme} from '../context/ThemeContext';
import {setRiderMode} from '../store/slices/common';
import {windowWidth} from '../utility/utils';
import CustomImage from './customImage';
import CustomText from './customText';

const CustomDrawer = React.memo(() => {
  const {theme} = useTheme();

  console.log('Theme in Drawer:', theme);
  console.log('Theme text color:', theme?.text);
  console.log('Theme primary:', theme?.primary);
  console.log('Theme primary:', theme?.gradient);

  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const riderMode = useSelector(state => state?.commonReducer?.riderMode);

  return (
    <ImageBackground
      source={Images.drawer_bg}
      imageStyle={{width: '100%', height: '100%'}}
      resizeMode="cover"
      style={{
        flex: 1,
      }}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <LinearGradient
            colors={theme.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[
              styles.profile_view,
              {backgroundColor: theme?.primary || '#205205'},
            ]}>
            <View style={styles.image_view}>
              <CustomImage style={styles.image} source={Images.user_image2} />
            </View>
            <View style={{marginLeft: SIZES.padding}}>
              <CustomText
                isBold
                style={[styles.heading_text, {color: '#FFFFFF'}]}>
                PAT H. JHONSON
              </CustomText>
              <CustomText style={[styles.text, {color: '#FFFFFF'}]}>
                jhonson@gmail.com
              </CustomText>
            </View>
          </LinearGradient>
          <View
            style={{
              marginTop: SIZES.padding,
            }}>
            {rider_drawer_item.map((item, index) => (
              <TouchableOpacity
                key={item.id || index}
                onPress={item.onPress}
                style={styles.drawerItem}>
                <View style={styles.drawerItemContent}>
                  {item.icon && (
                    <MaterialIcons
                      name={item.icon}
                      size={24}
                      color="#000000"
                      style={styles.drawerIcon}
                    />
                  )}
                  <CustomText
                    isBold
                    style={[styles.drawerItemText, {color: '#000000'}]}>
                    {item.name}
                  </CustomText>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={[styles.end_view, {borderTopColor: '#E0E0E0'}]}>
            <TouchableOpacity
              onPress={() => {
                dispatch(setRiderMode(false));
                navigation.navigate('LoginScreen');
              }}
              style={styles.logoutButton}>
              <View style={styles.drawerItemContent}>
                <MaterialIcons
                  name="logout"
                  size={24}
                  color="#DA3029"
                  style={styles.drawerIcon}
                />
                <CustomText
                  isBold
                  style={[styles.logoutText, {color: '#DA3029'}]}>
                  Logout
                </CustomText>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{height: SIZES.padding * 2}} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
});

export default CustomDrawer;

const styles = StyleSheet.create({
  profile_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding + 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: SIZES.windowWidth * 0.4,
  },
  image_view: {
    width: SIZES.padding + 40,
    height: SIZES.padding + 40,
    borderRadius: SIZES.windowHeight,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.windowHeight,
  },
  heading_text: {
    ...FONTS.Bold20,
    textTransform: 'uppercase',
    width: windowWidth * 0.35,
  },
  text: {
    ...FONTS.Regular12,
  },
  drawerItem: {
    width: SIZES.windowWidth * 0.7,
    marginVertical: SIZES.padding2 / 2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    alignSelf: 'center',
    borderRadius: 8,
  },
  drawerItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerIcon: {
    marginRight: SIZES.base,
  },
  drawerItemText: {
    ...FONTS.heavy14,
  },
  driverButton: {
    alignSelf: 'center',
    marginTop: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  end_view: {
    width: '100%',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    marginBottom: SIZES.padding,
    borderTopWidth: 1,
    paddingTop: SIZES.padding,
  },
  logoutButton: {
    width: SIZES.windowWidth * 0.7,
    margin: SIZES.base,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  logoutText: {
    ...FONTS.Regular16,
  },
});
