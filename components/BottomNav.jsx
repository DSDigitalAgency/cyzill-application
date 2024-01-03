import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNav = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => navigateToScreen('Home')}>
        <MaterialIcons
          name="home"
          size={24}
          color={navigation.isFocused('Home') ? '#2893FE' : 'white'}
        />
        <Text style={[styles.tabText, { color: navigation.isFocused('Home') ? '#2893FE' : 'white' }]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigateToScreen('Search')}>
        <MaterialIcons
          name="search"
          size={24}
          color={navigation.isFocused('Search') ? '#2893FE' : 'white'}
        />
        <Text
          style={[styles.tabText, { color: navigation.isFocused('Search') ? '#2893FE' : 'white' }]}
        >
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigateToScreen('Maps')}>
        <MaterialIcons
          name="map"
          size={24}
          color={navigation.isFocused('Maps') ? 'white' : '#2893FE'}
        />
        <Text style={[styles.tabText, { color: navigation.isFocused('Maps') ? 'white' : '#2893FE' }]}>
          Maps
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigateToScreen('Profile')}>
        <MaterialIcons
          name="person"
          size={24}
          color={navigation.isFocused('Profile') ? 'white' : '#2893FE'}
        />
        <Text
          style={[styles.tabText, { color: navigation.isFocused('Profile') ? 'white' : '#2893FE' }]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4F4F4F', // Gray background color
    borderTopWidth: 1,
    height: 60,
    borderTopColor: '#ccc',
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 3,
  },
});

export default BottomNav;
