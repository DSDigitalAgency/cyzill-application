import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Reverse geocoding
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode && reverseGeocode.length > 0) {
        setAddress(reverseGeocode[0]);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Your Location</Text>
      <Text style={styles.text}>
        {address ? (
          <>
            <MaterialCommunityIcons name="map-marker" size={12} color="black" />
            {' '}
            {address.street || 'N/A'}, {address.city || 'N/A'}, {address.postalCode || 'N/A'}
          </>
        ) : (
          'Loading...'
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginVertical: 20,
    alignItems: 'flex-start', // Align the component to the left
    marginLeft: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left', // Align the text to the left
  },
});

export default CurrentLocation;
