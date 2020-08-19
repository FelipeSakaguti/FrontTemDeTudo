import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout'

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <GlobalStyles />
      </Router>
    </div>
  );
}

export default App;
