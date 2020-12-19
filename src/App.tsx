import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';
import ClinicProvider from './Hooks/ClinicContext';

const App: React.FC = () => (
  <>
    <Router>
      <ClinicProvider>
        <GlobalStyle />
        <Routes />
      </ClinicProvider>
    </Router>
  </>
);

export default App;
