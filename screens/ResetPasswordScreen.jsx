import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Color, FontSize, Padding, Border, FontFamily } from '../assets/themes/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

import icon from "../assets/images/icon.png";

function ResetPasswordScreen({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Implement your password reset logic here
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    // Add logic for updating the password
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} resizeMode="cover" />
      </View>
      <View>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <Text style={styles.subtitle}>Enter your new password</Text>

      <TextInput
        placeholder="New Password"
        style={[
          styles.input,
          {
            borderColor: Color.colorMediumblue_200,
          },
        ]}
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        secureTextEntry
      />

      <TextInput
        placeholder="Confirm Password"
        style={[
          styles.input,
          {
            borderColor: Color.colorMediumblue_200,
          },
        ]}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>

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
  backButton: {
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
    color: Color.colorWhite,
    fontSize: 24,
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
  resetButton: {
    backgroundColor: Color.colorMediumblue_100,
    borderRadius: Border.br_3xs,
    width: '80%',
    height: 45,
    marginVertical: Padding.p_3xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_lg,
    fontWeight: '700',
  },
});

export default ResetPasswordScreen;
