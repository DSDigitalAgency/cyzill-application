import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BASE_URL from '../../../config';

const SearchBar = ({ onSearch, setSearchResults, onTextChange }) => {
  const [searchQuery, setsearchQuery] = useState('');
  const apiUrl = `${BASE_URL}/api/property/properties/`;

  const handleSearch = async (text) => {
    try {
      console.log('Search query:', text);
      const response = await fetch(`${apiUrl}?location.address=${text}`);
      const data = await response.json();

      console.log('API Response:', data);

      // Check if there are matching results, otherwise fetch all properties
      if (Array.isArray(data) && data.length > 0) {
        const results = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setSearchResults(results);
      } else {
        console.log('No matching results found. Fetching all properties.');
        // Fetch all properties and display them in the search results
        fetchData(); // You need to implement fetchData function to fetch all properties
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClear = () => {
    setsearchQuery('');
    setSearchResults([]); // Clear search results
  };

  const handleChangeText = (text) => {
    setsearchQuery(text);
    onTextChange(text); // Send the entered text to the parent component
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#555" style={styles.searchIcon} />
      <TextInput
        clearButtonMode="always"
        style={styles.input}
        placeholder="Search address, city, location"
        value={searchQuery}
        onChangeText={(text) => handleChangeText(text)}
        onSubmitEditing={() => handleSearch(searchQuery)}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearIconContainer}>
          <Icon name="times" size={20} color="#555" style={styles.clearIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  clearIconContainer: {
    padding: 10,
  },
  clearIcon: {
    marginLeft: 10,
  },
});

export default SearchBar;
