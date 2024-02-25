import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Maps from '../components/property/Map';

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Maps navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
