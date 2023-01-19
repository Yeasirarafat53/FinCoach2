import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactSection = () => {
  return (
    <View>
      {/* =================Contact Us================== */}

      <View style={{ marginBottom: 30 }}>
            <View >
              <Text style={styles.contactHeaderTitle}>Contact Us</Text>
              <View style={styles.underline}></View>
            </View>

            <Text style={styles.contactDetails}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
          </View>
    </View>
  )
}

export default ContactSection

const styles = StyleSheet.create({
    contactHeaderTitle:{
        color: "#37517e", 
        fontSize: 30, 
        textAlign: "center", 
        padding: 15,
        fontWeight:"600",
        fontFamily:"Jost-Bold"
    },

    underline:{
        width: 80, 
        height: 3, 
        backgroundColor: "#00b0be", 
        alignSelf: "center", 
        marginBottom: 20
    },
    contactDetails:{
        color: "#4a7b8c", 
        fontSize: 17, 
        padding: 30, 
        alignSelf: "center", 
        fontFamily:"Jost-Regular"
    }

})