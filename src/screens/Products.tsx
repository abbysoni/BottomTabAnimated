import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';


const Products = () => {
  return (
    <View style={styles.container}>
      
      <Feather name="home" size={64} />
      <Text>Products Home</Text>
      
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