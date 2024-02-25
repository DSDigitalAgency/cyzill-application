import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Login from '../components/auth/Login';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 m-0 p-0">
        <Login navigation={navigation} />
    </SafeAreaView>
  );
};

export default LoginScreen;
