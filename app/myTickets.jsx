import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const MyTickets = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.ticketContainer}>
        <View style={styles.ticket}>
          <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="angle-left" size={30} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>My Tickets</Text>
          </View>
          <View style={styles.ticketTop}>
            <View style={styles.leftCircle} />
            <Image
              source={require('../assets/images/eventDetails.png')}
              style={styles.ticketImage}
            />
            <View style={styles.rightCircle} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.eventName}>International Band Music Concert</Text>
            <Text style={styles.eventDetails}>By Lorem</Text>
            <View style={styles.rowContainer}>
              <View style={styles.column}>
                <Text style={styles.labelText}>Name</Text>
                <Text style={styles.nameText}>Flen Fouleni</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.labelText}>Date</Text>
                <Text style={styles.nameText}>30 March 2025</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.column}>
                <Text style={styles.labelText}>Time</Text>
                <Text style={styles.nameText}>9:00 PM</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.labelText}>Location</Text>
                <Text style={styles.nameText}>Hannibal Street, Sousse</Text>
              </View>
            </View>
          </View>
          <View style={styles.dottedLineContainer}>
            <View style={styles.dottedLine} />
          </View>
          <View style={styles.barcodeContainer}>
            <Text style={styles.scanText}>Scan Barcode</Text>
            <Image
              source={require('../assets/images/barcode.png')}
              style={styles.barcode}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C3F83',
  },
  ticketContainer: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginLeft:10,
  },
  ticket: {
    backgroundColor: '#56A7FF',
    borderRadius: 20,
    padding: 20,
    width: 331.62,
    height: 670.57,
    top: 15,
    position: 'relative',
  },
  ticketTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1C3F83',
    position: 'absolute',
    left: -40,
    top: '50%',
    marginTop: 315,
  },
  rightCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1C3F83',
    position: 'absolute',
    right: -40,
    top: '50%',
    marginTop: 315,
  },
  ticketImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  eventName: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    marginBottom: 10,
    
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    
  },
  labelText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#1C3F83',
    marginBottom: 2,
  },
  nameText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    marginBottom: 15,
  },
  eventDetails: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#5283B8',
    bottom:10
  },
  dottedLineContainer: {
    alignItems: 'center',
    marginVertical: -5,
  },
  dottedLine: {
    width: '100%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#1C3F83',
    bottom:20
  },
  barcodeContainer: {
    alignItems: 'center',
  },
  scanText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#1C3F83',
    marginBottom: 10,
  },
  barcode: {
    width: '100%',
    height: 80,
  },
});

export default MyTickets;
