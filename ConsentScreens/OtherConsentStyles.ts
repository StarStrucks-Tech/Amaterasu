import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fafce0',
        paddingBottom: 10,
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,

    },
    para: {
        marginHorizontal: 30,
        fontSize: 15,
        marginBottom: 5,
        color: '#333',
        textAlign: 'center'
    },
    consentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    locationConsentContainer: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        paddingHorizontal: 10,

    },
    notificationsConsentContainer: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        marginHorizontal: 10,
    },
    image: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    },
    permission: {
        alignSelf: 'center',
        width: 360,
        height: 250,
    },
    text: {
        fontSize: 11,
        color: '#333',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    checkbox: {
        justifyContent: 'flex-end',
        marginLeft: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    button: {
        backgroundColor: '#c45435',
        borderRadius: 10,
        paddingHorizontal: 20,
        width: 280,
        height: 35,

    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    agreeText: {
        flex: 1,
        fontSize: 13,
        color: '#333',
        marginLeft: 10
    },
    alertContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    alertContent: {
        backgroundColor: '#193d3b',
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