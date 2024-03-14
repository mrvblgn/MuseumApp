import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { ScaledSheet } from "react-native-size-matters"
import Gallery from './Gallery/index';
import IcMekan from './Gallery/icMekan';
import DisMekan from './Gallery/disMekan';
import Minber from './Gallery/minber';
import HatlarEserler from './Gallery/hatlarEserler/index';
import GuneyCephesi from './Gallery/hatlarEserler/guneyCephesi';
import BatiCephesi from './Gallery/hatlarEserler/batiCephesi';



const Stack = createStackNavigator();

const GalleryStack = () => {
  const [loaded] = useFonts({
    Operetta: require('../../assets/fonts/Operetta8-Regular.otf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Galeri" 
        component={Gallery} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name='Hatlar & Eserler' 
        component={HatlarEserler}
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Stack.Screen 
        name='İç Mekan' 
        component={IcMekan} 
        options={{
          headerStyle: {
            backgroundColor: '#181818',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Stack.Screen 
        name='Dış Mekan' 
        component={DisMekan} 
        options={{
          headerStyle: {
            backgroundColor: '#181818',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Stack.Screen 
        name='Minber' 
        component={Minber} 
        options={{
          headerStyle: {
            backgroundColor: '#181818',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Stack.Screen 
        name='Güney Cephesi' 
        component={GuneyCephesi} 
        options={{
          headerStyle: {
            backgroundColor: '#181818',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Stack.Screen 
        name='Batı Cephesi' 
        component={BatiCephesi} 
        options={{
          headerStyle: {
            backgroundColor: '#181818',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </Stack.Navigator>
  )
}

const styles = ScaledSheet.create({
  headerStyle: {
    backgroundColor: '#181818',
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitle: {
    fontFamily: 'Operetta',
    fontSize: '24@s',
  },
})

export default GalleryStack