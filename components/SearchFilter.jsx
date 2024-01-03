import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, TextInput, Button, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const SearchFilter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [moveInDate, setMoveInDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
    onFilterChange({ filter, moveInDate });
    setShowAllFilters(false);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setMoveInDate(selectedDate);
    }
  };

  const handleDatePickerPress = () => {
    setShowDatePicker(true);
  };

  const handleClearDatePress = () => {
    setMoveInDate(null);
  };

  const handleClearAllPress = () => {
    setSelectedFilter(null);
    setMoveInDate(null);
    onFilterChange({ filter: null, moveInDate: null });
    setShowAllFilters(false);
  };

  const filters = ['All', 'Sale', 'Rent'];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.filterButton, selectedFilter === 'All' && styles.selectedFilter]}
        onPress={() => handleFilterPress('All')}
      >
        <Text style={styles.filterText}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.filterButton, selectedFilter === 'Sale' && styles.selectedFilter]}
        onPress={() => handleFilterPress('Sale')}
      >
        <Text style={styles.filterText}>For Sale</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.filterButton, selectedFilter === 'Rent' && styles.selectedFilter]}
        onPress={() => handleFilterPress('Rent')}
      >
        <Text style={styles.filterText}>For Rent</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tuneButton}
        onPress={() => setShowAllFilters(true)}
      >
        <MaterialIcons name="tune" size={24} color="#333" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={showAllFilters}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Filters</Text>

          {/* Move-In Date Filter */}
          <View style={styles.dateFilterContainer}>
            <Text style={styles.dateFilterLabel}>Move-In Date:</Text>
            <TextInput
              style={styles.dateFilterInput}
              placeholder="Select date"
              editable={false}
              value={moveInDate ? moveInDate.toDateString() : null}
            />
            <TouchableOpacity style={styles.dateFilterButton} onPress={handleDatePickerPress}>
              <Text style={styles.dateFilterButtonText}>Select Date</Text>
            </TouchableOpacity>
            {moveInDate && (
              <TouchableOpacity style={styles.clearDateButton} onPress={handleClearDatePress}>
                <Text style={styles.clearDateButtonText}>Clear Date</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Date Picker */}
          {showDatePicker && (
            <DateTimePicker
              value={moveInDate || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          {/* Clear All Filters Button */}
          <TouchableOpacity style={styles.clearAllButton} onPress={handleClearAllPress}>
            <Text style={styles.clearAllButtonText}>Clear All Filters</Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowAllFilters(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 10,
  },
  filterButton: {
    padding: 10,
  },
  selectedFilter: {
    backgroundColor: '#2893FE',
    borderRadius: 5,
  },
  filterText: {
    color: '#333',
  },
  tuneButton: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateFilterLabel: {
    marginRight: 10,
  },
  dateFilterInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  dateFilterButton: {
    marginLeft: 10,
    backgroundColor: '#2893FE',
    padding: 10,
    borderRadius: 5,
  },
  dateFilterButtonText: {
    color: '#fff',
  },
  clearDateButton: {
    marginLeft: 10,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  clearDateButtonText: {
    color: '#333',
  },
  clearAllButton: {
    backgroundColor: '#2893FE',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  clearAllButtonText: {
    color: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#333',
  },
});

export default SearchFilter;
