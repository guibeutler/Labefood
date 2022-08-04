import { createTheme } from '@mui/material'

export const PrimaryTextColor = '#000000';
export const SecondaryTextColor = '#E86E5A';

export const theme = createTheme({
    palette: {
      primary: {
        main: "#e86e5a",
        contrastText:  "#000000", 
       
      },
      secondary: {
        main: "#e86e5a",
        contrastText: "#000000"
        
        
      },
     
    },
  });