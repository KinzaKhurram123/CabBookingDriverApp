import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screen/SplashScreen';
import MainNavigator from './src/mainNavigator';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {
  requestCameraPermission,
  requestLocationPermission,
  requestWritePermission,
} from './src/utility/utils';
import {ThemeProvider} from './src/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NativeBaseProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainContainer />
          </PersistGate>
        </Provider>
      </NativeBaseProvider>
    </ThemeProvider>
  );
};

const MainContainer = () => {
  useEffect(() => {
    const errorHandler = (error, isFatal) => {
      console.log('App crashed:', error);
    };
    ErrorUtils.setGlobalHandler(errorHandler);

    return () => {
      ErrorUtils.setGlobalHandler(null);
    };
  }, []);

  const [isloading] = useloader(true);

  if (isloading) {
    return <SplashScreen />;
  }

  return <MainNavigator />;
};

const useloader = initialValue => {
  const [isloading, setIsloading] = useState(initialValue);
  const [loadingTime] = useState(5000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [loadingTime]);

  useEffect(() => {
    async function GetPermission() {
      await requestCameraPermission();
      await requestWritePermission();
      await requestLocationPermission();
      // await requestPostNotifications();
    }
    GetPermission();
  }, []);

  return [isloading];
};

export default App;
