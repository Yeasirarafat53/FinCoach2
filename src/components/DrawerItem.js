import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from '../screens/AccountScreen';
import CreditScreen from '../screens/CreditScreen';
import RetailScreen from '../screens/RetailScreen';
import SmeScreen from '../screens/SmeScreen';
import TrackScreen from '../screens/TrackScreen';
import LoginScreen from '../screens/LoginScreen';
import CustomDrawer from './CustomDrawer';
import ActionBarImage from './ActionBarImage';
import HomeScreen from './../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerItem = () => {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>} screenOptions={{headerRight: () => <ActionBarImage />, headerStyle: { backgroundColor: "#37517e" },}}  >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ headerTitle:'' }}/>
      <Drawer.Screen name="Account Opening" component={AccountScreen} options={{ headerTitle:'' }}/>
      <Drawer.Screen name="Retail Loan" component={RetailScreen} options={{ headerTitle:'' }}/>
      <Drawer.Screen name="Credit Card" component={CreditScreen} options={{ headerTitle:'' }}/>
      <Drawer.Screen name="Sme" component={SmeScreen} options={{ headerTitle:'' }}/>
      <Drawer.Screen name="Track Application" component={TrackScreen} options={{ headerTitle:'' }}/>
      <Drawer.Screen name="Login" component={LoginScreen} options={{ headerTitle:'' }}/>
    </Drawer.Navigator>
  )
}
// screenOptions={{ headerStyle: { backgroundColor: "red" } }}
export default DrawerItem

const styles = StyleSheet.create({})