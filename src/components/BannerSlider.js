import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BannerSlider = ({ data }) => {
  return (
    <View >

      {/* <Image source={data.image} style={{height:150,width:300,borderRadius:10}} /> */}

      <ImageBackground source={data.image} blurRadius={10} style={{ height: 150, width: 300, borderRadius: 10, }}>
        {/* <View> */}
        <Text style={styles.text}>{data.title}</Text>
        {/* </View> */}
      </ImageBackground>
    </View>
  )
}

export default BannerSlider

const styles = StyleSheet.create({
  text: {
    flex:1,
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign:"center",
    // marginTop:20,
    // justifyContent:"center",
    // alignSelf:"center",
    // backgroundColor: "#000000c0"
  }
})