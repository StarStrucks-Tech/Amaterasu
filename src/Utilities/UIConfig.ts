import { loadConfig } from './ConfigHelper';

const loadAllConfigs = async () => {
    const DefinedColors = await loadConfig('../UI-Constants/Colors.yaml');
    const DefinedDesign = await loadConfig('../UI-Constants/Designs.yaml');
    const DefinedErrors = await loadConfig('../UI-Constants/Errors.yaml');
    const FontSizeWeightFamily = await loadConfig('../UI-Constants/FontSizeWeightFamily.yaml');
    const DateTimeFormate = await loadConfig('../UI-Constants/DateTimeFormate.yaml');
    const TimeDuration = await loadConfig('../UI-Constants/TimeDuration.yaml');
    const PlaceHolder = await loadConfig('../UI-Constants/PlaceHolder.yaml');

    return {
        DefinedColors,
        DefinedDesign,
        DefinedErrors,
        FontSizeWeightFamily,
        DateTimeFormate,
        TimeDuration,
        PlaceHolder
    };
};

export const Configs = loadAllConfigs();
