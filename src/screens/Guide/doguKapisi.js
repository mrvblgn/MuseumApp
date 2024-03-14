import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font';

const headPhones = require('../../images/headphones.png')
const titleHeadphones = require('../../images/Group.png')
const titleGaleri = require('../../images/Normal.png')
const eser_1 = require('../../images/item_1.png')
const eser_2 = require('../../images/item_2.png')
const next = require('../../images/Next.png')
const back = require('../../images/Back.png')
const background = require('../../images/Bg.png')    
const share = require('../../images/Share.png')
const sound_1 = require('../../sounds/1.mp3')
const sound_2 = require('../../sounds/2.mp3')
const konum = require('../../images/konum.png')

const eserler = [
    { id: '1', src: eser_1, text: 'Eser Adı', subText: 'Alt Başlık & Tarih', description: `Mihrabın üstünde görülen bu büyük yazıda celî sülüs olarak “Allah celle celâlühû-Muhammed sallallâhü aleyhi ve sellem” ifadeleri yer almaktadır. Sol kısımda daha küçük harflerle “Kâle’llâhü Te’âlâ”: “Allah buyurdu ki” denildikten sonra sağ alttan başlayarak miraçla ilgili İsra sûresindeki ayet kûfi hat ve beyaz renkle işlenmiştir: “Sübhânellezî esrâ bi-abdihî leylen mine’l-mescidi’l-harâmi ile’l-mescidi’laksâ” “Kulunu bir gece Mescid-i Haram’dan Mescid-i Aksâ’ya götüren Allah’ın şanı yücedir ve O kusurdan münezzehtir.”
Bunun devamı olacak şekilde bu kez Necm sûresindeki miraç ayetleri aynı hat ve renkle yazılmıştır: “Sümme denâ fetedellâ, fe-kâne kâbe kavseyni ev ednâ” yani “Sonra yaklaştı ve iyice sokuldu, öyle ki (mesafe) yayın iki ucu arası kadar hattâ daha da azdı”.
Mihrabın hemen üzerinde yer alan bu ayetler bize, Allah’a yakın olmak için O’na yönelen bir ruhla secdede eğilip manada yükselmek imkânı bulunduğunu hatırlatmaktadırlar. Zaten Allah ve Muhammed lafızlarının altlı üstlü duruşu ve ayetlerin bu yolculuğu resmeder gibi olayların sırasına göre aşağıdan yukarıya doğru tanzimi, bu yükselişin en muhteşem örneğine bir telmihtir.`,
        sound: sound_1, eserSahibi: 'Eser Sahibi', eserSahibiTarih: '1503 - 1599', eserSahibiBilgi: `Mihrabın üstünde görülen bu büyük yazıda celî sülüs olarak “Allah celle celâlühû-Muhammed sallallâhü aleyhi ve sellem” ifadeleri yer almaktadır. Sol kısımda daha küçük harflerle “Kâle’llâhü Te’âlâ”: “Allah buyurdu ki” denildikten sonra sağ alttan başlayarak miraçla ilgili İsra sûresindeki ayet kûfi hat ve beyaz renkle işlenmiştir: “Sübhânellezî`,
        camidekiKonumu: konum, bulunduguYer: 'Güney Cephe 3. Sütun'
    },

    { id: '2', src: eser_2, text: 'Eser Adı', subText: 'Alt Başlık & Tarih', description: `Mihrabın üstünde görülen bu büyük yazıda celî sülüs olarak “Allah celle celâlühû-Muhammed sallallâhü aleyhi ve sellem” ifadeleri yer almaktadır. Sol kısımda daha küçük harflerle “Kâle’llâhü Te’âlâ”: “Allah buyurdu ki” denildikten sonra sağ alttan başlayarak miraçla ilgili İsra sûresindeki ayet kûfi hat ve beyaz renkle işlenmiştir: “Sübhânellezî esrâ bi-abdihî leylen mine’l-mescidi’l-harâmi ile’l-mescidi’laksâ” “Kulunu bir gece Mescid-i Haram’dan Mescid-i Aksâ’ya götüren Allah’ın şanı yücedir ve O kusurdan münezzehtir.”
Bunun devamı olacak şekilde bu kez Necm sûresindeki miraç ayetleri aynı hat ve renkle yazılmıştır: “Sümme denâ fetedellâ, fe-kâne kâbe kavseyni ev ednâ” yani “Sonra yaklaştı ve iyice sokuldu, öyle ki (mesafe) yayın iki ucu arası kadar hattâ daha da azdı”.
Mihrabın hemen üzerinde yer alan bu ayetler bize, Allah’a yakın olmak için O’na yönelen bir ruhla secdede eğilip manada yükselmek imkânı bulunduğunu hatırlatmaktadırlar. Zaten Allah ve Muhammed lafızlarının altlı üstlü duruşu ve ayetlerin bu yolculuğu resmeder gibi olayların sırasına göre aşağıdan yukarıya doğru tanzimi, bu yükselişin en muhteşem örneğine bir telmihtir.`,
        sound: sound_2, eserSahibi: 'Eser Sahibi', eserSahibiTarih: '1503 - 1599', eserSahibiBilgi: `Mihrabın üstünde görülen bu büyük yazıda celî sülüs olarak “Allah celle celâlühû-Muhammed sallallâhü aleyhi ve sellem” ifadeleri yer almaktadır. Sol kısımda daha küçük harflerle “Kâle’llâhü Te’âlâ”: “Allah buyurdu ki” denildikten sonra sağ alttan başlayarak miraçla ilgili İsra sûresindeki ayet kûfi hat ve beyaz renkle işlenmiştir: “Sübhânellezî`,
        camidekiKonumu: konum, bulunduguYer: 'Güney Cephe 3. Sütun'
    },
]

