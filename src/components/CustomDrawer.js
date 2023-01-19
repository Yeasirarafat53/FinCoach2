import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "tomato" }}>
                <Image
                    source={{
                        uri:
                            'http://184.168.127.174:5700/asset-common/logo/FinCoach5.png',
                    }}
                    style={{
                        width: "52%",
                        height: 40,
                        alignSelf:"center",
                        margin: 20,
                    }}
                />
                <View style={{flex:1,backgroundColor:"#fff",paddingTop:10}}>
                <DrawerItemList {...props} />
                </View>


            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})