import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from "react-native-size-matters"


const arrowNext = require('../images/Path.png')
const icMekan_1 = require('../images/videos_1.jpg')

const Videos = () => {
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
        <View style={styles.photos}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>İç Mekan</Text>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('İç Mekan')}>
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
                <TouchableOpacity style={styles.buttons}>
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
                <TouchableOpacity style={styles.buttons}>
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
});

export default Videos