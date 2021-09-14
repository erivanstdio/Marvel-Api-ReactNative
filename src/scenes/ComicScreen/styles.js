import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000030',
    },
    comicInfo: {
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 40,
    },
    bigTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        width: 360,
        fontFamily: 'BebasNeue-Regular',
    },
    mediumTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 36,
        width: 360,
        fontFamily: 'BebasNeue-Regular',
    },
    smallTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 36,
        width: 360,
        fontFamily: 'BebasNeue-Regular',
    },
    image: {
        borderWidth: 1,
        borderColor: 'purple',
        marginTop: 40,
        height: 345,
        width: 230,
    },
    type: {
        textAlign: 'center',
        width: 230,
        height: 22,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        color: '#fff',
        backgroundColor: '#ee0000'
    },


    counterBox: {
        margin: 30,
        flexDirection: 'row',
    },
    counter: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
    }, 
    quantityText: {
        color: '#fff',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'red',
    },


    checkoutBox: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    price: {
        fontSize: 30,
        fontFamily: 'BebasNeue-Regular',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#fff',
        marginHorizontal: 5,
    },
    toStore: {
        flexDirection: 'row',
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 6,
        backgroundColor: '#ee0000',
        justifyContent: 'center',
    },
    toStoreText: {
        width: 80,
        fontSize: 13,
        textAlign: 'center',
        color: '#fff',
        alignSelf: 'center'
    },
    checkoutCart: {
        marginRight: 5,
        marginLeft: 5,
        tintColor: 'white',
        height: 25,
        width: 25,
        alignSelf: 'center'
    }

})

export default styles;