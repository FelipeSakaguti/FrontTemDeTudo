import React, { useContext, useState} from 'react';
import { Button } from 'primereact/button';
import { SellerContext } from '../../../contexts/SellerContext';
import '../styles/styles.css'
import { MDBInput } from 'mdbreact'

import SellerForm from './SellerForm';

import { PrimeDataTable, PrimeColumn, Container } from '../styles/styles.js';

function SellerList() {
    const { sellers, findSeller, filterSeller } = useContext(SellerContext);

    const [isVisible, setIsVisible] = useState(false);

    const saveSeller = (id) => {
      findSeller(id);
      setIsVisible(true);
    };

     const filterNome = (nome) => {
      filterSeller(nome);
    }

    return (
      <Container>
        <Button 
          icon="pi pi-plus"
          label="Adicionar Vendedor"
          onClick={()=>{setIsVisible(true)}}
          style={{width: '200px'}}
        />
        <MDBInput 
          type="text" 
          hint="Buscar Vendedor..."
          icon="search"
          style={{width: "400px", padding: "0px"}}
          onChange={ e => filterNome(e.target.value) }
        />
        <PrimeDataTable
            value={sellers}
            selectionMode="single"
            onSelectionChange={e=> saveSeller(e.value.id)}
            paginator={true}
            rows={20}
            reorderableColumns={true}
        >
          <PrimeColumn field="id" header="id" />
          <PrimeColumn field="nome" header="Nome" />
          <PrimeColumn className="third-column" field="active" header="Status" />
        </PrimeDataTable>
        <SellerForm isVisible={isVisible} setIsVisible={setIsVisible} />
      </Container>
  );
}

export default SellerList;