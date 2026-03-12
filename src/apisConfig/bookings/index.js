import {Alert, Platform, ToastAndroid} from 'react-native';
import {Post} from '../../axios/AxiosInterceptorFunction';
import {apiHeader} from '../../utility/utils';
import {booking_ride, update_location} from '../endpoints';
import navigationServices from '../../navigator/navigationServices';

export const confirmRider = async ({setLoading, body, dispatch, token}) => {
  console.log('bodyddd', body);
  console.log('tokennnn', token);

  setLoading(true);
  const response = await Post(booking_ride, body, apiHeader(token));
  setLoading(false);
  if (response != undefined) {
    setLoading(false);
    navigationServices.navigate('ConfirmBooking', {
      data: response?.data?.booking,
    });
    console.log(response?.data, 'response?.data');
    Platform.OS == 'android'
      ? ToastAndroid.show(response?.data?.message, ToastAndroid.SHORT)
      : Alert.alert(response?.data?.message);
  }
};

export const updateLocation = async ({setLoading, body, dispatch, token}) => {
  console.log(body, 'bodybodybody');
  setLoading(true);
  const response = await Post(update_location, body, apiHeader(token));
  setLoading(false);
  if (response != undefined) {
    setLoading(false);
    console.log(response?.data, 'response?.data');
    Platform.OS == 'android'
      ? ToastAndroid.show(response?.data?.message, ToastAndroid.SHORT)
      : Alert.alert(response?.data?.message);
  }
};
