import React, { useContext, useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SellerContext } from '../../../contexts/SellerContext';
import '../styles/styles.css';
import {InputSwitch} from 'primereact/inputswitch';


function SellerForm(props) {

  const {isVisible, setIsVisible} = props;

  const{
    createSeller,
    deleteSeller,
    updateSeller,
    editSeller,
    setEditSeller
  } = useContext(SellerContext)

  const initialSellerState = {
    'id':null,
    'nome': "",
    'active': true
  }

  const [sellerData,setSellerData] = useState(initialSellerState);

  useEffect(()=>{
    if(editSeller) setSellerData(editSeller);
  },[editSeller])

  useEffect(()=>{
    if(!isVisible) setEditSeller(null);
  },[isVisible, setEditSeller])

  const updateField = (data, field) => {
    setSellerData({
      ...sellerData,
      [field]:data
    })
  }

  const _deleteSeller = () => {
    if(editSeller) {
      deleteSeller(sellerData.id);
      setSellerData(initialSellerState);
    }
    
    setIsVisible(false);
  }

  const saveSeller = () => {
    if (sellerData.nome === "") {
      alert('Campo "Nome" deve ser preenchido!')
      return;
    }
    if(editSeller) {
      updateSeller(sellerData);
    } else {
      createSeller(sellerData);
    }
    setSellerData(initialSellerState);
    setIsVisible(false);
  }

  const dialogFooter = (
    <div className="ui-dialog-buttonpane p-clearfix">
      <Button label={editSeller?"Deletar":"Cancelar"} icon="pi pi-times" onClick={_deleteSeller} />
      <Button label={editSeller?"Salvar":"Criar"} icon="pi pi-check" onClick={saveSeller} />
    </div>
  )

  const clearSelected = () => {
    setIsVisible(false);
    setSellerData(initialSellerState);
  }

  return(
    <Dialog
      visible={isVisible}
      modal={true}
      style={{width:"420px"}}
      contentStyle={{position: "static"}}
      header="Vendedores"
      onHide={()=> clearSelected()}
      footer={dialogFooter}
    >
      <div className="p-grid p-fluid">
        <div className="p-float-label">
          <InputText
            value={sellerData.nome}
            onChange={(e) => updateField(e.target.value, "nome")}
          />
          <label>Nome:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputSwitch checked={sellerData.active} onChange={(e) => updateField(e.target.value, "active")} />
          <label>Status:</label>
        </div>
      </div>
    </Dialog>
  );
}

export default SellerForm;