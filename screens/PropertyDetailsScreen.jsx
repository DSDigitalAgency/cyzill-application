import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const PropertyDetailsScreen = ({ route }) => {
  const navigation = useNavigation(); // Use the hook to get the navigation prop
  const { property } = route.params;

  const city = property.location.city || 'City Not Available';
  const mandal = property.location.mandal || 'Mandal Not Available';

  // Placeholder function for heart icon press
  const handleHeartPress = () => {
    // Implement your logic here
    console.log('Heart icon pressed');
  };

  // Extract latitude and longitude from the JSON data
  const latitude = property.location.coordinates[0] || 23.022505;
  const longitude = property.location.coordinates[1] || 72.571365;

  // Determine the price text based on the property type
  let priceText = '';
  if (property.transactionType === 'Rent') {
    priceText = `₹${property.expectedPrice}/month`;
  } else if (property.transactionType === 'Sale') {
    priceText = `₹${property.expectedPrice}`;
  } else {
    console.warn('Invalid transaction type:', property.transactionType);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {property.images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: image }} style={styles.image} />
            {/* Add other image-related components here if needed */}
          </View>
        ))}
      </Swiper>

      <View style={styles.detailsContainer}>
        <Text style={styles.priceText}>{priceText}</Text>
        <TouchableOpacity style={styles.heartIcon} onPress={handleHeartPress}>
          <MaterialIcons name="favorite" size={24} color="#164CF7" />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <MaterialIcons name='location-pin' size={20} color="#555" style={styles.infoIcon} />
        <Text style={styles.location}>{`${mandal}, ${city}`}</Text>
      </View>

      <View style={styles.propertyInfoContainer}>
        <View style={styles.propertyInfo}>
          <MaterialIcons name="king-bed" size={20} color="#555" style={styles.infoIcon} />
          <Text style={styles.infoText}>{`${property.bedrooms} Bedrooms`}</Text>
          <Text style={styles.bullet}> • </Text>
          <MaterialIcons name="aspect-ratio" size={20} color="#555" style={styles.infoIcon} />
          <Text style={styles.infoText}>{`${property.coveredArea} sq.ft`}</Text>
        </View>
      </View>
      <View style={styles.userContainer}>
        <Image source={{ uri: property.profile }} style={styles.userPhoto} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{property.name || 'Owner Type Not Available'}</Text>
          <Text style={styles.ownerType}>{property.ownerType || 'Owner Type Not Available'}</Text>
        </View>
        <View style={styles.contactIcons}>
          <TouchableOpacity onPress={() => console.log('Message icon pressed')}>
            <MaterialIcons name="message" size={24} color="#555" style={styles.contactIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Phone icon pressed')}>
            <MaterialIcons name="phone" size={24} color="#555" style={styles.contactIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {property.amenities && property.amenities.length > 0 && (
        <View style={styles.amenitiesContainer}>
          <Text style={styles.sectionTitle}>Home Facilities</Text>
          {property.amenities.map((amenity, index) => (
            <View key={index} style={styles.facilityInfo}>
              <MaterialIcons name="check-circle" size={20} color="#555" style={styles.infoIcon} />
              <Text style={styles.infoText}>{amenity}</Text>
            </View>
          ))}
        </View>
      )}

      {/* MapView with Marker for dynamic coordinates */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title="Property Location"
            description={`${mandal}, ${city}`}
          />
        </MapView>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{property.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 25,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#1547f7",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
},
backIcon: {
    width: 24,
    height: 24,
    color: "#fff",
    fontSize: 24,
},
  wrapper: {
    height: 269, // Set the height based on your image height
    marginBottom: -20, // Adjust this value as needed
  },  
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },    
  image: {
    width: width,
    height: 269,
  },  
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  location: {
    fontSize: 16,
    color: '#555',
    flex: 1, // Take remaining space
  },
  heartIcon: {
    padding: 10,
  },
  propertyInfoContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  propertyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
  },
  bullet: {
    fontSize: 16,
    marginHorizontal: 4,
    color: '#555',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20, // To make it round
    marginRight: 16,
  },
  userInfo: {
    flex: 1, // Take remaining space
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold', // Make owner name bold
  },
  ownerType: {
    fontSize: 14,
    color: '#555',
  },
  contactIcons: {
    flexDirection: 'row',
  },
  contactIcon: {
    marginHorizontal: 8,
  },
  amenitiesContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  facilityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  mapContainer: {
    height: 200,
    margin: 16,
  },
  map: {
    flex: 1,
  },
  descriptionContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
  },
});

export default PropertyDetailsScreen;
