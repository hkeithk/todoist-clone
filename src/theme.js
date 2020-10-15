import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#363636',
      main: '#363636',
    },
    secondary: {
      main: '#fafafa',
      light: '#c0c0c0', //white
      dark: '#171717',
    },
    background: {
      default: '#ecf5ff',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default theme;
