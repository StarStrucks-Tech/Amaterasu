import { StyleSheet } from 'react-native';

//Style for Biometric consent screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:4,
    },
    lightMode: {
        backgroundColor: '#ffffe4',
    },
    darkMode: {
        backgroundColor: '#042319',
    },

    align: {
        justifyContent: "space-around",
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginLeft: 25,


    },
    lock: {
        width: 20,
        height: 20,
        marginRight:90,
        marginTop: 10,
    },
    header: {
        marginHorizontal: 60,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        margin: 20,

    },
    lightHeader: {
        color: '#333',
    },
    darkHeader: {
        color: '#fff',
    },
    topText: {
        fontSize: 16,
        fontWeight: 'light',
        marginBottom: 8,
        color: '#6c757d',
        textAlign: 'center',
        marginLeft: 30,
    },
    lightTopText: {
        color: '#6c757d',
    },
    darkTopText: {
        color: '#fff',
    },
    arrow: {
        height: 25,
        width: 25,
        marginRight: 40,
        marginLeft:10,
    },
    para: {
        marginHorizontal: 25,
        fontSize: 14,
        marginBottom: 20,
        color: '#495057',
        textAlign: 'center',
    },
    lightPara: {
        color: '#495057',
    },
    darkPara: {
        color: '#fff',
    },

    image: {
        alignSelf: 'center',
        width: 360,
        height: 300,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d05f33',
        borderRadius: 10,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        width: 300,
        height: 35,
        marginBottom: 10,

    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    alignImage:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-around",
    },
});

export default styles;