import { ScaledSheet } from "react-native-size-matters"

export default styles = ScaledSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#181818",
  },
  slider: {
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
  image: {
      width: '320@s',
      height: '320@s',
      marginTop: '20@vs',
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
  aboutUlucami: {
    marginTop: '30@vs',
    marginStart: '15@s',
  },
  aboutItems: {
    flex: 1,
    flexDirection: 'row',
  },
  subAboutItems: {
    marginRight: '10@s',
    marginTop: '10@vs',
  },
  aboutImage: {
    width: '104@s',
    height: '104@s',
  },
  aboutText: {
    color: '#BCBCBC',
    fontSize: '16@s',
    marginTop: '8@vs',
    textAlign: 'center',
  },
  exploreBursa: {
    marginTop: '30@vs',
    marginStart: '15@s',
  },
  exploreItems: {
    flex: 1,
    flexDirection: 'row',
  },
  
})
