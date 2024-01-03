import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import BottomNav from "../components/BottomNav";

const MenuScreen = () => {

  const navigation = useNavigation();

  const handleLoginPress = () => {
    console.log('Login button pressed');
    navigation.navigate('Login');
  };
  const PersonalDetailsPress = () => {
    console.log('Personal Details pressed');
  };
  const SavedPress = () => {
    console.log('Saved pressed');
  };
  const SettingsPress = () => {
    console.log('Settings pressed');
  };
  const PaymentDetailsPress = () => {
    console.log('Payment Details pressed');
  };
  const FaqPress = () => {
    console.log('FAQ pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <MaterialIcons name='person' size={45} color="white" style={styles.iconprofile} />
        <TouchableOpacity onPress={handleLoginPress} style={styles.menuItem}>
          <Text style={styles.iconText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={PersonalDetailsPress} style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <MaterialIcons name='person' size={24} color="#777" />
            <Text style={styles.menuItemText}>Personal details</Text>
            <MaterialIcons name='arrow-right' size={24} color="#777" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={SavedPress} style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <MaterialIcons name='favorite' size={24} color="#777" />
            <Text style={styles.menuItemText}>Saved</Text>
            <MaterialIcons name='arrow-right' size={24} color="#777" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={SettingsPress} style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <MaterialIcons name='settings' size={24} color="#777" />
            <Text style={styles.menuItemText}>Settings</Text>
            <MaterialIcons name='arrow-right' size={24} color="#777" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={PaymentDetailsPress} style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <MaterialIcons name='credit-card' size={24} color="#777" />
            <Text style={styles.menuItemText}>Payment details</Text>
            <MaterialIcons name='arrow-right' size={24} color="#777" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={FaqPress} style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <MaterialIcons name='question-answer' size={24} color="#777" />
            <Text style={styles.menuItemText}>FAQ</Text>
            <MaterialIcons name='arrow-right' size={24} color="#777" />
          </View>
        </TouchableOpacity>
      </View>
      <BottomNav />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  iconsection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconprofile: {
    backgroundColor: "#0F172A",
    borderRadius: 38,
    padding: 25,
  },
  iconText: {
    fontSize: 25,
    color: "white",
    backgroundColor: "#164CF7",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    shadowColor: "#0F172A",
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  section: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginVertical: 5,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default MenuScreen
