import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font';


const background = require('../../images/Bg.png')
const next = require('../../images/Next.png')

const MoreScreen = ({navigation}) => {
  const [loaded] = useFonts({
    Operetta: require('../../../assets/fonts/Operetta8-Regular.otf'),
    NunitoSans: require('../../../assets/fonts/NunitoSans.ttf')
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.bgImage}>
        <Text style={styles.header}>Daha Fazla</Text>
      </ImageBackground>

      <View>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Tarihçe')}>
          <Text style={styles.text}>Tarihçe</Text>
          <Image source={next} />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Mimari')}>
          <Text style={styles.text}>Mimari</Text>
          <Image source={next} />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Hatlar Eserler')}>
          <Text style={styles.text}>Hatlar & Eserler</Text>
          <Image source={next} />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Makaleler</Text>
          <Image source={next} />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Faaliyetlerimiz</Text>
          <Image source={next} />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Öneri & Dileklerinizi Paylaşın</Text>
          <Image source={next} />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Destekçilerimiz</Text>
          <Image source={next} />
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Bursa'yı Keşfet</Text>
          <Image source={next} />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
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
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '20@s',
  },
  text: {
    fontFamily: 'NunitoSans',
    fontSize: '18@s',
    color: 'white',
  },
  line: {
    height: '0.6@s',
    width: '320@s',
    backgroundColor: '#BCBCBC',
    marginVertical: '10@s',
    alignSelf: 'center'
  },
})

export default MoreScreen