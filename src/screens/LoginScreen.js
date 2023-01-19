import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterSection from '../components/HompageItem/FooterSection';

const LoginForm = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>

      <View style={{ padding: 15 }}>
        <View >
          <Text style={styles.loginHeaderTitle}>Login</Text>
          <View style={styles.underline}></View>
        </View>


        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          placeholderTextColor="gray"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          placeholderTextColor="gray"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="sign-in-alt" size={15} color="#fff" />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.buttonControl}>

          <Text style={{ color: "#348fe2" }} onPress={() => {
                    navigation.navigate('ForgotPassword');
                }}>Forgot Password?</Text>

          <TouchableOpacity style={styles.Registerbutton}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={{ color: "#FFFFFF" }}>Register</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.mainLine}>
          <View style={styles.lines}></View>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "500", margin: 10 }}>or</Text>
          <View style={styles.lines}></View>
        </View>

        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <Text style={{ color: "gray", fontFamily: "Jost-Bold" }}>Contact FinCoach</Text>
        </View>
      </View>
      <FooterSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  lines: {
    height: 2,
    width: 100,
    backgroundColor: "#dadce0"
  },
  container: {
    alignSelf: 'stretch',
    // padding: 15
  },
  loginHeaderTitle: {
    color: "#37517e",
    fontSize: 30,
    textAlign: "center",
    padding: 15,
    fontWeight: "600",
    fontFamily: "Jost-Bold"
  },
  buttonControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
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
  Registerbutton: {
    backgroundColor: '#47b2e4',
    padding: 12,
    width: 100,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 7,
  }
});

export default LoginForm;