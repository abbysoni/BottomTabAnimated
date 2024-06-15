import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { SCREEN_WIDTH } from '../constants/Screen';
import Animated from 'react-native-reanimated';

console.log({SCREEN_WIDTH});
console.log(`Ensure that feather is imported {Feather}`);

export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;

const AnimatedIcons = Animated.createAnimatedComponent(Feather);


const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <AnimatedIcons
            name={"home"}
            size={25}
          />
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