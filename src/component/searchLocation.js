import {TouchableOpacity, View} from 'react-native';
import {windowWidth} from '../utility/utils';
import Colors from '../config/appTheme';
import {moderateScale} from 'react-native-size-matters';
import {Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomText from './customText';
import {FONTS} from '../constant/sizes';
import LinearGradient from 'react-native-linear-gradient';
import navigationServices from '../navigator/navigationServices';
import {SearchBar} from 'react-native-screens';

const SearchLocation = props => {
  return (
    <View
      style={{
        width: windowWidth * 0.9,
        height: windowWidth * 0.17,
        backgroundColor: Colors.white,
        borderRadius: moderateScale(10, 0.6),
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10, 0.6),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(10, 0.6),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}>
      <Icon
        name={props.iconName}
        as={props.iconType}
        size={moderateScale(30, 0.6)}
        color={Colors.themeColorLight}
      />

      <View style={{width: '70%'}}>
        <CustomText
          isBold
          style={{
            ...FONTS.Regular14,
            color: Colors.black,
            marginBottom: moderateScale(2, 0.6),
          }}
          numberOfLines={1}>
          {props.mainAddress || '71 Pinewood, Somersetore'}
        </CustomText>

        <CustomText
          style={{
            ...FONTS.Regular12,
            color: Colors.darkGray,
          }}
          numberOfLines={1}>
          {props.subAddress || '9 Holywell Street, Oxford'}
        </CustomText>
      </View>

      <TouchableOpacity onPress={props.onCrossPress}>
        <Icon
          name="cross"
          as={Entypo}
          size={moderateScale(30, 0.6)}
          color={Colors.red}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchLocation;
