import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import navigationServices from './navigator/navigationServices';
import SignupScreen from './screen/SignupScreen';
import ForgetPassword from './screen/ForgetPassword';
import OtpScreen from './screen/OtpScreen';
import ResetPassword from './screen/ResetPassword';
import DrawerNavigators from './navigator/DrawerNavigators';
import RideBooking from './screen/RideBooking';
import SetRoutes from './screen/SetRoute';
import RideDetails from './screen/RideDetails';
import ConfirmBooking from './screen/confirmBooking';
import {useSelector} from 'react-redux';
import ChooseVechicle from './screen/chooseVechicle';
import AcceptRideRequest from './screen/acceptRideRequest';
import ThemeSettings from './screen/ThemeSetting';
import SelectUserTypeScreen from './screen/SelectUserTypeScreen';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const riderMode = useSelector(state => state?.commonReducer?.riderMode);

  return (
    <NavigationContainer ref={navigationServices.navigationRef}>
      <Stack.Navigator
        initialRouteName={'LoginScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ChooseVechicle" component={ChooseVechicle} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="DrawerNavigators" component={DrawerNavigators} />
        <Stack.Screen name="RideBooking" component={RideBooking} />
        <Stack.Screen name="SetRoutes" component={SetRoutes} />
        <Stack.Screen name="RideDetails" component={RideDetails} />
        <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
        <Stack.Screen name="AcceptRideRequest" component={AcceptRideRequest} />
        <Stack.Screen name="ThemeSettings" component={ThemeSettings} />
        <Stack.Screen
          name="SelectUserTypeScreen"
          component={SelectUserTypeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
