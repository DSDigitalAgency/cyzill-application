import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux';
import defaultpic from '../../../assets/images/defaultuser.png';

const Header = ({ navigation }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const profilePress = () => {
    if (currentUser) {
      // User is logged in, navigate to the profile screen
      navigation.navigate('Profile');
    } else {
      // User is not logged in, navigate to the login screen
      navigation.navigate('Login');
    }
  };

  return (
    <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Welcome to Cyzill</Text>
      </View>
      <View>
        <TouchableOpacity onPress={profilePress}>
          {currentUser ? (
            // User is logged in, show the user's photo
            <Image source={{ uri: currentUser.photo }} style={{ width: 48, height: 48, borderRadius: 24 }} />
          ) : (
            // User is not logged in, show the default photo
            <Image source={defaultpic} style={{ width: 48, height: 48 }} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
