import React, { useContext, useState} from 'react';
import { Button } from 'primereact/button';
import { CustomerContext } from '../../../contexts/CustomerContext';
import '../styles/styles.css'
import { MDBInput } from 'mdbreact'

import ClienteForm from './ClienteForm';

import { PrimeDataTable, PrimeColumn, Container } from '../styles/styles.js';

function ClienteList() {
    const { customers, findCustomer, filterCustomer } = useContext(CustomerContext);

    const [isVisible, setIsVisible] = useState(false);

    const saveCustomer = (id) => {
      findCustomer(id);
      setIsVisible(true);
    };

     const filterNome = (nome) => {
      filterCustomer(nome);
    }

    return (
      <Container>
        <Button 
          icon="pi pi-plus"
          label="Adicionar Cliente"
          onClick={()=>{setIsVisible(true)}}
          style={{width: '200px'}}
        />
        <MDBInput 
          type="text" 
          hint="Buscar Cliente"
          icon="search"
          style={{width: "400px", padding: "0px"}}
          onChange={ e => filterNome(e.target.value) }
        />
        <PrimeDataTable
            value={customers}
            selectionMode="single"
            onSelectionChange={e=> saveCustomer(e.value.id)}
            paginator={true}
            rows={20}
            reorderableColumns={true}
        >
          <PrimeColumn field="nome" header="Nome" />
          <PrimeColumn field="endereco" header="Endereço" />
          <PrimeColumn className="third-column" field="telefone" header="Telefone" />
        </PrimeDataTable>
        <ClienteForm isVisible={isVisible} setIsVisible={setIsVisible} />
      </Container>
  );
}

export default ClienteList;