import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font';


const background = require('../../images/Bg.png') 
const back = require('../../images/Back.png')
const next = require('../../images/Next.png')
const share = require('../../images/Share.png')
const play = require('../../images/Play.png')
const map = require('../../images/Map.png')
const headphonesIcon = require('../../images/Icon.png')
const close = require('../../images/close.png')

const ContentDetail = ({route, navigation}) => {
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

    const [modalVisible, setModalVisible] = useState(false);

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
                <Image source={item.src} style={styles.bgImage} />
            </ImageBackground>

            <Text style={styles.imageText}>Allah celle celâlühû-Muhammed sallallâhü aleyhi ve sellem</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.imageText2}>Güney Cephe 3. Sütun</Text>
            </View>            

            <View>
                <View style={styles.line} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Eser Sahibi', {item})}>
                    <Text style={styles.buttonText}>Eser Sahibi</Text>
                    <Image style={styles.nextImage} source={next} />
                </TouchableOpacity>
                <View style={styles.line} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <Text style={styles.aciklamaText}>
                    {isExpanded ? fullText : fullText.substring(0, 250) + "... "}
                    {!isExpanded ? 
                        <Text style={styles.descriptionButton} onPress={() => setIsExpanded(true)}>Daha fazla</Text>
                        :
                        <Text onPress={() => setIsExpanded(false)}>
                            <Text>{" "}</Text>
                            <Text style={styles.descriptionButton}>Daha az</Text>
                        </Text>
                    }
                </Text>
            </View>

            <View>
                <View style={styles.line} />
                <TouchableOpacity 
                    style={styles.playButtons}
                    onPress={() => setModalVisible(true)}
                    >
                    <Image source={play} style={styles.play}/>
                    <Text style={styles.buttonText}>İçeriği Dinle</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.buttonClose}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('Player', {item});
                                }}
                            >
                                <Image source={close} style={styles.nextImage} />
                            </TouchableOpacity>
                            <ImageBackground source={headphonesIcon} style={styles.headphonesIcon}>
                                <Text style={styles.headphonesText}>Lütfen Dikkat!</Text>
                            </ImageBackground>

                            <Text style={styles.uyariText}>
                                <Text>Sesli kayıtlarımızı dinlemeden önce kulaklığınızı taktığınızdan emin olunuz.</Text>
                                <Text>{"\n\n"}</Text>
                                <Text>Lütfen ibadete engel olmayınız.</Text>
                            </Text>

                        </View>
                    </View>
                </Modal>

                <View style={styles.line} />
                <TouchableOpacity style={styles.playButtons} onPress={() => navigation.navigate('Camideki Konumu', {item})}>
                    <Image source={map} style={styles.play}/>
                    <Text style={styles.buttonText}>Cami İçerisindeki Konumu</Text>
                </TouchableOpacity>
                <View style={styles.line} />
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
    imageText: {
        fontFamily: 'Operetta',
        fontSize: '30@s',
        color: 'white',
        marginTop: '320@s',
        marginStart: '15@s'
    },
    imageText2: {
        color: '#BCBCBC',
        fontFamily: 'NunitoSans',
        fontSize: '14@s',
        marginStart: '15@s',
        marginTop: '5@s',
        marginBottom: '10@s'
    },
    line: {
        height: '0.2@s',
        width: '320@s',
        backgroundColor: '#BCBCBC',
        marginVertical: '10@s',
        alignSelf: 'center'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '20@s',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'NunitoSans',
        fontSize: '18@s',
    },
    nextImage: {
        width: '16@s',
        height: '16@s'
    },
    aciklamaText: {
        fontFamily: 'NunitoSans',
        fontSize: '16@s',
        color: '#BCBCBC',
        margin: '10@s'
    },
    descriptionButton:{
        color: '#EED1AF',
        textDecorationLine: 'underline',
    },
    playButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: '20@s',
        alignItems: 'center'
    },
    play: {
        width: '24@s',
        height: '24@s',
        marginRight: '10@s'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
    },
    modalView: {
        flex: 1,
        backgroundColor: "#000000F2",
        alignItems: "center",
        elevation: 5,
        width: '100%',
        height: '100%',
    },
    buttonClose: {
        position: 'absolute',
        top: '20@s',
        left: '20@s',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    headphonesIcon: {
        width: '240@s',
        height: '240@s',
        marginTop: '60@s'
    },
    headphonesText: {
        fontSize: '30@s',
        fontFamily: 'Operetta',
        color: '#EED1AF',
        marginTop: '190@s',
        alignSelf: 'center'
    },
    uyariText: {
        color: '#BCBCBC',
        fontSize: '18@s',
        fontFamily: 'NunitoSans',
        textAlign: 'center',
    }

})

export default ContentDetail