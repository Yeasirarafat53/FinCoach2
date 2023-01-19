import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterSection from '../components/HompageItem/FooterSection';


const SmeScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [purpose, setPurpose] = useState('');
  const [loanType, setLoanType] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [isWomenEntrepreneur, setIsWomenEntrepreneur] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 15 }}>

      <View >
          <Text style={styles.SmeHeaderTitle}>SME Loan Eligibility</Text>
          <View style={styles.underline}></View>
        </View>

        <View>
          <Text style={styles.label}>Mobile Number:</Text>
          <TextInput
            value={mobileNumber}
            style={styles.input}
            placeholder='Enter Mobile'
            placeholderTextColor="gray"
            onChangeText={text => setMobileNumber(text)}
          />
        </View>

        <View style={{marginTop:7}}>
          <Text style={styles.label}>Purpose:</Text>
          <View style={styles.pickerInput}>
            <Picker
              selectedValue={purpose}
              onValueChange={itemValue => setPurpose(itemValue)}
              dropdownIconColor="gray"
              style={{ color: "gray" }}
            >
              <Picker.Item label="--Select a purpose" value="" />
              <Picker.Item label="Agri Loan" value="Agri Loan" />
              <Picker.Item label="Capital Machinery" value="Capital Machinery" />
              <Picker.Item label="Commercial Space Purchase" value="Commercial Space Purchase" />
              <Picker.Item label="Commercial Vehicle Purchase" value="Commercial Vehicle Purchase" />
              <Picker.Item label="Regular Working Capital" value="Regular Working Capital" />
              <Picker.Item label="Short Term Festival Loan" value="Short Term Festival Loan" />
              <Picker.Item label="Startup Loan" value="Startup Loan" />
            </Picker>
          </View>
        </View>

        <View style={{marginTop:7}}>
          <Text style={styles.label}>Loan/Secure Type:</Text>
          <View style={styles.pickerInput}>
            <Picker
              selectedValue={loanType}
              onValueChange={itemValue => setLoanType(itemValue)}
              dropdownIconColor="gray"
              style={{ color: "gray" }}

            >
              <Picker.Item label="--Select a loan/secure type" value="" />
              <Picker.Item label="Collateral/Mortage Backed" value="Collateral/Mortage Backed" />
              <Picker.Item label="Partially FDR Backed" value="Partially FDR Backed" />
              <Picker.Item label="Secured [FDR Backed]" value="Secured [FDR Backed]" />
              <Picker.Item label="Unsecured" value="Unsecured" />
            </Picker>
          </View>
        </View>

        <View style={{marginTop:7}}>
          <Text style={styles.label}>Nature of Business:</Text>
          <View style={styles.pickerInput}>
            <Picker
              selectedValue={businessType}
              onValueChange={itemValue => setBusinessType(itemValue)}
              dropdownIconColor="gray"
              style={{ color: "gray" }}
            >
              <Picker.Item label="--Select a nature of business" value="" />
              <Picker.Item label="Manufacturing" value="Manufacturing" />
              <Picker.Item label="Agri" value="Agri" />
              <Picker.Item label="Trading" value="Trading" />
              <Picker.Item label="Service" value="service" />
            </Picker>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
          <CheckBox
            value={isWomenEntrepreneur}
            tintColors={{ true: '#4588f5', false: 'gray' }}
            onValueChange={() => setIsWomenEntrepreneur(!isWomenEntrepreneur)}
          />
          <Text style={styles.label}>Women Entrepreneur</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Icon name="search" size={15} color="#fff" />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

      </View>

      <FooterSection />

    </ScrollView >
  )
};


const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#333333",
    fontFamily: "Jost-Regular"
  },
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',
    color: "#495057",
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 10,
    borderRadius: 5
  },
  pickerInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    height: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: "center"
  },
  button: {
    flexDirection: "row",
    backgroundColor: '#47b2e4',
    padding: 12,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 7,
  },
  SmeHeaderTitle: {
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
})

export default SmeScreen;
