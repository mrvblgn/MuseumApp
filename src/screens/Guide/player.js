import { View, Text, ImageBackground, TouchableOpacity, Image, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ScaledSheet } from 'react-native-size-matters'

const background = require('../../images/Bg.png')
const down = require('../../images/Down.png')
const share = require('../../images/Share.png')


const Player = ({route}) => {
    const {item} = route.params;


  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.topImage}>
            <View style={styles.arrows}>
                <TouchableOpacity>
                    <Image source={down} style={styles.downArrow}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={share} style={styles.shareArrow}/>
                </TouchableOpacity>
            </View>
            <Image source={item.src} style={styles.srcImage} />
            <Button title="Play"  />
        </ImageBackground>

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
    bgImage: {
        width: '248@s',
        height: '330@s',
        alignSelf: 'center',
        marginTop: '20@s'
    },
    arrows: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '50@s'
    },
    downArrow: {
        width: '20@s',
        height: '20@s',
        marginStart: '20@s',
    },
    shareArrow: {
        width: '20@s',
        height: '20@s',
        marginEnd: '20@s'
    },
    srcImage: {
        width: '200@s',
        height: '250@s',
        alignSelf: 'center',
    }
})

export default Player