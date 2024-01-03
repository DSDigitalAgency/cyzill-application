import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Text } from 'react-native';
import BottomNav from '../components/BottomNav';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar />
        
      </View>
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 65 : 0, // Adjust the value as needed
  },
});

export default SearchScreen;
