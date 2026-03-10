// screens/rider/RiderEditProfile.js
import {Icon, theme} from 'native-base';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Images from '../assests/Appimages';
import CustomButton from '../component/customButton';
import CustomImage from '../component/customImage';
import CustomText from '../component/customText';
import Header from '../component/Header';
import TextInputWithTitle from '../component/textInputWithTitle';
import {FONTS, SIZES} from '../constant/sizes';
import {useTheme} from '../context/ThemeContext';
import {windowWidth} from '../utility/utils';

const RiderEditProfile = () => {
  const {theme} = useTheme();
  const [profileImage, setProfileImage] = useState(Images.driver1);
  const [vehicleImage, setVehicleImage] = useState(Images.carimage);
  const [isOnline, setIsOnline] = useState(true);
  const [formData, setFormData] = useState({
    fullName: 'Michael Chen',
    email: 'michael.chen@driver.com',
    phone: '+1 234 567 8900',
    address: '456 Oak Avenue, Los Angeles, CA 90001',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    dateOfBirth: '1985-06-20',

    licenseNumber: 'DL-12345678',
    licenseExpiry: '2025-12-31',
    insuranceProvider: 'SafeDrive Insurance',
    insurancePolicy: 'POL-987654321',
    vehicleModel: 'Toyota Camry',
    vehicleYear: '2022',
    vehicleColor: 'Silver',
    vehiclePlate: 'ABC-1234',
    vehicleMake: 'Toyota',
  });

  const handleImagePick = setter => {
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        setter(source);
      }
    });
  };

  const updateField = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Header headerColor={theme.background} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileImageSection}>
          <View style={styles.imageContainer}>
            <CustomImage
              source={profileImage}
              style={[styles.profileImage, {backgroundColor: theme.border}]}
            />
            <TouchableOpacity
              style={[styles.editImageBtn, {backgroundColor: theme.primary}]}
              onPress={() => handleImagePick(setProfileImage)}>
              <Icon
                as={MaterialIcons}
                name="edit"
                size={moderateScale(16, 0.6)}
                color={theme.white}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.toggleContainer, {backgroundColor: theme.card}]}>
          <View style={styles.toggleLeft}>
            <View
              style={[
                styles.onlineDot,
                {backgroundColor: isOnline ? '#4CAF50' : '#FF6B6B'},
              ]}
            />
            <CustomText isBold style={[styles.toggleText, {color: theme.text}]}>
              {isOnline ? 'You are Online' : 'You are Offline'}
            </CustomText>
          </View>
          <Switch
            value={isOnline}
            onValueChange={setIsOnline}
            trackColor={{false: theme.border, true: theme.primary}}
            thumbColor={theme.white}
          />
        </View>

        <View style={styles.section}>
          <CustomText isBold style={[styles.sectionTitle, {color: theme.text}]}>
            Personal Information
          </CustomText>

          <TextInputWithTitle
            title="Full Name"
            placeholder="Enter your full name"
            value={formData.fullName}
            setText={text => updateField('fullName', text)}
            viewHeight={0.075}
            viewWidth={0.93}
            inputWidth={0.93}
            fontSize={SIZES.h12}
            borderRadius={10}
            backgroundColor={theme.card}
            marginTop={SIZES.h10}
            placeholderColor={theme.mediumGray}
            borderColor={theme.primary}
            inputStyle={{
              borderBottomWidth: 2,
              borderBottomColor: theme.border,
            }}
            titleStyle={{color: theme.text}}
          />

          <TextInputWithTitle
            title="Email Address"
            placeholder="Enter your email"
            value={formData.email}
            setText={text => updateField('email', text)}
            viewHeight={0.075}
            viewWidth={0.93}
            inputWidth={0.93}
            fontSize={SIZES.h12}
            borderRadius={10}
            backgroundColor={theme.card}
            marginTop={SIZES.h10}
            placeholderColor={theme.mediumGray}
            borderColor={theme.primary}
            inputStyle={{
              borderBottomWidth: 2,
              borderBottomColor: theme.border,
            }}
            titleStyle={{color: theme.text}}
            keyboardType="email-address"
          />

          <TextInputWithTitle
            title="Phone Number"
            placeholder="Enter your phone number"
            value={formData.phone}
            setText={text => updateField('phone', text)}
            viewHeight={0.075}
            viewWidth={0.93}
            inputWidth={0.93}
            fontSize={SIZES.h12}
            borderRadius={10}
            backgroundColor={theme.card}
            marginTop={SIZES.h10}
            placeholderColor={theme.mediumGray}
            borderColor={theme.primary}
            inputStyle={{
              borderBottomWidth: 2,
              borderBottomColor: theme.border,
            }}
            titleStyle={{color: theme.text}}
            keyboardType="phone-pad"
          />
        </View>

        <View
          style={[
            styles.section,
            {
              borderRadius: moderateScale(10, 0.6),
            },
          ]}>
          <CustomText isBold style={[styles.sectionTitle, {color: theme.text}]}>
            Driver License Information
          </CustomText>

          <View style={styles.rowInputs}>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="License Number"
                placeholder="License #"
                value={formData.licenseNumber}
                setText={text => updateField('licenseNumber', text)}
                viewHeight={0.075}
                viewWidth={0.43}
                inputWidth={0.4}
                fontSize={SIZES.h12}
                borderRadius={10}
                backgroundColor={theme.card}
                marginTop={SIZES.h10}
                placeholderColor={theme.mediumGray}
                borderColor={theme.primary}
                inputStyle={{
                  borderBottomWidth: 2,
                  borderBottomColor: theme.border,
                }}
                titleStyle={{color: theme.text}}
              />
            </View>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="Expiry Date"
                placeholder="YYYY-MM-DD"
                value={formData.licenseExpiry}
                setText={text => updateField('licenseExpiry', text)}
                viewHeight={0.075}
                viewWidth={0.43}
                inputWidth={0.4}
                fontSize={SIZES.h12}
                borderRadius={10}
                backgroundColor={theme.card}
                marginTop={SIZES.h10}
                placeholderColor={theme.mediumGray}
                borderColor={theme.primary}
                inputStyle={{
                  borderBottomWidth: 2,
                  borderBottomColor: theme.border,
                }}
                titleStyle={{color: theme.text}}
              />
            </View>
          </View>

          <TextInputWithTitle
            title="Insurance Provider"
            placeholder="Insurance company"
            value={formData.insuranceProvider}
            setText={text => updateField('insuranceProvider', text)}
            viewHeight={0.075}
            viewWidth={0.92}
            inputWidth={0.92}
            fontSize={SIZES.h12}
            borderRadius={10}
            backgroundColor={theme.card}
            marginTop={SIZES.h10}
            placeholderColor={theme.mediumGray}
            borderColor={theme.primary}
            inputStyle={{
              borderBottomWidth: 2,
              borderBottomColor: theme.border,
            }}
            titleStyle={{color: theme.text}}
          />

          <TextInputWithTitle
            title="Policy Number"
            placeholder="Insurance policy #"
            value={formData.insurancePolicy}
            setText={text => updateField('insurancePolicy', text)}
            viewHeight={0.075}
            viewWidth={0.92}
            inputWidth={0.92}
            fontSize={SIZES.h12}
            borderRadius={10}
            backgroundColor={theme.card}
            marginTop={SIZES.h10}
            placeholderColor={theme.mediumGray}
            borderColor={theme.primary}
            inputStyle={{
              borderBottomWidth: 2,
              borderBottomColor: theme.border,
            }}
            titleStyle={{color: theme.text}}
          />
        </View>

        <View style={styles.section}>
          <CustomText isBold style={[styles.sectionTitle, {color: theme.text}]}>
            Vehicle Information
          </CustomText>

          <View style={styles.vehicleImageSection}>
            <CustomText style={[styles.vehicleLabel, {color: theme.darkGray}]}>
              Vehicle Photo
            </CustomText>
            <TouchableOpacity
              style={styles.vehicleImageContainer}
              onPress={() => handleImagePick(setVehicleImage)}>
              <CustomImage source={vehicleImage} style={styles.vehicleImage} />
              <View
                style={[
                  styles.vehicleEditOverlay,
                  {backgroundColor: theme.primary + '80'},
                ]}>
                <Icon
                  as={MaterialIcons}
                  name="camera-alt"
                  size={moderateScale(24, 0.6)}
                  color={theme.white}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowInputs}>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="Make"
                placeholder="e.g., Toyota"
                value={formData.vehicleMake}
                setText={text => updateField('vehicleMake', text)}
                viewHeight={0.075}
                viewWidth={0.42}
                inputWidth={0.42}
                fontSize={SIZES.h12}
                borderRadius={10}
                backgroundColor={theme.card}
                marginTop={SIZES.h10}
                placeholderColor={theme.mediumGray}
                borderColor={theme.primary}
                inputStyle={{
                  borderBottomWidth: 2,
                  borderBottomColor: theme.border,
                }}
                titleStyle={{color: theme.text}}
              />
            </View>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="Model"
                placeholder="e.g., Camry"
                value={formData.vehicleModel}
                setText={text => updateField('vehicleModel', text)}
                viewHeight={0.075}
                viewWidth={0.42}
                inputWidth={0.42}
                fontSize={SIZES.h12}
                borderRadius={10}
                backgroundColor={theme.card}
                marginTop={SIZES.h10}
                placeholderColor={theme.mediumGray}
                borderColor={theme.primary}
                inputStyle={{
                  borderBottomWidth: 2,
                  borderBottomColor: theme.border,
                }}
                titleStyle={{color: theme.text}}
              />
            </View>
          </View>

          <View style={styles.rowInputs}>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="Year"
                placeholder="2022"
                value={formData.vehicleYear}
                setText={text => updateField('vehicleYear', text)}
                viewHeight={0.075}
                viewWidth={0.42}
                inputWidth={0.42}
                fontSize={SIZES.h12}
                borderRadius={10}
                backgroundColor={theme.card}
                marginTop={SIZES.h10}
                placeholderColor={theme.mediumGray}
                borderColor={theme.primary}
                inputStyle={{
                  borderBottomWidth: 2,
                  borderBottomColor: theme.border,
                }}
                titleStyle={{color: theme.text}}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="Color"
                placeholder="Silver"
                value={formData.vehicleColor}
                setText={text => updateField('vehicleColor', text)}
                viewHeight={0.075}
                viewWidth={0.42}
                inputWidth={0.42}
                fontSize={SIZES.h12}
                borderRadius={10}
                backgroundColor={theme.card}
                marginTop={SIZES.h10}
                placeholderColor={theme.mediumGray}
                borderColor={theme.primary}
                inputStyle={{
                  borderBottomWidth: 2,
                  borderBottomColor: theme.border,
                }}
                titleStyle={{color: theme.text}}
              />
            </View>
          </View>

          <TextInputWithTitle
            title="License Plate"
            placeholder="ABC-1234"
            value={formData.vehiclePlate}
            setText={text => updateField('vehiclePlate', text)}
            viewHeight={0.075}
            viewWidth={0.92}
            inputWidth={0.92}
            fontSize={SIZES.h12}
            borderRadius={10}
            backgroundColor={theme.card}
            marginTop={SIZES.h10}
            placeholderColor={theme.mediumGray}
            borderColor={theme.primary}
            inputStyle={{
              borderBottomWidth: 2,
              borderBottomColor: theme.border,
            }}
            titleStyle={{color: theme.text}}
          />
        </View>

        <CustomButton
          text="Update Profile"
          onPress={() => console.log('Rider profile updated:', formData)}
          textColor={theme.white}
          width={SIZES.windowWidth * 0.9}
          height={SIZES.windowHeight * 0.07}
          bgColor={theme.button_gredient || ['#46cc00', '#339500']}
          borderRadius={SIZES.h16}
          isBold
          isGradient
          elevation
          btn_style={{
            ...FONTS.Regular14,
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: moderateScale(20, 0.6),
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth * 0.92,
    padding: moderateScale(15, 0.6),
    borderRadius: moderateScale(10, 0.6),
    marginTop: SIZES.base,
    marginBottom: SIZES.padding,
    alignSelf: 'center',
  },
  toggleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineDot: {
    width: moderateScale(10, 0.6),
    height: moderateScale(10, 0.6),
    borderRadius: moderateScale(5, 0.6),
    marginRight: moderateScale(8, 0.6),
  },
  toggleText: {
    ...FONTS.Medium14,
  },
  profileImageSection: {
    alignItems: 'center',
    marginBottom: SIZES.padding,
    marginTop: moderateScale(15, 0.7),
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: moderateScale(100, 0.6),
    height: moderateScale(100, 0.6),
    borderRadius: moderateScale(50, 0.6),
    borderWidth: 2,
  },
  editImageBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: moderateScale(30, 0.6),
    height: moderateScale(30, 0.6),
    borderRadius: moderateScale(15, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHint: {
    ...FONTS.Regular11,
    marginTop: moderateScale(5, 0.6),
  },
  section: {
    width: windowWidth * 0.93,
    marginBottom: SIZES.padding,
    alignSelf: 'center',
  },
  sectionTitle: {
    ...FONTS.Bold18,
    marginBottom: SIZES.base,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfInput: {
    width: '48%',
  },
  vehicleImageSection: {
    marginBottom: SIZES.base,
  },
  vehicleLabel: {
    ...FONTS.Regular12,
    marginBottom: moderateScale(5, 0.6),
  },
  vehicleImageContainer: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.2,
    borderRadius: moderateScale(8, 0.6),
    overflow: 'hidden',
    position: 'relative',
  },
  vehicleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  vehicleEditOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  docItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(12, 0.6),
    borderRadius: moderateScale(8, 0.6),
    marginBottom: moderateScale(8, 0.6),
  },
  docLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  docInfo: {
    marginLeft: moderateScale(10, 0.6),
  },
  docName: {
    ...FONTS.Medium13,
  },
  docStatus: {
    ...FONTS.Regular11,
  },
});

export default RiderEditProfile;
