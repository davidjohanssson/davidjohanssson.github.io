import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#344EE2'
    },
    secondary: {
      main: '#00695C',
    }
  }
});
