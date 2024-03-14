import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font';


const background = require('../../images/Bg.png') 
const back = require('../../images/Back.png')
const share = require('../../images/Share.png')
const arrowNext = require('../../images/Path.png')
const item_1 = require('../../images/item_1.png')
const item_2 = require('../../images/item_2.png')
const item_3 = require('../../images/item_3.png')

const EserSahibi = ({route, navigation}) => {
    const {item} = route.params;

    const [loaded] = useFonts({
        Operetta: require('../../../assets/fonts/Operetta8-Regular.otf'),
        NunitoSans: require('../../../assets/fonts/NunitoSans.ttf')
    });
    if (!loaded) {
        return null;
    }

    const [isExpanded, setIsExpanded] = useState(false);
    const fullText = item.description;

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
                <Text style={styles.text1}>{item.eserSahibi}</Text>
                <Text style={styles.text2}>{item.eserSahibiTarih}</Text>
            </ImageBackground>
            <View style={styles.bilgiContainer}>
                <Text style={styles.bilgiText}>
                    {isExpanded ? fullText : fullText.substring(0, 320) + "... "}
                    {!isExpanded && <Text style={styles.buttonText} onPress={() => setIsExpanded(true)}>Daha fazla</Text>}
                </Text>
            </View>

            <View style={styles.hatlarEserler}>
                <View style={styles.title}>
                    <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Tüm Eserleri</Text>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Güney Cephesi')}>
                        <Text style={[styles.moreButton, {fontFamily: 'NunitoSans'}]}>Daha Fazla</Text>
                        <Image source={arrowNext} style={styles.arrowNext}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    <View style={styles.items}>
                        <View style={styles.subItem}>
                            <Image source={item_1} style={styles.itemImage}></Image>
                            <Text style={styles.itemText}>Allah celle celâlühû-Muhammed...</Text>
                        </View>
                        <View style={styles.subItem}>
                            <Image source={item_2} style={styles.itemImage}></Image>
                            <Text style={styles.itemText}>Bismillâhirrahmânirrahîm ve bihî</Text>
                        </View>
                        <View style={styles.subItem}>
                            <Image source={item_3} style={styles.itemImage}></Image>
                            <Text style={styles.itemText}>Allah celle celâlühû-Muhammed...</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
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
    bilgiContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        marginTop: '50@s'
    },
    bilgiText: {
        fontFamily: 'NunitoSans',
        fontSize: '16@s',
        color: '#BCBCBC',
        margin: '10@s'
    },
    buttonText: {
        color: '#EED1AF',
        textDecorationLine: 'underline',
    },
    hatlarEserler: {
        marginTop: '30@vs',
        marginStart: '15@s',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontSize: '20@s',
    },
    buttons: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        marginEnd: '15@s',
    
    },
    moreButton: {
        color: '#EED1AF',
        marginEnd: '10@s',
        fontSize: '14@s',
        alignSelf: 'center',
    },
    arrowNext: {
        width: '8@s',
        height: '8@s',
        alignSelf: 'center',
    },
    items: {
        flex: 1,
        flexDirection: 'row',
    },
    subItem: {
        marginRight: '10@s',
        marginTop: '10@vs',
    },
    itemText: {
        color: '#BCBCBC',
        fontSize: '16@s',
        width: '163@s',
        marginTop: '8@vs',
    },
    itemImage: {
        width: '163@s',
        height: '218@s',
    },
})

export default EserSahibi