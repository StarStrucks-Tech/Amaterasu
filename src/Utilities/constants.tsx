// src/utilities/constants.tsx
export const DIMENSIONS = {
  cameraWidth: 200,
  cameraHeight: 300,
  cameraViewWidth: 200,
  cameraViewHeight: 330,
  dotSize: 15,
  buttonWidth: 250,
  buttonHeight: 28,
};

export const COLORS = {
  background: 'transparent',
  cameraBackground: 'black',
  overlayBackground: '#fafce0',
  textColor: '#333',
  buttonBackground: '#c45435',
  buttonText: 'white',
};

export const BORDER_RADIUS = {
  camera: 100,
  cameraView: Math.max(200, 330) / 2,
  button: 5,
};

export const PADDING = {
  cameraView: 10,
  overlayVertical: 20,
  overlayTop: 20,
};

export const MARGIN = {
  cameraViewTop: 30,
  cameraViewBottom: 45,
  textBottom: 10,
  dotBottom: 8,
  dotRight: 5,
  codeBottom: 15,
  buttonBottom: 10,
  buttonTextTop: 3,
};

export const FONT_SIZES = {
  text: 18,
  code: 25,
  buttonText: 15,
};
