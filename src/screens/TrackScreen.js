import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterSection from '../components/HompageItem/FooterSection';


const TrackScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={{ padding: 15 }}>
        <View >
          <Text style={styles.TrackHeaderTitle}>Track Application</Text>
          <View style={styles.underline}></View>
        </View>


        <Text style={styles.label}>Application ID</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Application Id'
          placeholderTextColor="gray"
        />
        <Text style={styles.label}>Email/Mobile No.</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email/Mobile No.'
          placeholderTextColor="gray"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="search" size={15} color="#fff" />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FooterSection />

    </ScrollView>
  )
}

export default TrackScreen

const styles = StyleSheet.create({
 
  container: {
    alignSelf: 'stretch',
    // padding: 15
  },
  TrackHeaderTitle: {
    color: "#37517e",
    fontSize: 30,
    textAlign: "center",
    padding: 15,
    fontWeight: "600",
    fontFamily: "Jost-Bold"
  },
  
  underline: {
    width: 60,
    height: 3,
    backgroundColor: "#00b0be",
    alignSelf: "center",
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#333333",
    fontFamily: "Jost-Regular"
    // fontWeight:600,
  },
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',
    color: "#495057",
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 10,
    marginBottom: 20,
    borderRadius: 4
  },
  button: {
    flexDirection: "row",
    backgroundColor: '#47b2e4',
    padding: 12,
    alignItems: 'center',
    justifyContent: "center",

    borderRadius: 50
  },
 
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 7,
  }
})