import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';

import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import CurrentLocation from '../components/CurrentLocation';
import propertiesData from './properties.json'; // Assuming properties.json is correctly configured
import BottomNav from '../components/BottomNav';

const HomeScreen = ({ navigation }) => {
  const properties = propertiesData.properties;

  const propertiesForSale = properties.filter(property => property.transactionType === 'Sale');
  const limitedPropertiesForSale = propertiesForSale.slice(0, 3);

  const propertiesForRent = properties.filter(property => property.transactionType === 'Rent');
  const limitedPropertiesForRent = propertiesForRent.slice(0, 3);

  const houseProperties = properties.filter(property => property.propertyType === 'House');
  const limitedHouseProperties = houseProperties.slice(0, 1);

  const renderPropertyCard = ({ item }) => (
    <PropertyCard key={item.id} property={item} />
  );

  const handleSeeAllPress = (transactionType) => {
    navigation.navigate('AllProperties', { transactionType });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <CurrentLocation />
        <SearchBar />

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Properties for Sale</Text>
          <TouchableOpacity onPress={() => handleSeeAllPress('Sale')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={limitedPropertiesForSale}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPropertyCard}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Properties for Rent</Text>
          <TouchableOpacity onPress={() => handleSeeAllPress('Rent')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={limitedPropertiesForRent}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPropertyCard}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>House for You</Text>
          <TouchableOpacity onPress={() => handleSeeAllPress('House')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={limitedHouseProperties}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPropertyCard}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.houseCardContainer}
        />
      </ScrollView>

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#2893FE',
    fontWeight: 'bold',
  },
  flatListContainer: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  houseCardContainer: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 60, // Adjusted padding to ensure the card is fully visible
  },
});

export default HomeScreen;
