import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Color, FontSize, Padding, Border, FontFamily } from '../assets/themes/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import the 'icon' image
import icon from "../assets/images/icon.png";

function OtpVerificationScreen({ navigation }) {
  const [otp, setOtp] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;

    const handleResendTimer = () => {
      timer = setInterval(() => {
        setCountdown((prevCount) => {
          if (prevCount === 1) {
            clearInterval(timer);
            setResendDisabled(false);
          }
          return prevCount - 1;
        });
      }, 1000);
    };

    if (resendDisabled) {
      handleResendTimer();
    }

    return () => {
      clearInterval(timer);
    };
  }, [resendDisabled]);

  const handleVerifyOtp = () => {
    // Implement your OTP verification logic here
    console.log('OTP Verified');
  };

  const handleResendOtp = () => {
    // Implement logic to resend OTP
    console.log('Resend OTP Pressed');
    setResendDisabled(true);
    setCountdown(30);
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
        <Text style={styles.title}>OTP Verification</Text>
      </View>
      <Text style={styles.subtitle}>Enter the OTP sent to your email</Text>

      <TextInput
        placeholder="Enter OTP"
        style={[
          styles.input,
          {
            borderColor: Color.colorMediumblue_200,
          },
        ]}
        value={otp}
        onChangeText={(text) => setOtp(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={[styles.verifyButton, resendDisabled ? styles.disabledButton : null]}
        onPress={handleVerifyOtp}
        disabled={resendDisabled}
      >
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
      </TouchableOpacity>

      <View style={styles.resendContainer}>
        <Text>Didn't receive the OTP? </Text>
        {resendDisabled ? (
          <Text style={styles.resendLink}>Resend OTP in {countdown} seconds</Text>
        ) : (
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendLink}>Resend OTP</Text>
          </TouchableOpacity>
        )}
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
    verifyButton: {
        backgroundColor: Color.colorMediumblue_100,
        borderRadius: Border.br_3xs,
        width: '80%',
        height: 45,
        marginVertical: Padding.p_3xs,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verifyButtonText: {
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoMedium,
        fontSize: FontSize.size_lg,
        fontWeight: '700',
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: Padding.p_3xs,
    },
    resendLink: {
        color: Color.colorMediumblue_100,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: Color.colorGray_300,
      },
    
});

export default OtpVerificationScreen;
