import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutSection = () => {
    return (
        <View>
            <View style={{ marginBottom: 30 }}>
                <View >
                    <Text style={styles.aboutHeaderTitle}>About Us</Text>
                    <View style={styles.underline}></View>
                </View>
            </View>
        </View>
    )
}

export default AboutSection

const styles = StyleSheet.create({
    aboutHeaderTitle: {
        color: "#37517e",
        fontSize: 30,
        textAlign: "center",
        padding: 15,
        fontWeight: "600",
        fontFamily: "Jost-Bold"
    },
    underline: {
        width: 80,
        height: 3,
        backgroundColor: "#00b0be",
        alignSelf: "center",
        marginBottom: 50
    }




})