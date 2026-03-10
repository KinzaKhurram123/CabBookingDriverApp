import {apiServices} from '../apiServices/requestHandler';
import {setAuthLoading, setAuthLoadingType} from './slices/auth-slice';

export default () => {
  const UserLogin = data => {
    console.log('yehaaa aarhi ha', data);
    return async dispatch => {
      try {
        dispatch(setAuthLoadingType('register'));
        dispatch(setAuthLoading(true));
        const response = await apiServices.Login(data);
        console.log(response, 'reponseeeeeeeeeeee');
        if (response) {
          dispatch(setAuthLoading(true));
          // console.log(response, 'reponseeeeeeeeeeeeeeeeee')
        } else {
          setAuthLoading(false);
        }
      } catch (error) {
        console.log(error, 'error');
        setAuthLoading(false);
      }
    };
  };

  const userSignup = () => {
    return async dispatch => {
      try {
        dispatch(setAuthLoadingType('login'));
        dispatch(setAuthLoading(true));
        const response = await apiServices.Signup(data);
        console.log(response, 'reponseeeeeeeeeeee');
        if (response) {
          dispatch(setAuthLoading(true));
          console.log(response, 'reponseeeeeeeeeeeeeeeeee');
        } else {
          setAuthLoading(false);
        }
      } catch (error) {
        console.log(error, 'error');
        setAuthLoading(false);
      }
    };
  };

  return {
    UserLogin,
  };
};
