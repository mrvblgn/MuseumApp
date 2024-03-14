import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Explore from './Explore';


const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  )
}

export default HomeStack