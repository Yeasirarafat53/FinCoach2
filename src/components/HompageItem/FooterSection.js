import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

const FooterSection = () => {
    return (
        <View>
            {/* =============Footer section============= */}

            <View style={{ backgroundColor: "#37517e" }}>
                <View style={{ paddingTop: 60, paddingBottom: 30, backgroundColor: "#f3f5fa" }}>
                    <View style={styles.footerContainer}>
                        <View style={styles.row}>
                            <View style={styles.footerContact}>
                                <Text style={{ fontSize: 28, color: "#37517e", marginBottom: 10, fontFamily: "Jost-SemiBold" }}>FinCoach</Text>
                                <Text style={{ fontSize: 14, color: "#5e5e5e", marginBottom: 10, fontFamily: "Jost-Regular" }}>Building Name: Russel Park House # 101 (5th floor), Road # 13/A, Block # C, Dhaka 1213</Text>

                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: "#5e5e5e" }}>
                                        <Text style={{ fontFamily: "Jost-Bold" }}>Mobile:</Text>
                                        <Text style={{ fontFamily: "Jost-Regular" }}> 01758679435</Text>
                                    </Text>
                                    <Text style={{ color: "#5e5e5e", }}>
                                        <Text style={{ fontFamily: "Jost-Bold" }}>Phone:</Text>
                                        <Text style={{ fontFamily: "Jost-Regular" }}> 01758679435</Text>
                                    </Text>
                                </View>

                            </View>


                            <View style={{ marginBottom: 30, }}>
                                <Text style={{ fontSize: 16, color: "#37517e", paddingBottom: 12, fontFamily: "Jost-Bold" }}>Our Services</Text>

                                <Unorderedlist bulletUnicode={0x2023} color="#37517e"  ><Text style={{ color: "black" }}>Retail Loan</Text>
                                    <View style={{ paddingBottom: 10 }}>
                                        <Unorderedlist bulletUnicode={0x2023} color="#37517e"><Text style={{ color: "black", }}>Personal Loan</Text></Unorderedlist>
                                        <Unorderedlist bulletUnicode={0x2023} color="#37517e"><Text style={{ color: "black" }}>Car Loan</Text></Unorderedlist>
                                        <Unorderedlist bulletUnicode={0x2023} color="#37517e"><Text style={{ color: "black" }}>Home Loan</Text></Unorderedlist>
                                    </View>
                                </Unorderedlist>

                                <Unorderedlist bulletUnicode={0x2023} color="#37517e" ><Text style={{ color: "black", paddingBottom: 4 }}>Account Opening</Text></Unorderedlist>
                                <Unorderedlist bulletUnicode={0x2023} color="#37517e" ><Text style={{ color: "black", paddingBottom: 4 }}>Credit Card</Text></Unorderedlist>
                                <Unorderedlist bulletUnicode={0x2023} color="#37517e" ><Text style={{ color: "black", paddingBottom: 4 }}>SME</Text></Unorderedlist>

                            </View>


                            <View style={{ marginBottom: 30 }}>
                                <Text style={{ fontSize: 16, color: "#37517e", fontFamily: "Jost-Bold", paddingBottom: 12 }}>Our Social Networks</Text>
                                <Text style={{ color: "black" }}>Find Us in Social Media</Text>

                                <View style={{ flexDirection: "row", }}>
                                    <View style={styles.socialImg}><Icon name="facebook-f" size={18} color="#fff" style={{ padding: 8 }} /></View>
                                    <View style={styles.socialImg}><Icon name="instagram" size={18} color="#fff" style={{ padding: 8 }} /></View>
                                    <View style={styles.socialImg}><Icon name="linkedin-in" size={18} color="#fff" style={{ padding: 8 }} /></View>
                                    <View style={styles.socialImg}><Icon name="twitter" size={18} color="#fff" style={{ padding: 8 }} /></View>
                                    <View style={styles.socialImg}><Icon name="skype" size={18} color="#fff" style={{ padding: 8 }} /></View>
                                </View>

                            </View>


                        </View>
                    </View>

                </View>
                {/* ========copyright========= */}
                <View style={{ width: "100%", height: 45, backgroundColor: "#37517e", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff" }}>© Copyright 2023 <Text style={{ fontWeight: "bold" }}>FinCoach</Text> . All Rights Reserved</Text>
                </View>

            </View>
        </View>
    )
}

export default FooterSection

const styles = StyleSheet.create({
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