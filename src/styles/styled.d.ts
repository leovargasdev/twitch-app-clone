import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      gray: string;
      tag: string;
      green: string;
      red: string;
      purple: string;
    };

    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
