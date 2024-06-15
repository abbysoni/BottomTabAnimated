import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {HomeIcon} from '../assets/icons/BTicons'


const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <HomeIcon width={100} height={50} fill="#0C7DBF"/>
      
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D9D9D9'
    }
})