import { View, Text, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import Photos from '../../components/Photos';
import Videos from '../../components/Videos';


const background = require('../../images/Bg.png')

const Gallery = ({ navigation, route }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent('photos')
  }, [])

  useEffect(() => {
    if (route.params?.from === 'Keşfet') {
      navigation.navigate('Hatlar & Eserler');
    }
  }, [route.params?.from]);

  return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.bgImage}>
        <Text style={styles.header}>Galeri</Text>
      </ImageBackground>

        {content === 'photos' && <Photos />}
        {content === 'videos' && <Videos />}
      </View>
  )
}

export default Gallery