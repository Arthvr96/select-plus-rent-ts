import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    bg: {
      white: '#ffffff',
      black: '#000000',
      blue: '#008BFE',
      darkBlue: '#0F2934',
      blackBlue: '#0C212A',
      darkGrey: '#545454',
    },
    decors: {
      white: '#ffffff',
      black: '#000000',
      blue: '#008BFE',
      darkBlue: '#0F2934',
      lightGrey: '#DADADA',
      darkGrey: '#545454',
    },
    text: {
      white: '#ffffff',
      black: '#000000',
      grey: '#B1B1B1',
      darkBlue: '#0F2934',
    },
    system: {
      success: '#2BDD30',
      warning: '#FFCA18',
      info: '#37DAFD',
      error: '#EB0000',
    },
  },
  fontSize: {
    heroHeading: '5.6rem',
    title1: '4.8rem',
    title2: '3.6rem',
    title3: '3.2rem',
    title4: '2.4rem',
    title5: '2.2rem',
    title6: '2.0rem',
    subtitle1: '2.4rem',
    subtitle2: '2.2rem',
    subtitle3: '2.0rem',
    subtitle4: '1.6rem',
    subtitle5: '1.3rem',
    button1: '2.4rem',
    button2: '2.0rem',
    button3: '1.6rem',
    button4: '1.3rem',
    paragraph: '1.6rem',
    thumbnail: '1.3rem',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700,
    heavy: 900,
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    bigDesktop: '@media (min-width: 1280px)',
    huge: '@media(min-width: 1440px)',
  },
};
