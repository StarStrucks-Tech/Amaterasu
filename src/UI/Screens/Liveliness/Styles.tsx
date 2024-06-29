// src/UI/Screens/Frontend/styles.tsx
import { StyleSheet } from "react-native";
import { DIMENSIONS, COLORS, BORDER_RADIUS, PADDING, MARGIN, FONT_SIZES } from '../../../utilities/constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    camera: {
        width: DIMENSIONS.cameraWidth,
        height: DIMENSIONS.cameraHeight,
        borderRadius: BORDER_RADIUS.camera,
        overflow: 'hidden',
        backgroundColor: COLORS.cameraBackground,
        alignItems: 'center',
    },
    cameraView: {
        alignSelf: 'center',
        width: DIMENSIONS.cameraViewWidth,
        height: DIMENSIONS.cameraViewHeight,
        backgroundColor: COLORS.cameraBackground,
        marginTop: MARGIN.cameraViewTop,
        padding: PADDING.cameraView,
        marginBottom: MARGIN.cameraViewBottom,
        overflow: 'hidden',
        borderRadius: BORDER_RADIUS.cameraView,
    },
    overlay: {
        alignItems: 'center',
        backgroundColor: COLORS.overlayBackground,
        paddingVertical: PADDING.overlayVertical,
        paddingTop: PADDING.overlayTop,
    },
    align: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: COLORS.textColor,
        fontSize: FONT_SIZES.text,
        marginBottom: MARGIN.textBottom,
    },
    dot: {
        width: DIMENSIONS.dotSize,
        height: DIMENSIONS.dotSize,
        marginBottom: MARGIN.dotBottom,
        marginRight: MARGIN.dotRight,
    },
    code: {
        color: COLORS.textColor,
        fontSize: FONT_SIZES.code,
        marginBottom: MARGIN.codeBottom,
    },
    button: {
        backgroundColor: COLORS.buttonBackground,
        borderRadius: BORDER_RADIUS.button,
        width: DIMENSIONS.buttonWidth,
        height: DIMENSIONS.buttonHeight,
        marginBottom: MARGIN.buttonBottom,
    },
    buttonText: {
        color: COLORS.buttonText,
        textAlign: 'center',
        fontSize: FONT_SIZES.buttonText,
        fontWeight: 'bold',
        marginTop: MARGIN.buttonTextTop,
    },
});
export default styles;
