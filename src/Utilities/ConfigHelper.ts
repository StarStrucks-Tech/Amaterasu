import YAML from 'js-yaml';
import fs from 'react-native-fs';


type Config = { [key: string]: any };

/**
 * Asynchronously loads a YAML configuration file from the specified file path.
 * 
 * @param {string} filePath - The relative path to the YAML configuration file.
 * @returns {Promise<Config | null>} - A promise that resolves to the loaded configuration object, or null if an error occurs.
 */
export const loadConfig = async (filePath: string): Promise<Config | null> => {
    try {
        const configString = await fs.readFileAssets(filePath);
        const config: Config = YAML.load(configString) as Config;
        return config;
    } catch (error) {
        console.error(`Error loading config file ${filePath}`, error);
        return null;
    }
};
