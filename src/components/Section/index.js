import React from 'react';

import Dashboards from '../Pages/Dashboards';
import Vendedores from '../Pages/Vendedores';
import Produtos from '../Pages/Produtos';
import Vendas from '../Pages/Vendas';
import Clientes from '../Pages/Clientes';

import {Route} from 'react-router-dom'

import ProductContextProvider from '../../contexts/ProductContext';
import SaleContextProvider from '../../contexts/SaleContext';
import SellerContextProvider from '../../contexts/SellerContext';
import CustomerContextProvider from '../../contexts/CustomerContext';

function Section() {
  return (
    <section>
      <SaleContextProvider>
      <ProductContextProvider>  
      <CustomerContextProvider>
      <SellerContextProvider>
        <Route path="/" component={Dashboards} exact />
        <Route path="/vendedores" component={Vendedores} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/vendas" component={Vendas} />
        <Route path="/clientes" component={Clientes} />
      </SellerContextProvider>
      </CustomerContextProvider>
      </ProductContextProvider>
      </SaleContextProvider>
    </section>
  );
}

export default Section;