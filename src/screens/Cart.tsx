import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg';
import {SettingsIcon, ProfileIcon, HomeIcon} from '../assets/icons/BTicons'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Svg width="64" height="64" viewBox="0 0 64 64" fill="black">
        <Path d="M32 12L4 40H16V56H28V44H36V56H48V40H60L32 12Z" fill="none" />
      </Svg>
      <Text>Cart</Text>
      <SettingsIcon />
      <ProfileIcon />
      <HomeIcon />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D9D9D9'
    }
})