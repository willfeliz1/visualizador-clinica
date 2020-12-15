import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  </>
);

export default App;
