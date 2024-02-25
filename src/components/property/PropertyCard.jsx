import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../../assets/themes/theme';

const PropertyCard = ({ property, navigation, customStyles }) => {
  const cardPressed = () => {
    if (property._id) {
      navigation.navigate('PropertyDetails', { propertyId: property._id });
    } else {
      console.error('Property ID is undefined or null');
    }
  };

  const {
    photos = [],
    location = {},
    username,
    propertyType,
    forDetails,
    description,
    bedrooms,
    bathrooms,
    price,
  } = property;

  const first10WordsWithEllipsis = description.split(' ').slice(0, 7).join(' ') + '...';
  const first5WordsAddressWithEllipsis =
    location.address?.split(' ').slice(0, 5).join(' ') + '...';

  let renderedPrice;
  if (forDetails === 'sell') {
    renderedPrice = `₹ ${price}`;
  } else if (forDetails === 'rent') {
    renderedPrice = `₹ ${price} / month`;
  }

  return (
    <TouchableOpacity onPress={cardPressed} className="bg-white rounded-lg overflow-hidden mb-4 shadow-md w-[350] h-48">
      <View className="flex-row">
        <View className="w-1/3 overflow-hidden">
          {photos.length > 0 && (
            <Image
              source={{ uri: photos[0] }}
              className="w-full h-48"
              resizeMode="cover"
              accessibilityLabel={`Image for ${description}`}
            />
          )}
        </View>
        <View className="flex-1 p-4">
          <Text className="text-base font-bold mb-2" numberOfLines={1} ellipsizeMode="tail">
            {first10WordsWithEllipsis}
          </Text>
          <View className="flex-row items-center mb-2">
            <Icon name="map-marker" size={20} color="#333" />
            <Text className="text-sm text-gray-600 ml-2" numberOfLines={1} ellipsizeMode="tail">
              {first5WordsAddressWithEllipsis}
            </Text>
          </View>
          <View className="flex-row items-center mb-2">
            <View className="flex-row items-center mr-4">
              <Icon name="bed" size={20} color="#333" />
              <Text className="ml-1">  {bedrooms}</Text>
            </View>
            <View className="flex-row items-center">
              <Icon name="bath" size={20} color="#333" />
              <Text className="ml-1"> {bathrooms}</Text>
            </View>
          </View>
          <Text className="text-xl font-bold text-light" numberOfLines={1} ellipsizeMode="tail">
            {username}
          </Text>
          <Text className="text-lg font-bold text-lightblue mt-2">
            {renderedPrice}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard;
