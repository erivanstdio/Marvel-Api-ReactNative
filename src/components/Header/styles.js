import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#102050',        
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
    },
    logo: {
        height: 48,
        width: 120,
    },
    text: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 30,
        fontFamily: 'BebasNeue-Regular',
    },
    glass: {
        marginLeft: 50,
        tintColor: '#fff',
        height: 20,
        width: 20,
    }
    
})

export default styles;