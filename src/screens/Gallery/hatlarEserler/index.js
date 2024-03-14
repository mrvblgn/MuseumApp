import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { ScaledSheet } from "react-native-size-matters"


const arrowNext = require('../../../images/Path.png')
const item_1 = require('../../../images/item_1.png')
const item_2 = require('../../../images/item_2.png')
const item_3 = require('../../../images/item_3.png')

const HatlarEserler = ({navigation}) => {
  const [loaded] = useFonts({
    Operetta: require('../../../../assets/fonts/Operetta8-Regular.otf'),
    NunitoSans: require('../../../../assets/fonts/NunitoSans.ttf')
  });
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.hatlarEserler}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Güney Cephesi</Text>
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
      <View style={styles.hatlarEserler}>
            <View style={styles.title}>
                <Text style={[styles.text, {fontFamily: 'Operetta'}]}>Batı Cephesi</Text>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Batı Cephesi')}>
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
  )
}

const styles = ScaledSheet.create({
  scrollView: {
    backgroundColor: "#181818",
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

export default HatlarEserler