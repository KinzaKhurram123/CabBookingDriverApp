import { View, StatusBar, SafeAreaView, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Colors from '../config/appTheme';
import { FONTS, SIZES } from '../constant/sizes';

export default function CustomStatusBar(props) {
  const { backgroundColor, barStyle } = props;
  const isGradient = Array.isArray(backgroundColor);
  const StatusBarHeight = StatusBar.currentHeight;
  return (
    <>
      {isGradient ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={backgroundColor ? backgroundColor : [Color.themeBgColor]}
          style={[
            {
              height: StatusBarHeight,
              width: SIZES.windowWidth,
            },
          ]}
        >
          <StatusBar
            translucent={true}
            backgroundColor={"transparent"}
            barStyle={barStyle ? barStyle : "light-content"}
          />
          <SafeAreaView style={{ flex: 0 }} />
        </LinearGradient>
      ) : (
        <View
          style={[
            {
              height: Platform.OS == "android" ? 0 : StatusBarHeight,
              width: SIZES.windowWidth,
              backgroundColor: backgroundColor
                ? backgroundColor
                : Colors.themePurpleLevel4,
            },
          ]}
        >
          <StatusBar
            translucent={Platform.OS == "android" ? false : true}
            backgroundColor={
              Platform.OS == "android"
                ? backgroundColor
                  ? backgroundColor
                  : Colors.gray
                : "transparent"
            }
            barStyle={barStyle ? barStyle : "light-content"}
          />
          <SafeAreaView style={{ flex: 0 }} />
        </View>
      )}
    </>
  );
}
