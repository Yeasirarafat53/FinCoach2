import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import HeroSection from './../components/HompageItem/HeroSection';
import LoanSection from './../components/HompageItem/LoanSection';
import PartnerCompany from './../components/HompageItem/PartnerCompany';
import AboutSection from '../components/HompageItem/AboutSection';
import ContactSection from './../components/HompageItem/ContactSection';
import FooterSection from '../components/HompageItem/FooterSection';

const HomeScreen = () => {

  // const renderBanner = ({ item, index }) => {
  //   return <BannerSlider data={item} />
  // }

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true} style={{ marginTop: 10 }}>

       <HeroSection/>
       <LoanSection/>
       <PartnerCompany/>
       <AboutSection/>
       <ContactSection/>
       <FooterSection/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  loanHeader: {
    width: 340,
    height: 170,
    backgroundColor: "#32a2a8",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 40,
  },

  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "normal",
    lineHeight: 25,

  },
  bankImg: {
    width: 170,
    padding: 50,
    height: 10,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: "#d9ddda",
    borderWidth: 1,
    margin: 3

  },
  socialImg: {
    width: 36,
    height: 36,
    backgroundColor: "#47b2e4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginRight: 5,
    marginTop: 20
    // padding:1,
  },
  footerContainer: {
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",
  }
})