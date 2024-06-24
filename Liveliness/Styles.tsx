import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    camera: {
        width: 200,
        height: 300,
        borderRadius: 100,
        overflow: 'hidden',
        backgroundColor: 'black',
        alignItems: 'center',

    },
    cameraView: {
        alignSelf: 'center',
        width: 200,
        height: 330,
        backgroundColor: 'black',
        marginTop: 30,
        padding: 10,
        marginBottom: 45,
        overflow: 'hidden',
        borderRadius: Math.max(200, 330) / 2,
      },
    overlay: {
        alignItems: 'center',
        backgroundColor: '#fafce0',
        paddingVertical: 20,
        paddingTop: 20,
    },
    align:{
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: '#333',
        fontSize: 18,
        marginBottom: 10,
    },
    dot: {
        width: 15,
        height: 15,
        marginBottom:8,
        marginRight:5,
        //marginRight: 75,
        //marginTop: 10,
    },
    code: {
        color: '#333',
        fontSize: 25,
        marginBottom: 15,

    },
    button: {
        backgroundColor: '#c45435',
        borderRadius: 5,
        width: 250,
        height: 28,
        marginBottom: 10,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop:3,
    },
});
export default styles