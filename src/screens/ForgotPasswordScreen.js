import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterSection from '../components/HompageItem/FooterSection';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 10 }}>
                <View >
                    <Text style={styles.forgotHeaderTitle}>Forgot Password</Text>
                    <View style={styles.underline}></View>
                </View>

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Your Email'
                    placeholderTextColor="gray"
                    onChangeText={(text) => setEmail(text)}
                />

                <TouchableOpacity style={styles.button} >
                    <Icon name="paper-plane" size={15} color="#fff" />
                    <Text style={styles.buttonText}>Send Email</Text>
                </TouchableOpacity>

                <View style={{ margin: 10, }}>
                    <Text style={{ color: "black" }}>Click <Text style={{ color: "#348fe2", }} onPress={() => {
                        navigation.navigate('Login');
                    }}>Here </Text>to login.</Text>


                </View>


            </View>
            <FooterSection />
        </ScrollView>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        // padding: 15
    },
    forgotHeaderTitle: {
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