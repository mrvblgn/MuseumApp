import { Text, ImageBackground, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font';
import { ScaledSheet } from "react-native-size-matters"

const image = require('../images/splash_screen.png');
const logo = require('../images/logo.png');


const SplashScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TabNavigator');
      setIsLoading(false);
    }, 3000); // 3 saniye sonra Explore sayfasına yönlendir

    return () => clearTimeout(timer); // Unmount olurken zamanlayıcıyı temizle
  }, []);

  const [loaded] = useFonts({
    Nunitosans: require('../../assets/fonts/NunitoSans.ttf'),
  });
  if (!loaded) {
    return null;
  }


  return (
    <ImageBackground source={image} style={styles.container} >
      <Image source={logo} style={styles.logo}></Image>
      {isLoading && <ActivityIndicator size="large" style={styles.loading} />}
      <Text style={styles.text}>Bursa Ulucami Derneği tarafından yaptırılmıştır.</Text>
    </ImageBackground>
  )
}

const styles = ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#0C0C0C",
    },
    logo: {
      marginTop: '50@vs',
    },
    loading: {
      top: '60@vs',
    },
    text: {
      top: '140@vs',
      color: "#929292",
      fontSize: '12@vs',
      fontFamily: "Nunitosans",
    }
})

export default SplashScreen