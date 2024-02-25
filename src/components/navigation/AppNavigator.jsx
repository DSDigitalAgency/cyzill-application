import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import MapScreen from '../../screens/MapScreen';
import MenuScreen from '../../screens/MenuScreen';
import PropertyDetailsScreen from '../../screens/PropertyDetailsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import AboutUsScreen from '../../screens/AboutUsScreen';
import FairUseScreen from '../../screens/FairUseScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import TremsofServicesScreen from '../../screens/TermsofServicesScreen';
import FaqScreen from '../../screens/FqaScreen';
import ContactUsScreen from '../../screens/ContactUsScreen';
import SavedScreen from '../../screens/SavedScreen';

import { Color } from '../../../assets/themes/theme';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.cbgcolor,
        },
        headerTintColor: Color.white, 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='PropertyDetails' component={PropertyDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="About Us" component={AboutUsScreen} />
      <Stack.Screen name="Fair Use" component={FairUseScreen} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="Terms of Services" component={TremsofServicesScreen} />
      <Stack.Screen name="FAQ's" component={FaqScreen} />
      <Stack.Screen name='Contact Us' component={ContactUsScreen} />
      <Stack.Screen name='Saved' component={SavedScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
