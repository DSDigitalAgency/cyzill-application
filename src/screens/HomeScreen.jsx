import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import Hero from '../components/common/Hero';
import Header from '../components/common/Header';
import PropertyCard from '../components/property/PropertyCard';
import BASE_URL from '../../config';
import { Color } from '../../assets/themes/theme';

const HomeScreen = ({ navigation }) => {
  const apiUrl = `${BASE_URL}/api/property/properties`;
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProperties = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const responseData = await response.json();

        if (!responseData.hasOwnProperty('properties')) {
          throw new Error(`'properties' key not found in API response`);
        }

        if (isMounted) {
          const propertiesData = responseData.properties;
          const properties = propertiesData.filter((property) => property);
          setPropertyData(properties);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setIsLoading(false);
          setError(`Error fetching properties. ${error.message}`);
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchProperties();

    return () => {
      isMounted = false;
    };
  }, []);

  const renderItem = ({ item }) => (
    <PropertyCard key={item.id} property={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Hero />
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Properties for Sale</Text>
        <FlatList
          style={styles.flatList}
          data={propertyData}
          keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
          renderItem={renderItem}
          ListEmptyComponent={() => (isLoading ? <ActivityIndicator size="large" color="#2893FE" /> : null)}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242f40',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
    margin: 16,
  },
  flatList: {
    flex: 1,
  },
});

export default HomeScreen;
