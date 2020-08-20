import React, { useContext, useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { SaleContext } from '../../../contexts/SaleContext';

import { CustomerContext } from '../../../contexts/CustomerContext';
import { ProductContext } from '../../../contexts/ProductContext';
import { SellerContext } from '../../../contexts/SellerContext';

import '../styles/styles.css';
import { ShowOnEdit } from '../styles/styles.js';

function VendaForm(props) {

  const {isVisible, setIsVisible} = props;

  const{
    createSale,
    deleteSale,
    updateSale,
    editSale,
    setEditSale
  } = useContext(SaleContext)

  const{ customers } = useContext(CustomerContext)
  const{ products } = useContext(ProductContext)
  const{ sellers } = useContext(SellerContext)

  const initialSaleState = {
    'id':null,
    'id_cliente': null,
    'nome_cliente': "",
    'id_produto': null,
    'nome_produto': "",
    'nome_vendedor': "",
    'id_vendedor': null,
    'qtd': 0,
    'custo_unit': 0,
    'valor_venda': 0,
    'vendido_em': 0
  }

  const [saleData,setSaleData] = useState(initialSaleState);

  useEffect(()=>{
    if(editSale) setSaleData(editSale);
  },[editSale])

  useEffect(()=>{
    if(!isVisible) setEditSale(null);
  },[isVisible])

  const updateField = (data, field) => {
    setSaleData({
      ...saleData,
      [field]:data
    })
  }

  const _deleteSale = () => {
    if(editSale) {
      deleteSale(saleData.id);
      setSaleData(initialSaleState);
    }
    
    setIsVisible(false);
  }

  const saveSale = () => {
    if (saleData.id_produto === null) {
      alert('Campo "Produto" deve ser preenchido!')
      return;
    }
    if(editSale) {
      updateSale(saleData);
    } else {
      createSale(saleData);
    }
    setSaleData(initialSaleState);
    setIsVisible(false);
  }

  const dialogFooter = (
    <div className="ui-dialog-buttonpane p-clearfix">
      <Button label={editSale?"Deletar":"Cancelar"} icon="pi pi-times" onClick={_deleteSale} />
      <Button label={editSale?"Salvar":"Criar"} icon="pi pi-check" onClick={saveSale} />
    </div>
  )

  const clearSelected = () => {
    setIsVisible(false);
    setSaleData(initialSaleState);
  }

  return(
    <Dialog
      visible={isVisible}
      modal={true}
      style={{width:"420px"}}
      contentStyle={{position: "static"}}
      header="Vendas"
      onHide={()=> clearSelected()}
      footer={dialogFooter}
    >
      <div className="p-grid p-fluid">
        <br/>
        <Dropdown
          value={saleData.id_cliente}
          options={customers}
          onChange={(e) => updateField(e.target.value, "id_cliente")}
          optionLabel="nome"
          optionValue="id"
          filter showClear filterBy="nome"
          placeholder="Cliente"
        />

        <br/><br/>
        <Dropdown
          value={saleData.id_produto}
          options={products}
          onChange={(e) => updateField(e.target.value, "id_produto")}
          optionLabel="nome"
          optionValue="id"
          filter showClear filterBy="nome"
          placeholder="Produto"
        />
        <br/><br/>
          
        <ShowOnEdit show={editSale}>
          <div className="p-float-label">
            <InputText
              value={saleData.vendido_em}
              onChange={(e) => updateField(e.target.value, "vendido_em")}
            />
            <label>Data venda:</label>
          </div>
          <br/>
        </ShowOnEdit>

        <br/>
        <Dropdown
          value={saleData.id_vendedor}
          options={sellers}
          onChange={(e) => updateField(e.target.value, "id_vendedor")}
          optionLabel="nome"
          optionValue="id"
          filter showClear filterBy="nome"
          placeholder="Vendedores"
        />
        <br/><br/>
  
        <div className="p-float-label">
          <InputNumber
            value={saleData.qtd}
            onChange={(e) => updateField(e.target.value, "qtd")}
          />
          <label>Quantidade:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputNumber
            value={saleData.custo_unit}
            onChange={(e) => updateField(e.target.value, "custo_unit")}
          />
          <label>Custo Unit.:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputNumber
            value={saleData.valor_venda}
            onChange={(e) => updateField(e.target.value, "valor_venda")}
          />
          <label>Valor da Venda:</label>
        </div>
        <br/><br/>
      </div>
    </Dialog>
  );
}

export default VendaForm;