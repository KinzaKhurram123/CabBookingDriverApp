import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import CustomDrawer from '../component/drawer';
import {SIZES} from '../constant/sizes';
import ChangeScreen from '../screen/ChangeScreen';
import HistoryScreen from '../screen/HistoryScreen';
import HomeScreen from '../screen/HomeScreen';
import NotificationScreen from '../screen/Notifications';
import SaveAddress from '../screen/SaveAddress';
import Setting from '../screen/Setting';
import WalletScreen from '../screen/WalletScreen';
import DashBoardScreen from '../screen/dashboardScreen';
import {useSelector} from 'react-redux';
import MyBookingScreen from '../screen/MyBookingScreen';
import UserEditProfile from '../screen/userEditProfileScreen';
import RiderEditProfile from '../screen/riderEditProfile';

const DrawerNavigators = () => {
  const DrawerNavigation = createDrawerNavigator();
  const riderMode = useSelector(state => state?.commonReducer?.riderMode);

  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName={'DashBoardScreen'}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%',
          borderTopRightRadius: SIZES.padding,
          borderBottomRightRadius: SIZES.padding,
        },
      }}>
      <DrawerNavigation.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
      />
      <DrawerNavigation.Screen name="WalletScreen" component={WalletScreen} />
      <DrawerNavigation.Screen name="HistoryScreen" component={HistoryScreen} />
      <DrawerNavigation.Screen name="ChangeScreen" component={ChangeScreen} />
      <DrawerNavigation.Screen name="SaveAddress" component={SaveAddress} />
      <DrawerNavigation.Screen name="Setting" component={Setting} />
      <DrawerNavigation.Screen
        name="RiderEditProfile"
        component={RiderEditProfile}
      />
      <DrawerNavigation.Screen
        name="UserEditProfile"
        component={UserEditProfile}
      />
      <DrawerNavigation.Screen
        name="MyBookingScreen"
        component={MyBookingScreen}
      />
      <DrawerNavigation.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </DrawerNavigation.Navigator>
  );
};

export default DrawerNavigators;

const styles = StyleSheet.create({});
