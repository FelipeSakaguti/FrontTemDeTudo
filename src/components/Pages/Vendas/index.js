import React from 'react';
import VendaLista from './VendaList';

import { Header } from '../styles/styles.js'

function Vendas(props) {

  return (
    <>
      <Header>
        <h1>Vendas</h1>
      </Header>
      <VendaLista/>
    </>
  );
}

export default Vendas;