import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCheckbox: {
      root: {
        color: '#ffffff',
      },
    },
  },
  palette: {
    primary: {
      light: '#363636',
      main: '#363636',
    },
    secondary: {
      main: '#ffffff',
      light: '#c0c0c0', //white
    },
    background: {
      default: '#171717',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default theme;
