import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const Cart = () => {
  return (
    <View style={styles.container}>
  
      <Feather name="shopping-cart" size={64} />
      <Text>Items Added</Text>
      
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