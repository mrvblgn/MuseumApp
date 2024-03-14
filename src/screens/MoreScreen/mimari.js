import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font';


const background = require('../../images/Bg.png') 
const back = require('../../images/Back.png')
const share = require('../../images/Share.png')

const Mimari = ({navigation}) => {
    const [loaded] = useFonts({
        Operetta: require('../../../assets/fonts/Operetta8-Regular.otf'),
        NunitoSans: require('../../../assets/fonts/NunitoSans.ttf')
    });
    if (!loaded) {
        return null;
    }

    const [isExpanded, setIsExpanded] = useState(false);
    const fullText = `Evliya Çelebi’nin ifadesiyle Bursa’ nın Ayasofya’sıdır.

Ulu camiyi gezenler 3 tane kapısı olduğunu çok iyi bilirler. Somuncu baba caminin yapıldığı sıra buraya gelir işçilere hayrına somun dağıtırmış.
Somuncu baba bir gün gene orda ekmek dağıtırken Hızır a.s'ın orda olduğu fark etmiş, kolundan tutup "sen Hızırsın anladı`

  return (
    <View style={styles.container}>
        <ScrollView>
            <ImageBackground source={require('../../images/guide-dogu-kapisi.jpg')} style={styles.topImage}>
                <ImageBackground source={background} style={styles.bgImage}>
                    <View style={styles.arrows}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={back} style={styles.backArrow}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={share} style={styles.shareArrow}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                    
                <Text style={styles.imageText}>Tarihçe</Text>
            </ImageBackground>

            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <Text style={styles.aciklamaText}>
                    {isExpanded ? fullText : fullText.substring(0, 250) + "... "}
                    {!isExpanded && <Text style={styles.buttonText} onPress={() => setIsExpanded(true)}>Daha fazla</Text>}
                </Text>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    topImage: {
        width: '100%',
        height: '343@s',
    },
    bgImage: {
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
        marginStart: '20@s'
    },
    shareArrow: {
        width: '20@s',
        height: '20@s',
        marginEnd: '20@s'
    },
    imageText: {
        fontFamily: 'Operetta',
        fontSize: '30@s',
        color: 'white',
        marginTop: '150@s',
        marginStart: '15@s'
    },
    aciklamaText: {
        fontFamily: 'NunitoSans',
        fontSize: '16@s',
        color: '#BCBCBC',
        margin: '10@s'
    },
    buttonText: {
        color: '#EED1AF',
        textDecorationLine: 'underline',
    },

})

export default Mimari