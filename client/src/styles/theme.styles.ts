import { DefaultTheme } from 'styled-components';

const fontSizes = [12, 14, 16, 18, 24, 34, 48, 58, 72];

const colors = {
  primary: {
    light: '#71b7e6',
    main: '#48a2df',
    dark: '#2a7aaf',
  },
  secondary: {
    light: '#f5a092',
    main: '#f28573',
    dark: '#d86b59',
  },
  danger: {
    light: '#ee8277',
    main: '#e95e50',
    dark: '#d04436',
  },
  success: {
    light: '#6ddb9c',
    main: '#43d17f',
    dark: '#29b866',
  },
  info: {
    light: '#7fe6fc',
    main: '#5adffb',
    dark: '#41c5e2',
  },
  warining: {
    light: '#e0874d',
    main: '#d7651a',
    dark: '#be4c00',
  },
  text: {
    main: '#000',
    secondary: '#333',
  },
  textInverse: {
    main: '#fff',
    secondary: '#BDBDBD',
  },
  bg: '#fff',
  bgInverse: '#272c36',
  border: {
    gray1: '#BDBDBD',
    gray2: '#E0E0E0',
    gray3: '#828282',
  },
};

const lineHeight = 1.5;
const fontFamily = "'Noto Sans', Helvetica, sans-serif";
const fontWeights = [400, 600, 700];

const Theme: DefaultTheme = {
  colors,
  lineHeight,
  fontFamily,
  fontSizes,
  fontWeights,
  fontSizeBase: fontSizes[1],
  borderRadius: '12px',
};

export default Theme;
