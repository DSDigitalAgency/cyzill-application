import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomNav from '../components/BottomNav';

const MapsScreen = () => {
  // Coordinates for the center of India
  const indiaCoordinates = {
    latitude: 20.5937,
    longitude: 78.9629,
    latitudeDelta: 15,
    longitudeDelta: 15,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={indiaCoordinates}>
        {/* You can add markers or other map elements here */}
      </MapView>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapsScreen;