const DoguKapisi = ({navigation}) => {
    const [loaded] = useFonts({
        Operetta: require('../../../assets/fonts/Operetta8-Regular.otf'),
        NunitoSans: require('../../../assets/fonts/NunitoSans.ttf')
    });
    if (!loaded) {
        return null;
    }

    const [isExpanded, setIsExpanded] = useState(false);

    const fullText = "Mihrabın üstünde görülen bu büyük yazıda celî sülüs olarak “Allah celle celâlühû-Muhammed sallallâhü aleyhi ve sellem” ifadeleri yer almaktadır. Sol kısımda daha...";

  return (
    <View style={styles.container}>
        <FlatList 
            ListHeaderComponent={
                <>
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
                    
                        <Text style={styles.imageText}>Doğu Kapısı</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={titleHeadphones} style={styles.titleHeadphones}/>
                            <Text style={styles.imageText2}>Türkçe & İngilizce</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={ titleGaleri } style={styles.titleGaleri}/>
                                <Text style={styles.imageText3}>40 Hat & Eser</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Text style={styles.aciklamaText}>
                            {isExpanded ? fullText : fullText.substring(0, 140) + "... "}
                            {!isExpanded && <Text style={styles.buttonText} onPress={() => setIsExpanded(true)}>Daha fazla</Text>}
                        </Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Hatlar & Eserler</Text>
                        <TouchableOpacity style={styles.dinleContainer}>
                            <Image source={headPhones} style={styles.headPhones}/>
                            <Text style={styles.dinleText}>Tümünü Dinle</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </>
            }
            data={eserler}
            renderItem={({ item }) => (
                <>
                <TouchableOpacity 
                    style={styles.listeContainer} 
                    onPress={() => navigation.navigate('ContentDetail', {item})}
                >
                    <Image source={item.src} style={styles.eserImage}/>
                    <View style={styles.listeText}>
                        <Text style={styles.text}>{item.text}</Text>
                        <Text style={styles.subText}>{item.subText}</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.nextButton}
                        onPress={() => navigation.navigate('ContentDetail', {item})}
                    >
                        <Image source={next} style={styles.nextButtonImage}/>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{height: 0.4, width: '90%', backgroundColor: '#BCBCBC', marginVertical: 10, alignSelf: 'center'}} />
                </>
            )}
        />
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
    titleHeadphones: {
        marginStart: '17@s',
        margin: '10@s',
        width: '16@s',
        height: '16@s'
    },
    imageText2: {
        color: '#BCBCBC',
        fontFamily: 'NunitoSans',
        fontSize: '14@s',
    },
    titleGaleri: {
        marginStart: '20@s',
        margin: '10@s',
        width: '16@s',
        height: '16@s'
    },
    imageText3: {
        color: '#BCBCBC',
        fontFamily: 'NunitoSans',
        fontSize: '14@s',
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
    title: {
        flexDirection: 'row',
    },
    titleText: {
        fontFamily: 'Operetta',
        fontSize: '20@s',
        color: 'white',
        margin: '12@s',
    },
    dinleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: '68@s'
    },
    headPhones: {
        width: '15@s',
        height: '15@s'
    },
    dinleText: {
        color: '#EED1AF',
        fontFamily: 'NunitoSans',
        fontSize: '14@s',
        marginStart: '7@s'
    },
    listeContainer: {
        flexDirection: 'row',
    },
    eserImage: {
        width: '64@s',
        height: '64@s',
        margin: '10@s',
        marginStart: '20@s'
    },
    listeText: {
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontFamily: 'NunitoSans',
        fontSize: '18@s',
    },
    subText: {
        color: '#BCBCBC',
        fontFamily: 'NunitoSans',
        fontSize: '14@s',
    },
    nextButton: {
        justifyContent: 'center',
    },
    nextButtonImage: {
        width: '16@s',
        height: '16@s',
        marginStart: '110@s'
    }
    
})

export default DoguKapisi