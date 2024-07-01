import { StyleSheet } from 'react-native';

//Style for Terms & Conditions Screen
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffe4',
        padding: 5,
    },
    heading: {
        marginHorizontal: 90,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,

    },
    buttonImage: {
        height: 22,
        width: 25,
        marginRight: 10,
    },
    topText: {
        marginHorizontal: 30,
        fontSize: 13,
        paddingHorizontal: 30,
        color: '#6c758d',
        textAlign: 'center'
    },
    consentRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    termButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#495057',
        padding: 5,
        borderColor: '#f4f1de',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 135,
        marginHorizontal: 23,
    
    },
    secureButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#495057',
        padding: 5,
        borderColor: '#f4f1de',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 135,
        margin: 10,
    },
    termsSecureButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    },
    image: {
        width: 35,
        height: 35,
        marginRight: 10,
        alignSelf: 'center'
    },
    topImage: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        margin:50,
    },
    text: {
        flex: 1,
        fontSize: 11,
        color: '#333',
        marginLeft: 10
    },
    checkbox: {
        justifyContent: 'flex-end',
        marginHorizontal: 15,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#d05f33',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        width: 270,
        height: 33,
        marginBottom: 10,

    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 35

    },
    arrow: {
        height: 25,
        width: 20,
        marginRight: 30,
        marginLeft:10,
    },
    alertContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    alertContent: {
        backgroundColor: '#042319',
        padding: 20,
        height: 180,
        width: 300,
        borderRadius: 20,
        paddingVertical: 10,
    },
    alertTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
    },
    alertMessage: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 5,
        marginHorizontal: 20,
    },
    okButton: {
        backgroundColor: '#c45435',
        borderRadius: 10,
        marginLeft: 180,
        marginTop: 30,
        width: 80,
        height: 35,
    },
    okButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
});

export default styles;