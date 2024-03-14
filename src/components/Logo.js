import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const image = require('../images/Logo-Mini.png')

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image source={image} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
      alignItems: 'center',
    },
    image: {
      width: moderateScale(148),
      height: moderateScale(41),
      marginTop: verticalScale(57),
    }
})

export default Logo