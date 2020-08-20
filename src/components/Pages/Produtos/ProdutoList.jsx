import React, { useContext, useState} from 'react';
import { Button } from 'primereact/button';
import { ProductContext } from '../../../contexts/ProductContext';
import '../styles/styles.css'
import { MDBInput } from 'mdbreact'

import ProdutoForm from './ProdutoForm';

import { PrimeDataTable, PrimeColumn, Container } from '../styles/styles.js';

function ProdutoList() {
    const { products, findProduct, filterProduct } = useContext(ProductContext);

    const [isVisible, setIsVisible] = useState(false);

    const saveProduct = (id) => {
      findProduct(id);
      setIsVisible(true);
    };

     const filterNome = (nome) => {
      filterProduct(nome);
    }

    return (
      <Container>
        <Button 
          icon="pi pi-plus"
          label="Adicionar Produto"
          onClick={()=>{setIsVisible(true)}}
          style={{width: '200px'}}
        />
        <MDBInput 
          type="text" 
          hint="Buscar Produto"
          icon="search"
          style={{width: "400px", padding: "0px"}}
          onChange={ e => filterNome(e.target.value) }
        />
        <PrimeDataTable
            value={products}
            selectionMode="single"
            onSelectionChange={e=> saveProduct(e.value.id)}
            paginator={true}
            rows={20}
            reorderableColumns={true}
        >
          <PrimeColumn field="nome" header="Nome" />
          <PrimeColumn field="descricao" header="Descrição" />
          <PrimeColumn className="second-column" field="marca" header="Marca" />
          <PrimeColumn className="second-column" field="fornecedor" header="Fornecedor" />
          <PrimeColumn className="second-column" field="classificacao" header="Classificação" />
          <PrimeColumn className="third-column" field="qtd_estoque" header="Qtd. Estoque" />
          <PrimeColumn className="third-column" field="qtd_loja" header="Qtd. Loja" />
          <PrimeColumn className="third-column" field="unidade_medida" header="Unid. Med." />
          <PrimeColumn className="third-column" field="custo" header="Custo" />
          <PrimeColumn className="third-column" field="venda" header="Venda" />
        </PrimeDataTable>
        <ProdutoForm isVisible={isVisible} setIsVisible={setIsVisible} />
      </Container>
  );
}

export default ProdutoList;