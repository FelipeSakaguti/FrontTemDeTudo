import React, { useContext, useState} from 'react';
import { Button } from 'primereact/button';
import { SaleContext } from '../../../contexts/SaleContext';
import '../styles/styles.css'
import { MDBInput } from 'mdbreact'

import VendaForm from './VendaForm';

import { PrimeDataTable, PrimeColumn, Container } from '../styles/styles.js';

function VendaList() {
    const { sales, findSale } = useContext(SaleContext);

    const [isVisible, setIsVisible] = useState(false);

    const saveSale = (id) => {
      findSale(id);
      setIsVisible(true);
    };

    return (
      <Container>
        <Button 
          icon="pi pi-plus"
          label="Nova Venda"
          onClick={()=>{setIsVisible(true)}}
          style={{width: '200px'}}
        />
        <PrimeDataTable
            value={sales}
            selectionMode="single"
            onSelectionChange={e=> saveSale(e.value.id)}
            paginator={true}
            rows={20}
            reorderableColumns={true}
        >
          <PrimeColumn className="second-column" field="nome_cliente" header="Cliente" />
          <PrimeColumn className="second-column" field="nome_produto" header="Produto" />
          <PrimeColumn field="vendido_em" header="Data Venda" />
          <PrimeColumn className="third-column" field="nome_vendedor" header="Vendedor" />
          <PrimeColumn className="second-column" field="qtd" header="Qtd" />
          <PrimeColumn className="third-column" field="custo_unit" header="Custo Unit." />
          <PrimeColumn field="valor_venda" header="Custo Total" />
        </PrimeDataTable>
        <VendaForm isVisible={isVisible} setIsVisible={setIsVisible} />
      </Container>
  );
}

export default VendaList;