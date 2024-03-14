import { ScaledSheet } from "react-native-size-matters"

export default styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181818",
    },
    bgImage: {
        width: '100%',
        height: '124@s',
    },
    header: {
        fontFamily: 'Operetta',
        fontSize: '24@s',
        color: 'white',
        textAlign: 'center',
        marginTop: '50@s'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '50@s',
    },
})