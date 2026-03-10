import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import Images from '../assests/Appimages';
import CustomImage from './customImage';
import CustomText from './customText';
import {SIZES} from '../constant/sizes';
import navigationServices from '../navigator/navigationServices';
import {useTheme} from '../context/ThemeContext';

const {width: windowWidth} = Dimensions.get('window');

const VehicleCard = () => {
  const {theme} = useTheme();
  const [selectedCard, setSelectedCard] = useState(null);

  const carScale = useRef(new Animated.Value(1)).current;
  const cargoScale = useRef(new Animated.Value(1)).current;
  const petScale = useRef(new Animated.Value(1)).current;
  const petDeliveryScale = useRef(new Animated.Value(1)).current;

  const handlePressIn = cardType => {
    let scaleValue;
    switch (cardType) {
      case 'car':
        scaleValue = carScale;
        break;
      case 'cargo':
        scaleValue = cargoScale;
        break;
      case 'pet':
        scaleValue = petScale;
        break;
      case 'pet_delivery':
        scaleValue = petDeliveryScale;
        break;
      default:
        return;
    }

    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
      tension: 150,
      friction: 3,
    }).start();
  };

  const handlePressOut = cardType => {
    let scaleValue;
    switch (cardType) {
      case 'car':
        scaleValue = carScale;
        break;
      case 'cargo':
        scaleValue = cargoScale;
        break;
      case 'pet':
        scaleValue = petScale;
        break;
      case 'pet_delivery':
        scaleValue = petDeliveryScale;
        break;
      default:
        return;
    }

    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      tension: 150,
      friction: 3,
    }).start();
  };

  const handleCardPress = (vehicleType, title) => {
    setSelectedCard(vehicleType);
    navigationServices.navigate('RideBooking', {
      vehicleType: vehicleType,
      title: title,
    });
  };

  const getPrimaryGradient = () => {
    return theme.button_gredient || ['#46cc00', '#339500'];
  };

  const getSecondaryGradient = () => {
    return theme.red_gredient || ['#DA3029', '#3F2925'];
  };

  const cards = {
    car: {
      type: 'car',
      title: 'Car Ride',
      gradient: getPrimaryGradient(),
      image: Images.car_image,
      scale: carScale,
      style: styles.leftBigCard,
    },
    cargo: {
      type: 'cargo',
      title: 'Cargo',
      gradient: getSecondaryGradient(),
      image: Images.cargo_card,
      scale: cargoScale,
      style: styles.smallCard,
    },
    pet: {
      type: 'pet',
      title: 'Pet Transport',
      gradient: getSecondaryGradient(),
      image: Images.pet_card,
      scale: petScale,
      style: styles.smallCard,
    },
    petDelivery: {
      type: 'pet_delivery',
      title: 'Pet Delivery',
      gradient: getPrimaryGradient(),
      image: Images.pet_delivery,
      scale: petDeliveryScale,
      style: styles.lastCard,
    },
  };

  return (
    <View style={[styles.container, {backgroundColor: 'transparent'}]}>
      <View style={styles.vehicleMainRow}>
        <TouchableOpacity
          style={styles.leftCardContainer}
          activeOpacity={0.8}
          onPressIn={() => handlePressIn('car')}
          onPressOut={() => handlePressOut('car')}
          onPress={() => handleCardPress('car', 'Car Ride')}>
          <Animated.View style={[{transform: [{scale: carScale}], flex: 1}]}>
            <LinearGradient
              style={cards.car.style}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={cards.car.gradient}>
              <View style={styles.bigCardImageBg}>
                <CustomImage
                  style={styles.carImage}
                  source={cards.car.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.cardLabel}>
                <CustomText style={styles.cardLabelText}>CAR</CustomText>
              </View>
            </LinearGradient>
          </Animated.View>
        </TouchableOpacity>

        <View style={styles.rightSmallCards}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => handlePressIn('cargo')}
            onPressOut={() => handlePressOut('cargo')}
            onPress={() => handleCardPress('cargo', 'Cargo Delivery')}>
            <Animated.View style={{transform: [{scale: cargoScale}]}}>
              <LinearGradient
                style={cards.cargo.style}
                start={{x: 0.5, y: 0}}
                end={{x: 1, y: 1}}
                colors={cards.cargo.gradient}>
                <View style={styles.cargoImageContainer}>
                  <CustomImage
                    style={styles.image}
                    source={cards.cargo.image}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.smallCardLabel}>
                  <CustomText style={styles.smallCardLabelText}>
                    CARGO
                  </CustomText>
                </View>
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => handlePressIn('pet')}
            onPressOut={() => handlePressOut('pet')}
            onPress={() => handleCardPress('pet', 'Pet Transport')}>
            <Animated.View style={{transform: [{scale: petScale}]}}>
              <LinearGradient
                style={[cards.pet.style, styles.smallCardMargin]}
                start={{x: 0.5, y: 0}}
                end={{x: 1, y: 1}}
                colors={cards.pet.gradient}>
                <View style={styles.petImageContainer}>
                  <CustomImage
                    style={styles.image}
                    source={cards.pet.image}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.smallCardLabel}>
                  <CustomText style={styles.smallCardLabelText}>
                    Bike
                  </CustomText>
                </View>
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={() => handlePressIn('pet_delivery')}
        onPressOut={() => handlePressOut('pet_delivery')}
        onPress={() => handleCardPress('pet_delivery', 'Pet Delivery')}>
        <Animated.View style={{transform: [{scale: petDeliveryScale}]}}>
          <LinearGradient
            style={cards.petDelivery.style}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={cards.petDelivery.gradient}>
            <View style={styles.petDeliver_card}>
              <CustomImage
                style={styles.petDeliveryImage}
                source={cards.petDelivery.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.cardLabel}>
              <CustomText style={styles.cardLabelText}>PET DELIVERY</CustomText>
            </View>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: SIZES.base,
  },
  vehicleMainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.windowWidth * 0.91,
    height: SIZES.windowWidth * 0.52,
  },
  leftCardContainer: {
    width: SIZES.windowWidth * 0.55,
    height: '100%',
  },
  leftBigCard: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.h12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  rightSmallCards: {
    width: SIZES.windowWidth * 0.33,
    height: SIZES.windowWidth * 0.52,
    justifyContent: 'space-between',
  },
  smallCard: {
    width: '100%',
    height: SIZES.windowWidth * 0.25,
    borderRadius: SIZES.h12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  smallCardMargin: {
    marginTop: moderateScale(8, 0.6),
  },
  lastCard: {
    width: SIZES.windowWidth * 0.91,
    height: windowWidth * 0.4,
    borderRadius: SIZES.h12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: moderateScale(10, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bigCardImageBg: {
    width: '100%',
    height: '100%',
  },
  carImage: {
    width: '90%',
    height: '90%',
  },
  petDeliveryImage: {
    width: '90%',
    height: '90%',
  },
  cargoImageContainer: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
  },
  petDeliver_card: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    marginTop: moderateScale(0, 0.7),
  },
  petImageContainer: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.28,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardLabel: {
    position: 'absolute',
    bottom: moderateScale(10, 0.6),
    left: moderateScale(10, 0.6),
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: moderateScale(8, 0.6),
    paddingVertical: moderateScale(4, 0.6),
    borderRadius: moderateScale(4, 0.6),
  },
  cardLabelText: {
    color: '#FFFFFF',
    fontSize: moderateScale(10, 0.6),
    fontWeight: 'bold',
  },
  smallCardLabel: {
    position: 'absolute',
    bottom: moderateScale(5, 0.6),
    left: moderateScale(5, 0.6),
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: moderateScale(4, 0.6),
    paddingVertical: moderateScale(2, 0.6),
    borderRadius: moderateScale(4, 0.6),
  },
  smallCardLabelText: {
    color: '#FFFFFF',
    fontSize: moderateScale(8, 0.6),
    fontWeight: 'bold',
  },
});

export default VehicleCard;
