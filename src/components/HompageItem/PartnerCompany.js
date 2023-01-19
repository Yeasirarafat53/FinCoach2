import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PartnerData } from './../../Data/PartnerData';

const PartnerCompany = () => {
    return (
        <View>
            {/* ==============Partner section============== */}
            <View>

                <View >
                    <Text style={styles.partnerHeaderTitle}>Our Partners</Text>
                    <View style={styles.underline}></View>
                </View>

                <ScrollView horizontal={true} style={{ alignSelf: "center" }}>

                    <FlatList
                        data={PartnerData}

                        keyExtractor={(item, index) => index.toString()}
                        columnWrapperStyle={{ justifyContent: "space-around" }}

                        numColumns={2}
                        renderItem={({ item }) => (
                            <View key={item.id}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.bankImg}
                                    resizeMode='contain'
                                />
                            </View>
                        )}
                    />
                </ScrollView >
            </View>
        </View>
    )
}

export default PartnerCompany

const styles = StyleSheet.create({

    partnerHeaderTitle:{
        color: "#37517e", 
        fontSize: 30, 
        textAlign: "center", 
        padding: 15, 
        fontWeight: "600", 
        fontFamily: "Jost-Bold"
    },

    underline:{
        width: 90, 
        height: 3, 
        backgroundColor: "#00b0be", 
        alignSelf: "center", 
        marginBottom: 50
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




})