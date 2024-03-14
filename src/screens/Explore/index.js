import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Logo from '../../components/Logo';
import { useFonts } from 'expo-font';
import styles from './styles'
import { WebView } from 'react-native-webview';

const image = require('../../images/Slider.png')
const arrowNext = require('../../images/Path.png')
const item_1 = require('../../images/item_1.png')
const item_2 = require('../../images/item_2.png')
const item_3 = require('../../images/item_3.png')

const about_1 = require('../../images/tarihce.png')
const about_2 = require('../../images/mimari.png')
const about_3 = require('../../images/kabe_ortusu.png')

const explore_1 = require('../../images/turk-islam.jpg')
const explore_2 = require('../../images/yesil-turbe.jpg')


const Explore = ({navigation}) => {
    const [loaded] = useFonts({
        Operetta: require('../../../assets/fonts/Operetta8-Regular.otf'),
        NunitoSans: require('../../../assets/fonts/NunitoSans.ttf')
    });
    if (!loaded) {
        return null;
    }
    

  return (
    <ScrollView style={styles.scrollView} >
        <View style={styles.slider}>
            <Logo />
            <Image source={image} style={styles.image} />
        </View>
        <View style={styles.hatlarEserler}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Hatlar & Eserler</Text>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Hatlar & Eserler')}>
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
        <View style={styles.aboutUlucami}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Ulu Cami Hakkında</Text>
            </View>
            <ScrollView horizontal>
                <View style={styles.aboutItems}>
                    <TouchableOpacity style={styles.subAboutItems}>
                        <Image source={about_1} style={styles.aboutImage}></Image>
                        <Text style={[styles.aboutText, {fontFamily: 'NunitoSans'}]}>Tarihçe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subAboutItems}>
                        <Image source={about_2} style={styles.aboutImage}></Image>
                        <Text style={[styles.aboutText, {fontFamily: 'NunitoSans'}]}>Mimari</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subAboutItems}>
                        <Image source={about_3} style={styles.aboutImage}></Image>
                        <Text style={[styles.aboutText, {fontFamily: 'NunitoSans'}]}>Kabe Örtüsü</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subAboutItems}>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        <View style={styles.exploreBursa}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Bursa'yı Keşfet</Text>
            </View>
            <ScrollView horizontal>
                <View style={styles.exploreItems}>
                    <TouchableOpacity style={styles.subAboutItems}>
                        <Image source={explore_1} style={styles.itemImage}></Image>
                        <Text style={[styles.itemText, {fontFamily: 'NunitoSans'}]}>Türk İslam Eserleri Müzesi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subAboutItems}>
                        <Image source={explore_2} style={styles.itemImage}></Image>
                        <Text style={[styles.itemText, {fontFamily: 'NunitoSans'}]}>Yeşil Türbe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subAboutItems}>
                        <Image source={explore_2} style={styles.itemImage}></Image>
                        <Text style={[styles.itemText, {fontFamily: 'NunitoSans'}]}>Kuzey Kapısı</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        <View style={styles.exploreBursa}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Canlı İzle</Text>
            </View>
            <ScrollView horizontal>
                <View style={styles.exploreItems}>
                    <TouchableOpacity style={styles.subAboutItems}>
                        <WebView
                            style={styles.itemImage}
                            javaScriptEnabled={true}
                            source={{ uri: "https://www.youtube.com/embed/EvdktqQOkBY?si=TSWOqx0asgt8QSi9" }} />
                        <Text style={[styles.itemText, {fontFamily: 'NunitoSans'}]}>Cuma Hutbesi</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        
    </ScrollView>
    
  )
}

export default Explore