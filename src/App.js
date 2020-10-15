import React from 'react';
import Layout from 'Layout';
import theme from 'theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

export const App = () => {
  return (
    <div className='App'>
      <MuiThemeProvider theme={theme}>
        <Layout />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
