declare module 'lottie-react-native' {
    import { Animated, ViewProps } from 'react-native';
    import { ReactNode } from 'react';
  
    interface AnimationObject {
      v: string;
      fr: number;
      ip: number;
      op: number;
      w: number;
      h: number;
      nm: string;
      ddd: number;
      assets: any[];
      layers: any[];
    }
  
    interface LottieViewProps extends ViewProps {
      source: string | AnimationObject | { uri: string };
      resizeMode?: 'cover' | 'contain' | 'center';
      autoPlay?: boolean;
      loop?: boolean;
      speed?: number;
      progress?: number;
      hardwareAccelerationAndroid?: boolean;
      cacheStrategy?: 'none' | 'weak' | 'strong';
      imageAssetsFolder?: string;
      enableMergePathsAndroidForKitKatAndAbove?: boolean;
      renderMode?: 'AUTOMATIC' | 'HARDWARE' | 'SOFTWARE';
    }
  
    export default class LottieView extends React.Component<LottieViewProps> {
      play: () => void;
      reset: () => void;
      pause: () => void;
      resume: () => void;
    }
  }
  