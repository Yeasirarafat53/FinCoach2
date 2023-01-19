import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoanData } from './../../Data/LoanData';
import Icon  from 'react-native-vector-icons/FontAwesome5';

const LoanSection = () => {
    return (
        <View>
            {/* ========search compare and apply======== */}

            <View>
                <Text style={styles.loanHeaderTitle}>Search, Compare & Apply</Text>
                <View style={styles.underline}></View>
                {
                    LoanData.map(item => (
                        <View style={styles.loanHeader} key={item.id}>
                            <Text style={styles.loanTitle}>{item.title}</Text>

                            <View style={{ padding: 20, }} >
                                {
                                    item.loan.map(db => {
                                        return (

                                            <Text style={styles.loanItemTitle}><Icon name="arrow-right" /> {db}</Text>
                                        )
                                    })
                                }

                            </View>

                        </View>
                    ))
                }

            </View>
        </View>
    )
}

export default LoanSection

const styles = StyleSheet.create({
    loanHeaderTitle: {
        color: "#37517e",
        fontSize: 30,
        textAlign: "center",
        padding: 15,
        fontWeight: "600",
        fontFamily: "Jost-Bold"
    },
    loanHeader: {
        width: 340,
        height: 170,
        backgroundColor: "#32a2a8",
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: 40,
    },
    loanTitle: {
        fontSize: 29,
        textAlign: "center",
        color: "white",
        padding: 10
    },
    loanItemTitle: {
        color: "white",
        fontSize: 15,
        fontWeight: "normal",
        lineHeight: 25,

    },

    underline: {
        width: 100,
        height: 3,
        backgroundColor: "#00b0be",
        alignSelf: "center",
        marginBottom: 50
    }










})