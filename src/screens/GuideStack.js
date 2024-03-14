import React from 'react'
import { ImageBackground } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { ScaledSheet } from "react-native-size-matters"
import Guide from './Guide/index';
import DoguKapisi from './Guide/doguKapisi';
import BatiKapisi from './Guide/batiKapisi';
import KuzeyKapisi from './Guide/kuzeyKapisi';
import ContentDetail from './Guide/contentDetail';
import Player from './Guide/player';
import EserSahibi from './Guide/eserSahibi';
import CamidekiKonum from './Guide/camidekiKonumu';

const background = require('../images/Bg.png')

const Stack = createStackNavigator();

const GuideStack = () => {
    const [loaded] = useFonts({
        Operetta: require('../../assets/fonts/Operetta8-Regular.otf'),
    });
    if (!loaded) {
        return null;
    }

  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Rehber" 
            component={Guide} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Doğu Kapısı" 
            component={DoguKapisi} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Batı Kapısı" 
            component={BatiKapisi} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Kuzey Kapısı" 
            component={KuzeyKapisi} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name='ContentDetail'
            component={ContentDetail}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name= 'Player'
            component={Player}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name= 'Eser Sahibi'
            component={EserSahibi}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name= 'Camideki Konumu'
            component={CamidekiKonum}
            options={{
                headerShown: false,
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
        height: '80@s',
    },
    headerTitle: {
        fontFamily: 'Operetta',
        fontSize: '24@s',
    },
})

export default GuideStack