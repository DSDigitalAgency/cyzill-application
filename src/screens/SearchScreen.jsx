import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, ActivityIndicator, Text } from 'react-native';
import Filters from '../components/common/Filter';
import PropertyCard from '../components/property/PropertyCard';
import BASE_URL from '../../config';
import { Color } from '../../assets/themes/theme';

const SearchScreen = ({ navigation }) => {
  const apiUrl = `${BASE_URL}/api/property/properties`;
  const [searchResults, setSearchResults] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    bathrooms: 'Any',
    bedrooms: 'Any',
    forDetails: 'rent',
    price: 'Any',
    propertyType: '',
    searchTerm: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, [filterCriteria]);

  const fetchProperties = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }
      const responseData = await response.json();

      if (!responseData.hasOwnProperty('properties')) {
        throw new Error(`'properties' key not found in API response`);
      }

      const propertiesData = responseData.properties;

      const filteredProperties = propertiesData.filter((property) => {
        return filterProperties(property, filterCriteria);
      });

      setSearchResults(filteredProperties);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(`Error fetching properties. ${error.message}`);
      console.error('Error fetching data:', error);
    }
  };

  const filterProperties = (property, criteria) => {
    const { bathrooms, bedrooms, forDetails, price, propertyType, searchTerm } = criteria;

    const matchesBathrooms = bathrooms === 'Any' || property.bathrooms === bathrooms;
    const matchesBedrooms = bedrooms === 'Any' || property.bedrooms === bedrooms;
    const matchesForDetails = forDetails === 'Any' || property.forDetails === forDetails;
    const matchesPrice = price[0] <= property.price && property.price <= price[1];
    const matchesPropertyType = propertyType === '' || property.propertyType === propertyType;
    const matchesSearchTerm = searchTerm === '' || property.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesBathrooms && matchesBedrooms && matchesForDetails && matchesPropertyType && matchesSearchTerm;
  };

  const handleFilterChange = (name, value) => {
    setFilterCriteria((prevCriteria) => ({ ...prevCriteria, [name]: value }));
  };

  const renderItem = ({ item }) => (
    <PropertyCard key={item.id} property={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#242f40' }}>
      <View style={{ flex: 1 }}>
        <View style={{ height: 120, padding: 10 }}>
          <Filters onFilterChange={handleFilterChange} />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 30, marginTop: 25 }}>
          <FlatList
            style={{ width: '100%' }}
            data={searchResults}
            keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
            renderItem={renderItem}
            ListEmptyComponent={() => (isLoading ? <ActivityIndicator size="large" color="#2893FE" /> : <Text>No results found</Text>)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
