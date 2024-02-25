import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BASE_URL from '../../../config';
import PropertyCard from './PropertyCard';
import { UserLocationContext } from '../context/UserLocationContext';

const CustomMarker = ({ coordinate, title, price, saleOrRent, onPress, formatPrice }) => {
  const markerStyle = {
    backgroundColor: saleOrRent === 'sell' ? 'purple' : 'red',
    padding: 4,
    borderRadius: 7,
  };

  return (
    <Marker
      coordinate={coordinate}
      title={title}
      onPress={onPress}
    >
      <View style={markerStyle}>
        <Text style={{ color: 'white' }}>{formatPrice(price)}</Text>
      </View>
    </Marker>
  );
};

const Maps = ({ navigation }) => {
  const apiUrl = `${BASE_URL}/api/property/properties`;
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { location, setLocation } = useContext(UserLocationContext);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }

      const responseData = await response.json();

      if (!responseData.properties || !Array.isArray(responseData.properties)) {
        throw new Error(`Invalid or missing 'properties' key in API response`);
      }

      const properties = responseData.properties.filter((property) => property);
      setPropertyData(properties);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹ ${(price / 10000000).toFixed(1)} cr`;
    } else if (price >= 100000) {
      return `₹ ${(price / 100000).toFixed(1)} lac`;
    } else {
      return `₹ ${(price / 1000).toFixed(1)} k`;
    }
  };

  return location?.latitude && (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <MapView style={{ flex: 1 }} region={{ latitude: location?.latitude, longitude: location?.longitude, latitudeDelta: 0.0422, longitudeDelta: 0.0421 }}>
          {propertyData.map(({ _id, location, price, forDetails }) => (
            <CustomMarker
              key={_id}
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              title={_id}
              price={price}
              saleOrRent={forDetails}
              onPress={() => navigation.navigate('PropertyDetails', { propertyId: _id })}
              formatPrice={formatPrice}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

export default Maps;
