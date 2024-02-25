import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import Profile from '../components/users/Profile';
import { BackHandler } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigation.replace('Login');
    }
  }, [currentUser, navigation]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Menu');
        return true; // Prevent the default behavior (going back to the previous screen)
      };

      // Subscribe to the hardware back button event
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      // Unsubscribe when the component is unfocused or unmounted
      return () => backHandler.remove();
    }, [navigation])
  );

  return (
    <React.Fragment>
      {currentUser ? <Profile /> : null}
    </React.Fragment>
  );
};

export default ProfileScreen;
