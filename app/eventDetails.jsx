import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FavIcon from '../icons/FavIcon';
import DateIcon from '../icons/DateIcon';
import LocationIcon from '../icons/LocationIcon';
import NextIcon from '../icons/NextIcon';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const GradientText = ({ text }) => {
  return (
    <MaskedView maskElement={<Text style={styles.aboutText}>{text}</Text>}>
      <Svg height="100%" width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#000" stopOpacity="1" />
            <Stop offset="1" stopColor="#000" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </MaskedView>
  );
};

const EventDetails = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavIconPress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/eventDetails.png")}
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Event Details</Text>
          <TouchableOpacity onPress={handleFavIconPress}>
            <FavIcon color={isFavorite ? '#56A7FF' : 'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.attendanceContainer}>
          <View style={styles.circleGroup}>
            <Image source={require('../assets/images/profile1.jpg')} style={styles.circleImage} />
            <Image source={require('../assets/images/profile2.jpg')} style={styles.circleImage} />
            <Image source={require('../assets/images/profile3.jpg')} style={styles.circleImage} />
          </View>
          <Text style={styles.goingText}>+100 Going</Text>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteButtonText}>Invite</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>International Band Music Concert 🎶 <Text style={styles.freeText}>(Free)</Text></Text>
        <View style={styles.organizerContainer}>
          <View style={styles.organizer}>
            <Image source={require('../assets/images/organizer.jpg')} style={styles.organizerImage} />
            <View style={styles.nameJobContainer}>
              <Text style={styles.organizerName}>Lorem</Text>
              <Text style={styles.organizerJob}>Organizer</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <DateIcon />
          <View style={styles.dateTimeContainer}>
            <Text style={styles.detailsText}>30 Mars 2025</Text>
            <Text style={styles.time}>9:00PM - 12:00PM</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <LocationIcon />
          <View style={styles.localContainer}>
            <Text style={styles.detailsText}>Carthage, Tunis</Text>
            <Text style={styles.location}>Hannibal Street, Carthage, Tunisia</Text>
          </View>
        </View>
        <Text style={styles.aboutTitle}>About Event</Text>
        <View style={styles.aboutContainer}>
          <GradientText text="Get ready for an unforgettable night of music, excitement, and exclusive surprises at our brand concert! 🌟 Feel the energy as [Popular Artist/Band] takes the stage to deliver an electrifying performance that you won't want to miss." />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate("myTickets")}>
            <View style={styles.buttonContent}>
              <Text style={styles.buyButtonText}>BUY TICKET NOW !</Text>
              <NextIcon style={styles.nextIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 244,
  },
  headerOverlay: {
    position: 'absolute',
    top: 35,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  backButton: {
    padding: 10,
    left:5,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    marginLeft: -125,
  },
  imageContainer: {
    position: 'relative',
    marginTop: -5,
    marginLeft: 50,
    marginBottom: 20,
  },
  attendanceContainer: {
    position: 'absolute',
    top: -25,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  circleGroup: {
    flexDirection: 'row',
  },
  circleImage: {
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    marginRight: -10,
    borderWidth: 2,
    borderColor: '#808080',
  },
  goingText: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 10,
    color: "#1C3F83",
    fontFamily: 'Poppins-Medium',
  },
  inviteButton: {
    backgroundColor: '#56A7FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginLeft: 10,
  },
  inviteButtonText: {
    color: '#ffff',
    fontFamily: 'Poppins-Black',
  },
  content: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    color: "#1C3F83",
    marginBottom: 10,
  },
  organizerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  nameJobContainer: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  organizer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizerJob: {
    fontSize: 12,
    color: "#706E8F",
    fontFamily: 'Poppins-SemiBold',
  },
  organizerImage: {
    width: 45,
    height: 45,
    borderRadius: 16,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  organizerName: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: "#0D0C26",
  },
  followButton: {
    backgroundColor: 'rgba(80, 167, 255, 0.2)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  followButtonText: {
    color: '#56A7FF',
    fontFamily: 'Poppins-Black',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateTimeContainer: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  detailsText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#120D26",
    fontFamily: 'Poppins-SemiBold',
  },
  time: {
    marginLeft: 10,
    fontSize: 12,
    color: "#747688",
    fontFamily: 'Poppins-Black',
  },
  localContainer: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  location: {
    marginLeft: 10,
    fontSize: 12,
    color: "#747688",
    fontFamily: 'Poppins-Black',
  },
  aboutTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 10,
  },
  aboutContainer: {
    height: 150, 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    justifyContent: 'center',
  },
  aboutScrollView: {
    height: '100%',
  },
  aboutText: {
    fontSize: 16,
    color: '#120D26',
    fontFamily: 'Poppins-Regular',
    marginBottom:20,
  },
  buyButton: {
    backgroundColor: '#56A7FF',
    width: 271,
    height: 58,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: "center",
    marginVertical: -10,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    left:22
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextIcon: {
    marginLeft: 25,
    left:15
  },
  freeText: {
    color: '#56A7FF',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EventDetails;
