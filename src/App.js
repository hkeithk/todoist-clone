import React from 'react';
import Layout from 'Layout';
import theme from 'theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ProjectsProvider, SelectedProjectProvider } from 'context';

export const App = () => {
  return (
    <div className='App'>
      <MuiThemeProvider theme={theme}>
        <SelectedProjectProvider>
          <ProjectsProvider>
            <Layout />
          </ProjectsProvider>
        </SelectedProjectProvider>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
