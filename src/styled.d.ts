import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: {
        white: string;
        black: string;
        blue: string;
        darkBlue: string;
        blackBlue: string;
        darkGrey: string;
      };
      decors: {
        white: string;
        black: string;
        blue: string;
        darkBlue: string;
        lightGrey: string;
        darkGrey: string;
      };
      text: {
        white: string;
        black: string;
        grey: string;
        darkBlue: string;
      };
      system: {
        success: string;
        warning: string;
        info: string;
        error: string;
      };
    };
    fontSize: {
      heroHeading: string;
      title1: string;
      title2: string;
      title3: string;
      title4: string;
      title5: string;
      title6: string;
      subtitle1: string;
      subtitle2: string;
      subtitle3: string;
      subtitle4: string;
      subtitle5: string;
      button1: string;
      button2: string;
      button3: string;
      button4: string;
      paragraph: string;
      thumbnail: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      bold: number;
      heavy: number;
    };
    mq: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
      huge: string;
    };
    zIndex: {
      navBar: number;
      hamburgerMenu: number;
      hamburgerMenuContent: number;
      fixedHero: number;
      fixedInfoSection: number;
      fixedFooterSection: number;
      parallaxPlaceholder: number;
    };
  }
}
