import React, { useContext, useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProductContext } from '../../../contexts/ProductContext';
import '../styles/styles.css';

function ProdutoForm(props) {

  const {isVisible, setIsVisible} = props;

  const{
    createProduct,
    deleteProduct,
    updateProduct,
    editProduct,
    setEditProduct
  } = useContext(ProductContext)

  const initialProductState = {
    'id':null,
    'nome': "",
    'descricao': "",
    'marca': "",
    'fornecedor': "",
    'classificacao': "",
    'custo': 0,
    'venda': 0,
    'qtd_estoque': 0,
    'qtd_loja': 0,
    'unidade_medida': ""
  }

  const [productData,setProductData] = useState(initialProductState);

  useEffect(()=>{
    if(editProduct) setProductData(editProduct);
  },[editProduct])

  useEffect(()=>{
    if(!isVisible) setEditProduct(null);
  },[isVisible])

  const updateField = (data, field) => {
    setProductData({
      ...productData,
      [field]:data
    })
  }

  const _deleteProduct = () => {
    if(editProduct) {
      deleteProduct(productData.id);
      setProductData(initialProductState);
    }
    
    setIsVisible(false);
  }

  const saveProduct = () => {
    if (productData.nome === "") {
      alert('Campo "Nome" deve ser preenchido!')
      return;
    }
    if(editProduct) {
      updateProduct(productData);
    } else {
      createProduct(productData);
    }
    setProductData(initialProductState);
    setIsVisible(false);
  }

  const dialogFooter = (
    <div className="ui-dialog-buttonpane p-clearfix">
      <Button label={editProduct?"Deletar":"Cancelar"} icon="pi pi-times" onClick={_deleteProduct} />
      <Button label={editProduct?"Salvar":"Criar"} icon="pi pi-check" onClick={saveProduct} />
    </div>
  )

  const clearSelected = () => {
    setIsVisible(false);
    setProductData(initialProductState);
  }

  return(
    <Dialog
      visible={isVisible}
      modal={true}
      style={{width:"420px"}}
      contentStyle={{position: "static"}}
      header="Produtos"
      onHide={()=> clearSelected()}
      footer={dialogFooter}
    >
      <div className="p-grid p-fluid">
        <br/>
        <div className="p-float-label">
          <InputText
            value={productData.nome}
            onChange={(e) => updateField(e.target.value, "nome")}
          />
          <label>Nome:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputText
            value={productData.descricao}
            onChange={(e) => updateField(e.target.value, "descricao")}
          />
          <label>Descricao:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputText
            value={productData.marca}
            onChange={(e) => updateField(e.target.value, "marca")}
          />
          <label>Marca:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputText
            value={productData.fornecedor}
            onChange={(e) => updateField(e.target.value, "fornecedor")}
          />
          <label>Fornecedor:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputText
            value={productData.classificacao}
            onChange={(e) => updateField(e.target.value, "classificacao")}
          />
          <label>Classificação:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputNumber
            value={productData.custo}
            onChange={(e) => updateField(e.target.value, "custo")}
            mode="currency" currency="BRL"
          />
          <label>Custo:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputNumber
            value={productData.venda}
            onChange={(e) => updateField(e.target.value, "venda")}
            mode="currency" currency="BRL"
          />
          <label>Venda:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputNumber
            value={productData.qtd_estoque}
            onChange={(e) => updateField(e.target.value, "qtd_estoque")}
          />
          <label>Estoque:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputNumber
            value={productData.qtd_loja}
            onChange={(e) => updateField(e.target.value, "qtd_loja")}
          />
          <label>Loja:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputText
            value={productData.unidade_medida}
            onChange={(e) => updateField(e.target.value, "unidade_medida")}
          />
          <label>UM:</label>
        </div>
        <br/>
      </div>
    </Dialog>
  );
}

export default ProdutoForm;