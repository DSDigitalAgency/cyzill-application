import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from './SearchBar'; // Assuming SearchBar component exists
import { Color } from '../../../assets/themes/theme';

const Filters = ({ onSearch, onFilterChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    searchTerm: '',
    price: [0, 5000],
    bedrooms: 'Any',
    bathrooms: 'Any',
    propertyType: '',
    forDetails: 'rent',
  });

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    onFilterChange(name, value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePriceChange = (minOrMax, value) => {
    const newPrice = [...filters.price];
    newPrice[minOrMax === 'minimum' ? 0 : 1] = value;
    handleFilterChange('price', newPrice);
  };

  const handleBedroomChange = (value) => {
    handleFilterChange('bedrooms', value);
  };

  const handleBathroomChange = (value) => {
    handleFilterChange('bathrooms', value);
  };

  const handlePropertyTypeChange = (value) => {
    handleFilterChange('propertyType', value);
  };

  const handleforDetailsChange = (value) => {
    handleFilterChange('forDetails', value);
  };

  useEffect(() => {
    console.log('Filters:', filters);
  }, [filters]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchContainer}>
          <SearchBar setSearchTerm={(term) => handleFilterChange('searchTerm', term)} />
        </View>
        <View style={styles.filtersection}>
          <TouchableOpacity onPress={toggleModal} style={styles.filterIcon}>
            <Icon name="filter" size={24} color="#555" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.saleRentContainer}>
        <TouchableOpacity
          onPress={() => handleFilterChange('forDetails', 'rent')}
          style={[
            styles.optionButton,
            filters.forDetails === 'rent' ? styles.selectedOption : null,
          ]}
        >
          <Text style={[styles.optionText, filters.forDetails === 'rent' ? styles.selectedtext : null]}>Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterChange('forDetails', 'sell')}
          style={[
            styles.optionButton,
            filters.forDetails === 'sell' ? styles.selectedOption : null,
          ]}
        >
          <Text style={[styles.optionText, filters.forDetails === 'sell' ? styles.selectedtext : null]}>Sell</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.filterContainer}>
            <View style={styles.filter}>
              <Text>Beds:</Text>
              <Picker
                selectedValue={filters.bedrooms}
                onValueChange={(value) => handleBedroomChange(value)}
                style={styles.picker}
              >
                <Picker.Item label="Any" value="Any" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                {/* Add more options as needed */}
              </Picker>
            </View>

            <View style={styles.filter}>
              <Text>Baths:</Text>
              <Picker
                selectedValue={filters.bathrooms}
                onValueChange={(value) => handleBathroomChange(value)}
                style={styles.picker}
              >
                <Picker.Item label="Any" value="Any" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                {/* Add more options as needed */}
              </Picker>
            </View>

            <View style={styles.filter}>
              <Text>Property Type:</Text>
              <Picker
                selectedValue={filters.propertyType}
                onValueChange={(value) => handlePropertyTypeChange(value)}
                style={styles.picker}
              >
                <Picker.Item label="Any" value="" />
                <Picker.Item label="House" value="house" />
                <Picker.Item label="Apartment" value="apartment" />
                {/* Add more options as needed */}
              </Picker>
            </View>

            <View style={styles.filter}>
              <Text>Price:</Text>
              <Picker
                selectedValue={filters.price[0]}
                onValueChange={(value) => handlePriceChange('minimum', value)}
                style={styles.picker}
              >
                <Picker.Item label="0" value={0} />
                <Picker.Item label="5000" value={5000} />
                <Picker.Item label="10000" value={10000} />
                {/* Add more options as needed */}
              </Picker>
              <Picker
                selectedValue={filters.price[1]}
                onValueChange={(value) => handlePriceChange('maximum', value)}
                style={styles.picker}
              >
                <Picker.Item label="5000" value={5000} />
                <Picker.Item label="10000" value={10000} />
                <Picker.Item label="50000" value={50000} />
                {/* Add more options as needed */}
              </Picker>
            </View>
          </View>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 6,
  },
  searchContainer: {
    width: '90%',
    padding: 3,
  },
  filter: {
    flex: 1,
    flexDirection: 'row',
  },
  filtersection: {
    backgroundColor: Color.blue,
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: 40,
    borderRadius: 8,
  },
  filterIcon: {
    alignSelf: 'center',
  },
  saleRentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: Color.linecolor,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  selectedOption: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
    borderColor: Color.lightgray,
  },
  selectedtext: {
    color: Color.white,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Set a light background color
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20, // Add rounded corners to the top
    borderTopRightRadius: 20, // Add rounded corners to the top
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'column', // Keep flexDirection as 'column'
    alignItems: 'center',    // Center the items horizontally
    justifyContent: 'center', // Center the items vertically
    marginTop: 10,
  },
  filter: {
    marginBottom: 10,  // Add marginBottom for spacing between filters
    width: '80%',      // Set a specific width for the filters
  },
  picker: {
    height: 40,
    width: '100%',
  },
  closeButton: {
    marginTop: 20,  // Increase marginTop for more space
    backgroundColor: '#2196F3',
    padding: 15,    // Increase padding for a larger button
    borderRadius: 10, // Add rounded corners to the button
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,   // Increase fontSize for better readability
    fontWeight: 'bold', // Add fontWeight for emphasis
  },
});

  

export default Filters;
