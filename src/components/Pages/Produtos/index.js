import React from 'react';
import ProductList from './ProdutoList';

import { Header } from '../styles/styles.js'

function Produtos(props) {

  return (
    <>
      <Header>
        <h1>Produtos</h1>
      </Header>
      <ProductList/>
    </>
  );
}

export default Produtos;