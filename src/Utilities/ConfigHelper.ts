import YAML from 'js-yaml';
import fs from 'react-native-fs'; // npm install react-native-fs

// Define the type of the configuration object, adjust it based on the actual structure
type Config = { [key: string]: any };

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
