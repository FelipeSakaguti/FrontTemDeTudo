import React from 'react';
import ClienteList from './ClienteList';

import { Header } from '../styles/styles.js'

function Clientes(props) {

  return (
    <>
      <Header>
        <h1>Cliente</h1>
      </Header>
      <ClienteList/>
    </>
  );
}

export default Clientes;
