import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *   {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }

    label {
        cursor: pointer;
    }
`;

const theme = {
  colors: {
    orangeyRed: '#ff3b30',
    tangerine: '#ff9500',
    marigold: '#fc0',
    weirdGreen: '#4cd964',
    robinSegg: '#5ac8fa',
    deepSkyBlue: '#007aff',
    warmBlue: '#5856d6',
    reddishPink: '#ff2d55',
    paleGrey: '#efeff4',
    paleLilac: '#e5e5ea',
    lightBlueGrey: '#d1d1d6',
    lightBlueGreyTwo: '#c7c7cc',
    blueGrey: '#8e8e93',
    whiteTwo: '#fefefe',
    darkPeach: '#e86e5a',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
