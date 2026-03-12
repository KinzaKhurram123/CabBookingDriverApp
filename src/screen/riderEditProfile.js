// screens/rider/RiderEditProfile.js
import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {moderateScale} from 'react-native-size-matters';
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
import {useDispatch, useSelector} from 'react-redux';
import {onPressEditProfile} from '../apisConfig/auth';

const RiderEditProfile = () => {
  const {theme} = useTheme();
  const {token} = useSelector(state => state.authReducer);
  const userData = useSelector(state => state.commonReducer.userData);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(Images.driver1);
  const [vehicleImage, setVehicleImage] = useState(Images.carimage);
  const [isOnline, setIsOnline] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [vehicleTypeItems, setVehicleTypeItems] = useState([
    {label: 'Sedan', value: 'sedan'},
    {label: 'Hatchback', value: 'hatchback'},
    {label: 'SUV', value: 'suv'},
    {label: 'Minivan', value: 'minivan'},
  ]);
  console.log(userData, 'userData');
  const [formData, setFormData] = useState({
    name: userData?.name,
    email: userData?.email,
    phoneNumber: userData?.phone,
    vehicleType: 'sedan',
    vehicleNumber: 'ABC-1234',
    licenseNumber: 'DL-12345678',
    make: 'Toyota',
    model: 'Camry',
    year: '2022',
    color: 'Silver',
    licensePlate: 'ABC-1234',
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
            value={formData.name}
            setText={text => updateField('name', text)}
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
            value={formData.phoneNumber}
            setText={text => updateField('phoneNumber', text)}
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

        {/* Driver License Information */}
        <View style={styles.section}>
          <CustomText isBold style={[styles.sectionTitle, {color: theme.text}]}>
            Driver License Information
          </CustomText>

          <View style={styles.rowInputs}>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="License Number" // ✅ Maps to licenseNumber
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
                title="Vehicle Number" // ✅ Maps to vehicleNumber
                placeholder="Vehicle #"
                value={formData.vehicleNumber}
                setText={text => updateField('vehicleNumber', text)}
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
        </View>

        <View style={styles.section}>
          <CustomText isBold style={[styles.sectionTitle, {color: theme.text}]}>
            Vehicle Information
          </CustomText>

          <View style={{marginBottom: SIZES.base, zIndex: 1000}}>
            <CustomText style={[styles.vehicleLabel, {color: theme.darkGray}]}>
              Vehicle Type *
            </CustomText>
          </View>

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
                value={formData.make}
                setText={text => updateField('make', text)}
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
                value={formData.model}
                setText={text => updateField('model', text)}
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
                value={formData.year?.toString()}
                setText={text => updateField('year', text)}
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
                value={formData.color}
                setText={text => updateField('color', text)}
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
            value={formData.licensePlate}
            setText={text => updateField('licensePlate', text)}
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
          text={loading ? 'Updating...' : 'Update Profile'}
          onPress={() =>
            onPressEditProfile({setLoading, formData, dispatch, token})
          }
          disabled={loading}
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

// Styles remain the same as your original...
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
  section: {
    width: windowWidth * 0.93,
    marginBottom: SIZES.padding,
    alignSelf: 'center',
    zIndex: 1,
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
});

export default RiderEditProfile;
