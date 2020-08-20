import React from 'react';
import SellerList from './SellerList';

import { Header } from '../styles/styles.js'

function Vendedores() {

  return (
    <>
      <Header>
        <h1>Vendedores</h1>
      </Header>
      <SellerList/>
    </>
  );
}

export default Vendedores;