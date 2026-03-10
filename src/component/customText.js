import {Text} from 'react-native';
import {useTheme} from '../context/ThemeContext';

const CustomText = props => {
  const {theme} = useTheme();
  const {children, numberOfLines, textAlign, style, isBold, onPress, color} =
    props;

  return (
    <Text
      onPress={onPress}
      style={[
        {
          textTransform: 'capitalize',
          color: color || theme.text,
          textAlign: textAlign,
        },
        style,
        {fontFamily: 'Quicksand-Regular'},
        isBold && {
          fontFamily: 'Quicksand-Bold',
          fontWeight: 'bold',
        },
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default CustomText;
