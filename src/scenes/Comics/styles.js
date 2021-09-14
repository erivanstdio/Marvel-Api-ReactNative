import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1, 
        backgroundColor: '#101040', 
        borderColor: 'purple',
        borderRightWidth: 1,
        borderLeftWidth: 1, 
        borderTopWidth: 1,
    },
    container: {
        backgroundColor: '#101040',
    },
    flatList: {
        borderColor: 'purple', 
        borderTopWidth: 1,
        paddingTop: 10, 
        marginBottom: 70,
    }
})

export default styles;