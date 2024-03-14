import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font';


const background = require('../../images/Bg.png') 
const back = require('../../images/Back.png')
const share = require('../../images/Share.png')

const CamidekiKonum = ({route, navigation}) => {
  const {item} = route.params;

  const [loaded] = useFonts({
      Operetta: require('../../../assets/fonts/Operetta8-Regular.otf'),
      NunitoSans: require('../../../assets/fonts/NunitoSans.ttf')
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={background} style={styles.topImage}>
          <View style={styles.arrows}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={back} style={styles.backArrow}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={share} style={styles.shareArrow}/>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text1}>{item.text}</Text>
            <Text style={styles.text2}>{item.bulunduguYer}</Text>
          </View>
        </ImageBackground>
        <Image source={item.camidekiKonumu} style={styles.konumImg}/>
      </ScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  topImage: {
    width: '100%',
    height: '124@s',
  },
  arrows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '50@s'
  },
  backArrow: {
    width: '20@s',
    height: '20@s',
    marginStart: '20@s',
  },
  shareArrow: {
    width: '20@s',
    height: '20@s',
    marginEnd: '20@s'
  },
  text1: {
    color: 'white',
    fontFamily: 'Operetta',
    fontSize: '30@s',
    textAlign: 'center',
    marginTop: '20@s'
  },
  text2: {
    color: '#BCBCBC',
    fontFamily: 'NunitoSans',
    fontSize: '14@s',
    textAlign: 'center',
    marginTop: '10@s'
  },
  konumImg: {
    width: '100%',
    height: '300@s',
    marginTop: '60@s'
  }
})

export default CamidekiKonum