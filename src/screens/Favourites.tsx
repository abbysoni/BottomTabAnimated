import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Feather name="heart" size={64} />
      <Text>Favourites</Text>
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D9D9D9'
    }
})