import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterSection from '../components/HompageItem/FooterSection';
import { businessData, creditCardTypes } from '../Data/CreditData';



const CreditScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [incomeSource, setIncomeSource] = useState('');
  const [businessOwnerType, setBusinessOwnerType] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [ownershipPercent, setOwnershipPercent] = useState('');
  const [ageOfBusiness, setAgeOfBusiness] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState();
  const [existingLoan, setExistingLoan] = useState('');
  const [creditCardType, setCreditCardType] = useState('');
  const [creditCardInfo, setCreditCardInfo] = useState('');
  const [showInput, setShowInput] = useState(false);


  // array of months
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // render array of years 1950 - 2005
  var years = [];
  for (var i = 1950; i <= 2005; i++) {
    years.push(`${i}`);
  }
  years.reverse();
  // Wrap each item in the array in quotation marks
  var yearsData = years.map(function (year) {
    return year;
  });


  const handleValueChange = (value) => {
    setIncomeSource(value);
    if (value === 'Business') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  }

  return (
    <ScrollView>
      <View style={{ padding: 15 }}>

        {/* =======Header Part====== */}
        <View >
          <Text style={styles.CreditHeaderTitle}>Credit Card Eligibility</Text>
          <View style={styles.underline}></View>
        </View>

        {/* =======form part====== */}
        <Text style={styles.label}>Mobile Number:</Text>
        <TextInput
          value={mobileNumber}
          style={styles.input}
          placeholder='Enter Mobile'
          placeholderTextColor="gray"
          onChangeText={text => setMobileNumber(text)}
        />

        <Text style={styles.label}>Date of Birth:</Text>
        <View style={{ flexDirection: "row", }}>

          <View style={styles.dropdownPicker}>
            <Picker
              selectedValue={date}
              onValueChange={(itemValue, itemIndex) => setDate(itemValue)}
              dropdownIconColor="gray"
              style={styles.picker}
            >
              <Picker.Item label="Day" value="" />
              {Array.from(Array(31).keys()).map((value) => {
                return <Picker.Item style={{ fontSize: 12 }} key={value} label={(value + 1).toString()} value={value + 1} />;
              })}
            </Picker>
          </View>

          <View style={styles.dropdownPicker}>
            <Picker
              selectedValue={month}
              onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}
              dropdownIconColor="gray"
              style={styles.picker}
            >
              <Picker.Item label="Mon" value="" />
              {months.map((month, index) => (
                <Picker.Item style={{ fontSize: 12 }} key={index} label={month} value={month} />
              ))}
            </Picker>
          </View>

          <View style={styles.dropdownPicker}>
            <Picker
              selectedValue={year}
              onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
              dropdownIconColor="gray"
              style={styles.picker}
            >
              <Picker.Item label="Year" value="" />
              {
                yearsData.map(item => (
                  <Picker.Item style={{ fontSize: 12 }} label={item} value={item} key={item} />
                ))
              }
            </Picker>
          </View>
        </View>

        <Text style={styles.label}>Income Source:</Text>
        <View style={styles.pickerInput}>
          <Picker
            selectedValue={incomeSource}
            onValueChange={handleValueChange}
            dropdownIconColor="gray"
            style={{ color: "gray" }}
          >
            <Picker.Item label="--Select" value="" />
            <Picker.Item style={{ fontSize: 12 }} label="Business" value="Business" />
            <Picker.Item style={{ fontSize: 12 }} label="Landlord" value="Landlord" />
            <Picker.Item style={{ fontSize: 12 }} label="Professional" value="Professional" />
            <Picker.Item style={{ fontSize: 12 }} label="Salaried" value="Salaried" />
          </Picker>
        </View>


        {showInput && (
          <View>

            <Text style={styles.label}>Business Owner Type:</Text>
            <View style={styles.pickerInput}>
              <Picker
                selectedValue={businessOwnerType}
                onValueChange={(itemValue, itemIndex) => setBusinessOwnerType(itemValue)}
                dropdownIconColor="gray"
                style={{ color: "gray" }}
              >
                <Picker.Item label="--Select" value="" />
                <Picker.Item style={{ fontSize: 12 }} label="Partnership" value="partnership" />
                <Picker.Item style={{ fontSize: 12 }} label="Private Ltd" value="Private Ltd" />
                <Picker.Item style={{ fontSize: 12 }} label="Proprietorship" value="Proprietorship" />
              </Picker>
            </View>


            <Text style={styles.label}>Business Type:</Text>
            <View style={styles.pickerInput}>
              <Picker
                selectedValue={businessType}
                onValueChange={(itemValue, itemIndex) => setBusinessType(itemValue)}
                dropdownIconColor="gray"
                style={{ color: "gray" }}
              >
                <Picker.Item label="--Select" value="" />
                {
                  businessData.map((item, index) => (
                    <Picker.Item style={{ fontSize: 12 }} label={item} value={item} key={index} />
                  ))

                }
              </Picker>
            </View>

            <Text style={styles.label}>Ownership Percent:</Text>
            <TextInput
              style={styles.input}
              placeholder='Ownership Percent'
              placeholderTextColor="gray"
              value={ownershipPercent}
              onChangeText={text => setOwnershipPercent(text)}
            />

            <Text style={styles.label}>Age of Business:</Text>
            <TextInput
              style={styles.input}
              placeholder='Age of Business'
              placeholderTextColor="gray"
              value={ageOfBusiness}
              onChangeText={text => setAgeOfBusiness(text)}
            />


          </View>
        )

        }

        <Text style={styles.label}>Monthly Income:</Text>
        <TextInput
          style={styles.input}
          placeholder='Monthly Income'
          placeholderTextColor="gray"
          value={monthlyIncome}
          onChangeText={text => setMonthlyIncome(text)}
        />

        <Text style={styles.label}>Credit Card Type:</Text>
        <View style={styles.pickerInput}>
          <Picker
            selectedValue={creditCardType}
            onValueChange={(itemValue, itemIndex) => setCreditCardType(itemValue)}
            dropdownIconColor="gray"
            style={{ color: "gray" }}
          >
            <Picker.Item label="--Select" value="" />
            {
              creditCardTypes.map((item, index) => (
                <Picker.Item style={{ fontSize: 12 }} label={item} value={item} key={index} />
              ))
            }
          </Picker>

        </View>

        {/* ===checkbox part=== */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
          <CheckBox
            value={existingLoan}
            tintColors={{ true: '#4588f5', false: 'gray' }}
            onValueChange={() => setExistingLoan(!existingLoan)}
          />
          <Text style={styles.label}>Existing Loan Info</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
          <CheckBox
            value={creditCardInfo}
            tintColors={{ true: '#4588f5', false: 'gray' }}
            onValueChange={() => setCreditCardInfo(!creditCardInfo)}
          />
          <Text style={styles.label}>Credit Card Info</Text>
        </View>


        {/* ====search button==== */}
        <TouchableOpacity style={styles.button}>
          <Icon name="search" size={15} color="#fff" />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FooterSection />
    </ScrollView>
  )
}

export default CreditScreen

const styles = StyleSheet.create({
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
  dropdownPicker: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    marginRight: 5,
  },
  picker: {
    width: 120,
    color: "gray",
    // marginLeft:0,
    // padding:5,
    // justifyContent:"center"
  },
  CreditHeaderTitle: {
    color: "#37517e",
    fontSize: 30,
    textAlign: "center",
    // padding: 15,
    fontWeight: "600",
    fontFamily: "Jost-Bold"
  },

  underline: {
    width: 90,
    height: 3,
    backgroundColor: "#00b0be",
    alignSelf: "center",
    marginBottom: 20
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


})