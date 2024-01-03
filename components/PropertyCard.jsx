import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PropertyCard = ({ property }) => {
  const isForSale = property.transactionType === 'Sale';
  const truncatedDescription = `${property.description.split(' ').slice(0, 10).join(' ')}...`;

  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const goToDetails = () => {
    // Navigate to PropertyDetailsScreen with property details
    navigation.navigate('PropertyDetailsScreen', { property });
  };

  return (
    <TouchableOpacity onPress={goToDetails} style={styles.card}>
      <Image source={{ uri: property.images[0] }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.price}>
          {isForSale ? `₹${property.expectedPrice}` : `₹${property.expectedPrice}/month`}
        </Text>
        <Text style={styles.description}>{truncatedDescription}</Text>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={18} color="#777" />
          <Text style={styles.address}>{property.location.city}, {property.location.state}</Text>
        </View>
        <View style={styles.infoContainer}>
          <MaterialIcons name="single-bed" size={18} color="#777" />
          <Text style={styles.info}>{property.bedrooms} Rooms</Text>
          <Text style={styles.info}> | </Text>
          <MaterialIcons name="aspect-ratio" size={18} color="#777" />
          <Text style={styles.info}>{property.coveredArea} sqft</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={{ uri: property.profile }} style={styles.profileImage} />
          <Text style={styles.profileName}>{property.name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
        <MaterialIcons name={isFavorite ? 'favorite' : 'favorite-border'} size={24} color={isFavorite ? 'red' : 'black'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: 316,
    height: 189,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    position: 'relative', // Added for positioning the heart icon
  },
  image: {
    width: 108,
    height: '100%',
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  address: {
    marginLeft: 5,
    color: '#777',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  info: {
    marginLeft: 5,
    color: '#333',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginRight: 5,
  },
  profileName: {
    fontSize: 18,
    color: '#555',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    zIndex: 1,
  },
});

export default PropertyCard;
