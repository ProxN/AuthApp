// import original module declarations
import 'styled-components';

interface IColor {
  light: string;
  main: string;
  dark: string;
}

interface ITextColor {
  main: string;
  secondary: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: IColor;
      secondary: IColor;
      danger: IColor;
      success: IColor;
      info: IColor;
      warining: IColor;
      text: ITextColor;
      textInverse: ITextColor;
      border: {
        gray1: string;
        gray2: string;
        gray3: string;
      };
      bg: string;
      bgInverse: string;
    };
    lineHeight: number;
    fontFamily: string;
    fontSizes: number[];
    fontSizeBase: number;
    fontWeights: number[];
    borderRadius: string;
  }
}
