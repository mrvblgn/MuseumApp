import { View, TouchableOpacity, Modal, Image, FlatList, Text } from 'react-native'
import React, {useState} from 'react'
import { ScaledSheet } from "react-native-size-matters"
import Swiper from 'react-native-swiper';

const IcMekan = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    require('../../images/muse.jpg'),
    require('../../images/splash_screen.png'),
    require('../../images/turk-islam.jpg'),
  ]

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {setSelectedImage(item); setModalVisible(true);}}>
      <Image source={item} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Her satırda 2 fotoğraf olacak
        contentContainerStyle={styles.flatListContent} 
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Swiper style={styles.wrapper} showsButtons={true} 
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            dotColor='white'
            activeDotColor='#666666'>
            {images.map((image, index) => (
              <Image key={index} source={image} style={styles.modalImage} />
            ))}
          </Swiper>

          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Image source={require('../../images/close.png')} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#181818",
    },
    flatListContent: {
      paddingHorizontal: '15@ms', // Ekranda sağ ve sol tarafta 20 birim boşluk oluşturur
    },
    image: {
      width: '167@ms',
      height: '167@ms',
      margin: '5@ms',
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'black'
    },
    modalView: {
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
    },
    modalImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    closeButton: {
      position: 'absolute',
      top: '50@ms',
      left: '20@ms',
    },
    wrapper: {},
    modalImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    buttonText: {
      fontSize: '40@ms',
      color: 'white',
    },
})

export default IcMekan