import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    comic:{
        marginHorizontal: 18,
        marginBottom: 20,
        alignItems: 'center',
    },
    
    mediumTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        width: 148,
        height: 40,
        fontFamily: 'BebasNeue-Regular',
    },
    smallTitle: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        width: 148,
        height: 40,
        fontFamily: 'BebasNeue-Regular',
    },

    comicCover: {
        height: 237,
        width: 158,
        marginTop: 4,
    },




    priceBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#400050',
        height: 40,
        width: 158,
        marginBottom: 5,
    },
    priceText: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 16,
        color: '#fff',
        marginHorizontal: 2,
        borderRadius: 5,
    },
    priceType: {
        fontSize: 9,
        color: '#fff',
        marginHorizontal: 3,
        borderRadius: 3,
        fontWeight: 'bold',
    }

})

export default styles;