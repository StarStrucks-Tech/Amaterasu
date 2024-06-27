import YAML from 'js-yaml';
import fs from 'react-native-fs'; // npm install react-native-fs

const loadConfig = async (filePath) => {
    try {
        const configString = await fs.readFileAssets(filePath);
        const config = YAML.load(configString);
        return config;
    } catch (error) {
        console.error(`Error loading config file ${filePath}`, error);
        return null;
    }
};

export const DefinedColors = await loadConfig('./src/UI-Constants/Colors.yaml');
export const DefinedDesign = await loadConfig('./src/UI-Constants/Designs.yaml');
export const DefinedErrors = await loadConfig('./src/UI-Constants/Errors.yaml');
export const FontSizeWeightFamily = await loadConfig('./src/UI-Constants/FontSizeWeightFamily.yaml');
export const DateTimeFormate = await loadConfig('./src/UI-Constants/DateTimeFormate.yaml');
export const TimeDuration = await loadConfig('./src/UI-Constants/TimeDuration.yaml');
export const PlaceHolder = await loadConfig('./src/UI-Constants/PlaceHolder.yaml');
