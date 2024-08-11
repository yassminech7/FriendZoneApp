import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import FilterIcon from '../icons/FilterIcon'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import SearchIcon from '../icons/SearchIcon';
import SportIcon from '../icons/SportIcon';
import FoodIcon from '../icons/FoodIcon';
import MusicIcon from '../icons/MusicIcon';
import ArtIcon from '../icons/ArtIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import Minilocation from '../icons/Minilocation';

const data = [
  {
    id: '1',
    type: 'EVENT',
    title: 'Cats Event',
    location: 'Carthage,Tunis',
    image: require('../assets/images/cat-event.png'),
    isFavorite: false,
  },
  {
    id: '2',
    type: 'CLUB ACTIVITY',
    title: 'Robotics Workshop',
    location: 'Carthage,Tunis',
    image: require('../assets/images/robotics-workshop.png'), 
    isFavorite: false,
  },
  {
    id: '3',
    type: 'EVENT',
    title: 'Cats Event',
    location: 'Carthage,Tunis',
    image: require('../assets/images/cat-event.png'),
    isFavorite: false,
  },
  {
    id: '4',
    type: 'CLUB ACTIVITY',
    title: 'Robotics Workshop',
    location: 'Carthage,Tunis',
    image: require('../assets/images/robotics-workshop.png'), 
    isFavorite: false,
  },
  {
    id: '5',
    type: 'EVENT',
    title: 'Cats Event',
    location: 'Carthage,Tunis',
    image: require('../assets/images/cat-event.png'),
    isFavorite: false,
  },
  {
    id: '6',
    type: 'CLUB ACTIVITY',
    title: 'Robotics Workshop',
    location: 'Carthage,Tunis',
    image: require('../assets/images/robotics-workshop.png'),
    isFavorite: false, 
  },
  {
    id: '7',
    type: 'EVENT',
    title: 'Cats Event',
    location: 'Carthage,Tunis',
    image: require('../assets/images/cat-event.png'),
    isFavorite: false,
  },
];

const Search = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState(data);

  const handleBookmarkIconPress = (id) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={22} color="#120D26" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Search</Text>
      </View>
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <SearchIcon style={styles.searchIcon}/>
          <View style={styles.searchSeparator}><Text>|</Text></View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#B9B9B9"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <View style={styles.filterButtonContent}>
            <FilterIcon />
            <Text style={styles.filterText}>Filters</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.suggestionsScroll}>
        <View style={styles.suggestionsContainer}>
          <TouchableOpacity style={[styles.suggestionButton, { backgroundColor: '#FFB61D' }]}>
            <SportIcon />
            <Text style={styles.suggestionText}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.suggestionButton, { backgroundColor: '#FC819E' }]}>
            <MusicIcon />
            <Text style={styles.suggestionText}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.suggestionButton, { backgroundColor: '#EECCDC' }]}>
            <FoodIcon />
            <Text style={styles.suggestionText}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.suggestionButton, { backgroundColor: '#46CDFB' }]}>
            <ArtIcon />
            <Text style={styles.suggestionText}>Art</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FlatList style={styles.events}
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
      onPress={() => navigation.navigate("eventDetails")}
      style={styles.eventContainer}
    >
            <Image source={item.image} style={styles.eventImage} />
            <View style={styles.eventDetails}>
              <Text style={styles.eventType}>{item.type}</Text>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <View style={styles.eventLocationContainer}>
                <Minilocation />
                <Text style={styles.eventLocation}>{item.location}</Text>
              </View>
            </View>
            <TouchableOpacity 
                onPress={() => handleBookmarkIconPress(item.id)} 
                style={styles.bookmarkIcon}
              >
                <BookmarkIcon color={item.isFavorite ? '#56A7FF' : 'black'} />
              </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    flex: 1,
    backgroundColor: '#fff',
    bottom:-35,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
    top: 25,
    paddingHorizontal:30,   
    
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    marginLeft: 8,
    color: '#120D26',
    
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal:35,   
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0000',
    borderRadius: 25,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#1C3F83',
    height: 42,
    width: 240,
  },
  searchIcon: {
    marginRight: 8,
    left: 10,
  },
  searchSeparator: {
    width: 1,
    height: '60%',
    backgroundColor: '#1C3F83',
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlignVertical: 'center',
  },
  filterButton: {
    backgroundColor: '#1C3F83',
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginLeft: 14,
    height: 42,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginLeft: 4,
  },
  suggestionsScroll: {
    marginBottom: 16,
  },
  suggestionsContainer: {
    flexDirection: 'row',
    paddingHorizontal:35,
  },
  suggestionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 83,
    maxHeight:40,
    paddingHorizontal: 14,
    paddingVertical: 6, 
    borderRadius: 21,
    marginRight: 8,
    height:90,
    marginBottom:48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  suggestionText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 8,
  },
  events: {
    backgroundColor:'rgba(217, 217, 217, 0.1)',
    borderRadius: 18,
    width:327,
    left:35,
    marginBottom: 20,
    },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 18,
    shadowColor: '#979797',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    height:112,
    width:327,
    bottom:-0.1
  },
  eventImage: {
    width: 79,
    height: 92,
    marginRight: 24,
    left:10
  },
  eventDetails: {
    flex: 1,
  },
  eventType: {
    color: '#4E7AD0',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  eventTitle: {
    fontSize: 16,
    color :'#120D26',
    fontFamily: 'Poppins-Medium',
  },
  eventLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventLocation: {
    color: '#747688',
    fontFamily: 'Poppins-Black',
    fontSize: 13,
    marginLeft: 4,
  },
  bookmarkIcon: {
    top: -27,
    right: 10
  },
 
});

export default Search;
