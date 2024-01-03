import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Color, FontSize, Padding, Border, FontFamily } from '../assets/themes/theme';
import { useNavigation } from '@react-navigation/native';

import icon from "../assets/images/icon.png";
import googleIcon from "../assets/images/googleicon.png";
import appleIcon from "../assets/images/appleicon.png";
import facebookIcon from "../assets/images/facebookicon.png";

const LoginScreen = () => {

  const navigation = useNavigation();

  const forgotpasswordpress = () => {
    console.log('Forgot Password button pressed');
    navigation.navigate('ForgotPassword');
  };
  const createaccountpressed = () => {
    console.log('createaccountpressed button pressed');
    navigation.navigate('Signup');
  };
  const loginpressed = () => {
    console.log('login button pressed');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} resizeMode="cover" />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Login to your account</Text>
      <TextInput
        placeholder="Enter Email"
        style={[
          styles.input,
          {
            borderColor: isEmailFocused ? Color.colorMediumblue_200 : Color.colorGray_200,
          },
        ]}
        value={email}
        onChangeText={(text) => setEmail(text)}
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
      />

      <TextInput
        placeholder='Enter Password'
        secureTextEntry
        style={[
          styles.input,
          {
            borderColor: isPasswordFocused ? Color.colorMediumblue_200 : Color.colorGray_200,
          },
        ]}
        value={password}
        onChangeText={(text) => setPassword(text)}
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
      />
      <TouchableOpacity style={styles.forgotPassword} onPress={forgotpasswordpress}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={loginpressed}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIcon} onPress={() => console.log('Google Login Pressed')}>
          <Image source={googleIcon} style={styles.socialIconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon} onPress={() => console.log('FaceBook Login Pressed')}>
          <Image source={facebookIcon} style={styles.socialIconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon} onPress={() => console.log('Apple Login Pressed')}>
          <Image source={appleIcon} style={styles.socialIconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.createAccountContainer}>
  <Text>Don't have an Account? </Text>
  <TouchableOpacity onPress={createaccountpressed}>
    <Text style={styles.createAccountText}>Create Account</Text>
  </TouchableOpacity>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorWhite,
  },
  icon: {
    top: 75,
    width: 197,
    height: 138,
    position: 'absolute',
    left: '50%', // Set left to 50% to horizontally center
    marginLeft: -98.5, // Adjust marginLeft to half of the icon's width
  },
  title: {
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_11xl,
    marginBottom: Padding.p_base_7,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: FontSize.size_lg,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    padding: Padding.p_5xs,
    marginBottom: Padding.p_3xs,
    width: '80%',
    height: 45,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.regularNoneMedium_size,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: Padding.p_3xs,
    marginEnd: '10%',
  },
  forgotPasswordText: {
    color: Color.colorMediumblue_100, // Set the desired text color
  },
  
  loginButton: {
    backgroundColor: Color.colorMediumblue_100,
    borderRadius: Border.br_3xs,
    width: '80%',
    height: 45,
    marginVertical: Padding.p_3xs,
    justifyContent: 'center',
    alignItems: 'center',

  },
  loginButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_lg,
    fontWeight: '700',
  },  
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Padding.p_3xs,
  },
  orText: {
    marginRight: Padding.p_base_7,
    marginLeft: Padding.p_base_7,
    fontWeight: '700',
    fontSize: FontSize.size_xl,
  },
  orLine: {
    flex: 1,
    height: 0.8,
    backgroundColor: Color.colorGray_200,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: Padding.p_3xs,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  socialIconImage: {
    width: '100%',
    height: '100%',
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: Padding.p_base_7,
  },
  
  createAccountText: {
    fontWeight: 'bold',
  },
});

export default LoginScreen;
