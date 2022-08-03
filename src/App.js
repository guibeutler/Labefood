import { GlobalStyle, Theme } from './assets/styles/GlobalStyle';
import GlobalProvider from "./provider/GlobalProvider";
import Router from './routes/Router';
import {theme} from './constants/theme'
import {ThemeProvider} from '@mui/material'

function App() {
  return (

      <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Theme>
          <GlobalStyle />
          <Router />
        </Theme>
      </GlobalProvider>
      </ThemeProvider>
    
  );
}

export default App;
