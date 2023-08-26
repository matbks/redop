import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import React from 'react';
import Issue from './IssueTable';

function App() {
  return (
    <ThemeProvider theme={theme}> 
    <div className="App">
      <h1>Minha Plataforma Jira Simplificada</h1>
      <Issue />
    </div>
    </ThemeProvider>
  );
}

export default App;
