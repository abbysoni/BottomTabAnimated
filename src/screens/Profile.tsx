import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';


const Profile = () => {
  return (
    <View style={styles.container}>
      
      <Feather
            name={"user-plus"}
            size={64}
          />
          <Text>Add Users</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D9D9D9'
    }
})