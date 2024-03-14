import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { ScaledSheet } from "react-native-size-matters"
import MoreScreen from './MoreScreen/index';
import Tarihce from './MoreScreen/tarihce';
import Mimari from './MoreScreen/mimari';
import HatlarEserler from './Gallery/hatlarEserler';



const Stack = createStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name='Daha Fazla'
          component={MoreScreen}
          options={{
            headerShown: false,
            headerStyle: styles.headerStyle,
            headerTintColor: 'white',
            headerTitleStyle: styles.headerTitle,
          }}
      />
      <Stack.Screen 
          name='Tarihçe'
          component={Tarihce}
          options={{
            headerShown: false,
          }}
      />
      <Stack.Screen 
          name='Mimari'
          component={Mimari}
          options={{
            headerShown: false,
          }}
      />
      <Stack.Screen 
          name='Hatlar Eserler'
          component={HatlarEserler}
          options={{
            headerStyle: styles.headerStyle,
            headerTintColor: 'white',
            headerTitleStyle: styles.headerTitle,
            headerBackTitleVisible: false,
          }}
      />
    </Stack.Navigator>
  )
}

const styles = ScaledSheet.create({
    headerStyle: {
      backgroundColor: '#181818',
      height: '80@s',
    },
    headerTitle: {
      fontFamily: 'Operetta',
      fontSize: '24@s',
    },
  })

export default MoreStack