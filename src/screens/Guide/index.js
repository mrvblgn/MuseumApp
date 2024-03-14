import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { ScaledSheet } from "react-native-size-matters"
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const dogu_kapisi = require('../../images/dogu-kapisi.jpg')
const bati_kapisi = require('../../images/bati-kapisi.jpg')
const kuzey_kapisi = require('../../images/kuzey-kapisi.png')
const background = require('../../images/Bg.png')

const images = [
  { id: '1', src: dogu_kapisi, text: 'Doğu Kapısı', screenName: 'Doğu Kapısı'},
  { id: '2', src: bati_kapisi, text: 'Batı Kapısı', screenName: 'Batı Kapısı'},
  { id: '3', src: kuzey_kapisi, text: 'Kuzey Kapısı', screenName: 'Kuzey Kapısı'},
];

const Guide = () => {
  const [loaded] = useFonts({
    Operetta: require('../../../assets/fonts/Operetta8-Regular.otf'),
    NunitoSans: require('../../../assets/fonts/NunitoSans.ttf')
  });
  if (!loaded) {
    return null;
  }

  const navigation = useNavigation();

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.screenName)}>
      <ImageBackground source={item.src} style={styles.image}>
        <Text style={styles.imageText}>{item.text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.bgImage}>
        <Text style={styles.header}>Rehber</Text>
      </ImageBackground>

      
      <FlatList 
        ListHeaderComponent={
          <>
            <Text style={styles.text1}>Şu an neredesiniz ?</Text>
            <Text style={styles.text2}>Bulunduğunuz noktayı aşağıdan seçip gezi rotanızı oluşturabilirsiniz.</Text>
          </>
        }
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  bgImage: {
    width: '100%',
    height: '124@s',
  },
  header: {
    fontFamily: 'Operetta',
    fontSize: '24@s',
    color: 'white',
    textAlign: 'center',
    marginTop: '50@s'
  },
  text1: {
    fontFamily: 'NunitoSans',
    fontSize: '20@s',
    color: 'white',
    textAlign: 'center',
    marginTop: '20@s'
  },
  text2: {
    fontFamily: 'NunitoSans',
    fontSize: '16@s',
    color: '#BCBCBC',
    textAlign: 'center',
    marginTop: '50@s',
    marginBottom: '25@s'
  },
  image: {
    margin: '10@s',
    width: '325@s',
    height: '325@s',
  },
  imageText: {
    fontFamily: 'NunitoSans',
    fontSize: '18@s',
    textAlign: 'center',
    color: 'white',
    marginTop: '280@s'
  }
})

export default Guide

