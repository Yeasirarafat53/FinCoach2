import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeroSection = () => {
  return (
    <View>
      {/* ========hero section======= */}
      <ImageBackground source={{ uri: 'https://source.unsplash.com/random' }} blurRadius={5} style={styles.bgImg}>
        <Text style={styles.title}>Welcome to FinCoach</Text>
      </ImageBackground>
    </View>
  )
}

export default HeroSection

const styles = StyleSheet.create({
  bgImg: {
    height: 150,
    width: 348,
    alignSelf: "center"
  },

  title: {
    textAlign: "center", 
    fontSize: 20, 
    color: "tomato"
  }



})