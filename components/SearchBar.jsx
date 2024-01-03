import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search for:', searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search address, city, location"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
      />
      <MaterialCommunityIcons
        name="magnify"
        style={styles.icon}
        size={24}
        color="black"
        onPress={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3E3E7',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderWidth: 1, // Add border width
    borderColor: '#C1C1C1', // Add border color
    margin: 10,
    marginTop: -10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SearchBar;
