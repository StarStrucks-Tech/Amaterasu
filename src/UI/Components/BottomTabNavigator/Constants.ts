// src/constants.ts

import { Dimensions } from 'react-native';

Dimensions.get('window');

export const COLORS = {
  BG: '#FFFFFF',
  PRIMARY: '#FF6B6B',
  SECONDARY: '#4ECDC4',
  ACCENT: '#FFD93D',
  TEXT: '#1A535C',
  LIGHT_TEXT: '#F7FFF7',
  DARK_TEXT: '#2F3E46',
  LIGHT_BG: '#ADD8E6',
  DARK_BG: '#FFA07A',
  BGcolor:'#FFFFE0',
  Incolor:'#000000'
};

export const FONTS = {
  REGULAR: 'HelveticaNeue',
  BOLD: 'HelveticaNeue-Bold',
  ITALIC: 'HelveticaNeue-Italic',
};


export const SIZES = {
  // Global sizes
  BASE: 10,
  FONT: 14,
  RADIUS: 30,
  PADDING: 10,

  // Font sizes
  LARGE_TITLE: 50,
  H1: 30,
  H2: 22,
  H3: 16,
  H4: 14,
  BODY1: 30,
  BODY2: 22,
  BODY3: 16,
  BODY4: 14,
  BODY5: 12,
}
export const STYLES = {
  TAB_ICON_CONTAINER: {
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

};
  // App
