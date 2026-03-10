// screens/user/EditProfile.js
import {Icon} from 'native-base';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {moderateScale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../component/customButton';
import CustomImage from '../component/customImage';
import CustomText from '../component/customText';
import TextInputWithTitle from '../component/textInputWithTitle';
import {SIZES, FONTS} from '../constant/sizes';
import {useTheme} from '../context/ThemeContext';
import {windowWidth} from '../utility/utils';
import Header from '../component/Header';
import Images from '../assests/Appimages';

const UserEditProfile = () => {
  const {theme} = useTheme();
  const [profileImage, setProfileImage] = useState(Images.user_image2);
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 234 567 8900',
    address: '123 Main Street, New York, NY 10001',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    dateOfBirth: '1990-01-15',
    emergencyContact: '+1 987 654 3210',
  });

  const handleImagePick = () => {
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
        setProfileImage(source);
      }
    });
  };

  const updateField = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Header title="Edit Profile" headerColor={theme.background} showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Profile Image Section */}
        <View style={styles.profileImageSection}>
          <View style={styles.imageContainer}>
            <CustomImage source={profileImage} style={styles.profileImage} />
            <TouchableOpacity
              style={[styles.editImageBtn, {backgroundColor: theme.primary}]}
              onPress={handleImagePick}>
              <Icon
                as={MaterialIcons}
                name="edit"
                size={moderateScale(16, 0.6)}
                color={theme.white}
              />
            </TouchableOpacity>
          </View>
          <CustomText style={[styles.imageHint, {color: theme.mediumGray}]}>
            Tap on camera icon to change photo
          </CustomText>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <CustomText isBold style={[styles.sectionTitle, {color: theme.text}]}>
            Personal Information
          </CustomText>

          <TextInputWithTitle
            title="Full Name"
            placeholder="Enter your full name"
            value={formData.fullName}
            setText={text => updateField('fullName', text)}
            viewWidth={0.95}
            inputWidth={0.9}
            backgroundColor={theme.card}
            borderColor={theme.border}
            placeholderColor={theme.mediumGray}
            titleStyle={{color: theme.darkGray}}
          />

          <TextInputWithTitle
            title="Email Address"
            placeholder="Enter your email"
            value={formData.email}
            setText={text => updateField('email', text)}
            viewWidth={0.95}
            inputWidth={0.9}
            backgroundColor={theme.card}
            borderColor={theme.border}
            placeholderColor={theme.mediumGray}
            titleStyle={{color: theme.darkGray}}
            keyboardType="email-address"
          />

          <TextInputWithTitle
            title="Phone Number"
            placeholder="Enter your phone number"
            value={formData.phone}
            setText={text => updateField('phone', text)}
            viewWidth={0.95}
            inputWidth={0.9}
            backgroundColor={theme.card}
            borderColor={theme.border}
            placeholderColor={theme.mediumGray}
            titleStyle={{color: theme.darkGray}}
            keyboardType="phone-pad"
          />

          <TextInputWithTitle
            title="Date of Birth"
            placeholder="YYYY-MM-DD"
            value={formData.dateOfBirth}
            setText={text => updateField('dateOfBirth', text)}
            viewWidth={0.95}
            inputWidth={0.9}
            backgroundColor={theme.card}
            borderColor={theme.border}
            placeholderColor={theme.mediumGray}
            titleStyle={{color: theme.darkGray}}
          />
        </View>

        {/* Address Information */}
        <View style={styles.section}>
          <CustomText isBold style={[styles.sectionTitle, {color: theme.text}]}>
            Address Information
          </CustomText>

          <TextInputWithTitle
            title="Street Address"
            placeholder="Enter your street address"
            value={formData.address}
            setText={text => updateField('address', text)}
            viewWidth={0.95}
            inputWidth={0.9}
            backgroundColor={theme.card}
            borderColor={theme.border}
            placeholderColor={theme.mediumGray}
            titleStyle={{color: theme.darkGray}}
          />

          <View style={styles.rowInputs}>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="City"
                placeholder="City"
                value={formData.city}
                setText={text => updateField('city', text)}
                viewWidth={0.47}
                inputWidth={0.9}
                backgroundColor={theme.card}
                borderColor={theme.border}
                placeholderColor={theme.mediumGray}
                titleStyle={{color: theme.darkGray}}
              />
            </View>
            <View style={styles.halfInput}>
              <TextInputWithTitle
                title="State"
                placeholder="State"
                value={formData.state}
                setText={text => updateField('state', text)}
                viewWidth={0.47}
                inputWidth={0.9}
                backgroundColor={theme.card}
                borderColor={theme.border}
                placeholderColor={theme.mediumGray}
                titleStyle={{color: theme.darkGray}}
              />
            </View>
          </View>

          <TextInputWithTitle
            title="Zip Code"
            placeholder="Enter zip code"
            value={formData.zipCode}
            setText={text => updateField('zipCode', text)}
            viewWidth={0.95}
            inputWidth={0.9}
            backgroundColor={theme.card}
            borderColor={theme.border}
            placeholderColor={theme.mediumGray}
            titleStyle={{color: theme.darkGray}}
            keyboardType="numeric"
          />
        </View>

        {/* Emergency Contact */}
        <View style={styles.section}>
          <CustomText isBold style={[styles.sectionTitle, {color: theme.text}]}>
            Emergency Contact
          </CustomText>

          <TextInputWithTitle
            title="Emergency Phone"
            placeholder="Enter emergency contact"
            value={formData.emergencyContact}
            setText={text => updateField('emergencyContact', text)}
            viewWidth={0.95}
            inputWidth={0.9}
            backgroundColor={theme.card}
            borderColor={theme.border}
            placeholderColor={theme.mediumGray}
            titleStyle={{color: theme.darkGray}}
            keyboardType="phone-pad"
          />
        </View>

        {/* Save Button */}
        <CustomButton
          text="Save Changes"
          onPress={() => console.log('Profile updated:', formData)}
          bgColor={theme.button_gredient || ['#46cc00', '#339500']}
          textColor={theme.white}
          width={windowWidth * 0.9}
          height={moderateScale(50, 0.6)}
          borderRadius={moderateScale(10, 0.6)}
          isGradient
          isBold
          marginTop={SIZES.padding}
          marginBottom={SIZES.padding * 2}
        />
      </ScrollView>
    </View>
  );
};

export default UserEditProfile;
