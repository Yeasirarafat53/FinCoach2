import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterSection from '../components/HompageItem/FooterSection';




const RegisterScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        // validate form and submit data
        Alert.alert("registration successfully")
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 15 }}>
                <View >
                    <Text style={styles.RegisterHeaderTitle}>Register</Text>
                    <View style={styles.underline}></View>
                </View>

                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor="gray"
                    onChangeText={(text) => setFirstName(text)}
                />


                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Last Name'
                    placeholderTextColor="gray"
                    onChangeText={(text) => setLastName(text)}
                />

                <Text style={styles.label}>Gender</Text>
                <View style={styles.pickerInput}>
                <Picker
                    style={{color:"gray"}}
                    itemStyle={{ height: 10 }}
                    dropdownIconColor="gray"
                    selectedValue={gender}
                    onValueChange={(itemValue) => setGender(itemValue)}
                >
                    <Picker.Item label='--Select Gender' value='' />
                    <Picker.Item label='Male' value='male' />
                    <Picker.Item label='Female' value='female' />
                </Picker>
                </View>

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email'
                    placeholderTextColor="gray"
                    onChangeText={(text) => setEmail(text)}
                />

                <Text style={styles.label}>Mobile</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Mobile'
                    placeholderTextColor="gray"
                    onChangeText={(text) => setMobile(text)}
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Password'
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />

                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPassword(text)}
                />

                {/* <Button
                    style={styles.button}
                    title='Submit'
                    onPress={handleSubmit}
                /> */}

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Icon name="sign-in-alt" size={15} color="#fff" />
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 10, alignSelf: "center" }}>
                    <Text style={{ color: "black" }}>Already have an account? Click <Text style={{ color: "#348fe2", }} onPress={() => {
              navigation.navigate('Login');
            }}>Here </Text>to login.</Text>
                        

                </View>
            </View>

            <FooterSection />
        </ScrollView>
    )
}




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
        marginBottom: 5,
        borderRadius: 5
    },
    pickerInput: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 5,
        height: 40,
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
        
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
    RegisterHeaderTitle: {
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
});

export default RegisterScreen;