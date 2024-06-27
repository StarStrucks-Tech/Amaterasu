import { StyleSheet } from 'react-native';

//Style for Biometric consent screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lightMode: {
        backgroundColor: '#fafce0',
    },
    darkMode: {
        backgroundColor: '#193d3b',
    },

    align: {
        justifyContent: "space-around",
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginLeft: 18,


    },
    lock: {
        width: 22,
        height: 22,
        marginRight: 75,
        marginTop: 10,
    },
    header: {
        marginHorizontal: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 18,

    },
    lightHeader: {
        color: '#333',
    },
    darkHeader: {
        color: '#fff',
    },
    topText: {
        fontSize: 18,
        fontWeight: 'light',
        marginBottom: 15,
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
        width: 40,
        marginRight: 35,
    },
    para: {
        marginHorizontal: 25,
        fontSize: 15,
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
        width: 200,
        height: 190,
        marginVertical: 40,
        marginLeft: 50,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#c45435',
        borderRadius: 10,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        width: 300,
        height: 40,
        marginBottom: 10,

    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;