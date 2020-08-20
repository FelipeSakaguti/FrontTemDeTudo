import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Layout from './components/Layout'

import ProductContextProvider from './contexts/ProductContext';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Layout />
          <GlobalStyles />
        </Router>
        </ProductContextProvider>
    </div>
  );
}

export default App;
