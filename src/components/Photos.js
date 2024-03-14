import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from "react-native-size-matters"
import Videos from './Videos';
import { Button, Center, NativeBaseProvider } from "native-base";


const arrowNext = require('../images/Path.png')
const icMekan_1 = require('../images/galeri1.jpg')

const Photos = () => {
    const [content, setContent] = useState(null);
    const [activeButton, setActiveButton] = useState('photos');
    

    const [loaded] = useFonts({
        Operetta: require('../../assets/fonts/Operetta8-Regular.otf'),
        NunitoSans: require('../../assets/fonts/NunitoSans.ttf')
    });
    if (!loaded) {
        return null;
    }
    
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.scrollView}>
        <NativeBaseProvider >
            <Center lex={1} px="3" style={styles.buttons2}>
                <Button.Group isAttached mx={{base: "auto", md: 0}} size="sm" >
                    <Button 
                        variant={activeButton === 'photos' ? 'subtle' : 'outline'} 
                        onPress={() => {setContent('photos'); setActiveButton('photos');}} 
                        width="50%" 
                        backgroundColor={activeButton === 'photos' ? 'white' : '#242424'} 
                        _text={{color: activeButton === 'photos' ? 'black' : '#929292'}}
                        borderWidth={0}>Fotoğraflar</Button>
                    <Button 
                        variant={activeButton === 'videos' ? 'subtle' : 'outline'} 
                        onPress={() => {setContent('videos'); setActiveButton('videos');}} 
                        width="50%" 
                        backgroundColor={activeButton === 'videos' ? 'white' : '#242424'} 
                        _text={{color: activeButton === 'videos' ? 'black' : '#929292'}}
                        borderWidth={0}>Videolar</Button>
                </Button.Group>
            </Center>
        </NativeBaseProvider>
        {content === 'videos' && <Videos />}
        <View style={styles.photos}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>İç Mekan</Text>
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => navigation.navigate('İç Mekan')}
                >
                    <Text style={[styles.moreButton, {fontFamily: 'NunitoSans'}]}>Daha Fazla</Text>
                    <Image source={arrowNext} style={styles.arrowNext}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <View style={styles.items}>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                </View>
            </ScrollView>
        </View>
        <View style={styles.photos}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Dış Mekan</Text>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Dış Mekan')}>
                    <Text style={[styles.moreButton, {fontFamily: 'NunitoSans'}]}>Daha Fazla</Text>
                    <Image source={arrowNext} style={styles.arrowNext}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <View style={styles.items}>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                </View>
            </ScrollView>
        </View>
        <View style={styles.photos}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Minber</Text>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Minber')}>
                    <Text style={[styles.moreButton, {fontFamily: 'NunitoSans'}]}>Daha Fazla</Text>
                    <Image source={arrowNext} style={styles.arrowNext}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal>
                <View style={styles.items}>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                    <View style={styles.subItem}>
                        <Image source={icMekan_1} style={styles.itemImage}></Image>
                    </View>
                </View>
            </ScrollView>
        </View>
    </ScrollView>
  )
}
const styles = ScaledSheet.create({
    scrollView: {
        backgroundColor: "#181818",
    },
    photos: {
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
        height: '163@s',
    },
    buttons2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10@s',
    },
});


export default Photos