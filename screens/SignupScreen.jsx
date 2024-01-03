import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Color, FontSize, Padding, Border, FontFamily } from '../assets/themes/theme';
import { useNavigation } from '@react-navigation/native';

import icon from "../assets/images/icon.png";
import googleIcon from "../assets/images/googleicon.png";
import appleIcon from "../assets/images/appleicon.png";
import facebookIcon from "../assets/images/facebookicon.png";

function SignupScreen() {

    const navigation = useNavigation();

    const loginpressed = () => {
      console.log('Login button pressed');
      navigation.navigate('Login');
    };
    const TermsConditionsPressed = () => {
      console.log('TermsConditionsPressed');
    };
    const PrivacyPolicyPressed = () => {
      console.log('PrivacyPolicyPressed');
    };
    const SignupPressed = () => {
      console.log('SignupPressed');
    };
    const GoogleLoginPressed = () => {
      console.log('GoogleLoginPressed');
    };
    const FaceBookLoginPressed = () => {
      console.log('FaceBookLoginPressed');
    };
    const AppleLoginPressed = () => {
      console.log('AppleLoginPressed');
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={icon} style={styles.icon} resizeMode="cover" />
            </View>
            <View>
                <Text style={styles.title}>Register</Text>
            </View>
            <Text style={styles.subtitle}>Create your new account</Text>

            <TextInput
                placeholder="Enter Name"
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
            />
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
                placeholder="Enter Phone"
                style={styles.input}
                value={phone}
                onChangeText={(text) => setPhone(text)}
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

            <View style={styles.termsContainer}>
                <Text style={styles.termsText}>By signing up you agree to our </Text>
                <TouchableOpacity onPress={TermsConditionsPressed}>
                    <Text style={styles.termsLink}>Terms & Conditions </Text>
                </TouchableOpacity>
                <Text>and </Text>
                <TouchableOpacity onPress={PrivacyPolicyPressed}>
                    <Text style={styles.termsLink}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>



            <TouchableOpacity style={styles.signupButton} onPress={SignupPressed}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.orContainer}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.orLine} />
            </View>

            <View style={styles.socialIconsContainer}>
                <TouchableOpacity style={styles.socialIcon} onPress={GoogleLoginPressed}>
                    <Image source={googleIcon} style={styles.socialIconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon} onPress={FaceBookLoginPressed}>
                    <Image source={facebookIcon} style={styles.socialIconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon} onPress={AppleLoginPressed}>
                    <Image source={appleIcon} style={styles.socialIconImage} />
                </TouchableOpacity>
            </View>

            <View style={styles.createAccountContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={loginpressed}>
                    <Text style={styles.createAccountText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.colorWhite,
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
    termsContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: Padding.p_3xs,
        paddingHorizontal: Padding.p_5xl, 
        flexWrap: 'wrap', 
    },
    termsText: {
        marginRight: Padding.p_1xl, 
    },
    termsLink: {
        color: Color.colorMediumblue_100,
        fontWeight: 'bold',
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
        color: Color.colorMediumblue_100,
    },
});


export default SignupScreen;
