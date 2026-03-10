import Pulse from '@lisbakke/react-native-pulse';
import {Icon} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {Marker} from 'react-native-maps';
import {moderateScale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../config/appTheme';
import {windowWidth} from '../utility/utils';

const PulsingMarker = ({coordinate, color = '#F3F4F6', text = '📍'}) => {
  const markerSize = windowWidth * 0.7;

  return (
    <Marker coordinate={coordinate} anchor={{x: 0.5, y: 0.5}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: markerSize,
          height: markerSize,
          borderRadius: markerSize / 2,
        }}>
        <View
          style={{
            position: 'absolute',
            width: markerSize * 1.5,
            height: markerSize * 1.5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: (markerSize * 1.5) / 2,
            overflow: 'hidden',
          }}>
          <Pulse
            color={color}
            diameter={markerSize * 1.5}
            duration={2000}
            numPulses={3}
            speed={20}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.themeColor,
            width: markerSize * 0.3,
            height: markerSize * 0.3,
            borderRadius: (markerSize * 0.3) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 3,
            borderColor: 'white',
            zIndex: 10,
          }}>
          <Icon
            name="location-pin"
            as={MaterialIcons}
            color={Colors.white}
            size={moderateScale(30, 0.6)}
          />
        </View>
      </View>
    </Marker>
  );
};

export default PulsingMarker;
