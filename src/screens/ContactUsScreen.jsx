import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactUsScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    message: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    Alert.alert('Success', 'Message sent successfully', [
      { text: 'OK', onPress: () => setFormData({ name: '', phoneNumber: '', message: '' }) },
    ]);
  };

  return (
    <ScrollView className="flex-1 p-6 bg-sky-900">
      <View className="bg-sky-700 p-4 rounded mb-4">
        <Text className="text-2xl font-bold mb-2 text-white">Contact Form</Text>
        <View className="mb-4">
          <Text className="text-white">Name:</Text>
          <TextInput
            className="p-2 border-2 rounded-md border-gray-400 placeholder-red-300 text-white"
            placeholder='Enter your name'
            onChangeText={(text) => handleInputChange('name', text)}
            value={formData.name}
          />
        </View>
        <View className="mb-4">
          <Text className="text-white">Phone Number:</Text>
          <TextInput
            className="p-2 border-2 rounded-md border-gray-400 placeholder-red-300 text-white"
            placeholder='Enter your phone number'
            onChangeText={(text) => handleInputChange('phoneNumber', text)}
            value={formData.phoneNumber}
          />
        </View>
        <View className="mb-4">
          <Text className="text-white">Message:</Text>
          <TextInput
            className="p-2 border-2 rounded-md border-gray-400 placeholder-red-300 text-white"
            placeholder='Enter your message'
            multiline
            onChangeText={(text) => handleInputChange('message', text)}
            value={formData.message}
          />
        </View>
        <TouchableOpacity className="bg-blue-500 p-2 rounded-md items-center" onPress={handleSubmit}>
          <Text className="text-white font-bold">Submit</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-sky-700 p-4 rounded">
        <Text className="text-2xl font-bold mb-2 text-white">Contact Details</Text>
        <View className="flex-row">
            <Icon name="map-marker" size={20} color="#333" />
            <Text>Email: example@example.com</Text>
        </View>
        <View>
            <Icon name="map-marker" size={20} color="#333" />
            <Text>Contact Number: +1234567890</Text>
        </View>
        <View>
            <Icon name="map-marker" size={20} color="#333" />
            <Text>Address: 123 Main Street, Cityville</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default ContactUsScreen;
