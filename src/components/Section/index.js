import React from 'react';

import Dashboards from '../Pages/Dashboards';
import Vendedores from '../Pages/Vendedores';
import Produtos from '../Pages/Produtos';
import Vendas from '../Pages/Vendas';
import Clientes from '../Pages/Clientes';

import {Route} from 'react-router-dom'

function Section() {
  return (
    <section>
        <Route path="/" component={Dashboards} exact />
        <Route path="/vendedores" component={Vendedores} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/vendas" component={Vendas} />
        <Route path="/clientes" component={Clientes} />
    </section>
  );
}

export default Section;