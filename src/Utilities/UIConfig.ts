import { loadConfig } from './ConfigHelper';

export const DefinedColors = await loadConfig('./src/UI-Constants/Colors.yaml');
export const DefinedDesign = await loadConfig('./src/UI-Constants/Designs.yaml');
export const DefinedErrors = await loadConfig('./src/UI-Constants/Errors.yaml');
export const FontSizeWeightFamily = await loadConfig('./src/UI-Constants/FontSizeWeightFamily.yaml');
export const DateTimeFormate = await loadConfig('./src/UI-Constants/DateTimeFormate.yaml');
export const TimeDuration = await loadConfig('./src/UI-Constants/TimeDuration.yaml');
export const PlaceHolder = await loadConfig('./src/UI-Constants/PlaceHolder.yaml');
