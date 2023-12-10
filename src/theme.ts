import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#342b8a',
      light: '#3e33a1',
    },
    secondary: {
      main: '#FFC107',
    }
  }
});
