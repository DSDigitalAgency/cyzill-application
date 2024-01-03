import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Color, FontSize, Padding, Border, FontFamily } from '../assets/themes/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import icon from "../assets/images/icon.png";

function ForgotPasswordScreen() {

  const navigation = useNavigation();

  const backiconpressed = () => {
    navigation.goBack();
  };
  const createaccountpressed = () => {
    navigation.navigate('Signup');
  };
  const resetpressed = () => {
    console.log('Code Send Pressed');
  };

  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backIconContainer} onPress={backiconpressed}>
        <Icon name="arrow-back" size={24} color={Color.colorBlack} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} resizeMode="cover" />
      </View>
      <View>
        <Text style={styles.title}>Forgot your password?</Text>
      </View>
      <Text style={styles.subtitle}>Enter email address</Text>

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
      <TouchableOpacity style={styles.signupButton} onPress={resetpressed}>
        <Text style={styles.signupButtonText}>Send Code</Text>
      </TouchableOpacity>

      <View style={styles.createAccountContainer}>
        <Text>Don’t have an Account? </Text>
        <TouchableOpacity onPress={createaccountpressed}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorWhite,
  },
  backIconContainer: {
    position: 'absolute',
    top: 50,
    left: 25,
    padding: Padding.p_3xs,
  borderRadius: 50,
  backgroundColor: Color.colorMediumblue_300,
  justifyContent: 'center',
  alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    color: Color.colorWhitesmoke,
  },
  iconContainer: {
    alignItems: 'center',
    paddingTop: Padding.p_base_7,
  },
  icon: {
    width: 197,
    height: 138,
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
  signupButton: {
    backgroundColor: Color.colorMediumblue_100,
    borderRadius: Border.br_3xs,
    width: '80%',
    height: 45,
    marginVertical: Padding.p_3xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_lg,
    fontWeight: '700',
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: Padding.p_base_7,
  },
  createAccountText: {
    fontWeight: 'bold',
    color: Color.colorMediumblue_100,
  },
});

export default ForgotPasswordScreen;
