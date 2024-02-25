import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../../assets/themes/theme';

import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import MapScreen from '../../screens/MapScreen';
import MenuScreen from '../../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Color.lightblue,
        tabBarInactiveTintColor: Color.lightgray,
        tabBarStyle: { display: 'flex', backgroundColor: Color.cbgcolor, },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Map') {
            iconName = 'map';
          } else if (route.name === 'Menu') {
            iconName = 'bars';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
