import React, { useContext, useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { CustomerContext } from '../../../contexts/CustomerContext';
import '../styles/styles.css';

function ClienteForm(props) {

  const {isVisible, setIsVisible} = props;

  const{
    createCustomer,
    deleteCustomer,
    updateCustomer,
    editCustomer,
    setEditCustomer
  } = useContext(CustomerContext)

  const initialCustomerState = {
    'id':null,
    'nome': "",
    'endereco': "",
    'telefone': ""
  }

  const [customerData,setCustomerData] = useState(initialCustomerState);

  useEffect(()=>{
    if(editCustomer) setCustomerData(editCustomer);
  },[editCustomer])

  useEffect(()=>{
    if(!isVisible) setEditCustomer(null);
  },[isVisible])

  const updateField = (data, field) => {
    setCustomerData({
      ...customerData,
      [field]:data
    })
  }

  const _deleteCustomer = () => {
    if(editCustomer) {
      deleteCustomer(customerData.id);
      setCustomerData(initialCustomerState);
    }
    
    setIsVisible(false);
  }

  const saveCustomer = () => {
    if (customerData.nome === "") {
      alert('Campo "Nome" deve ser preenchido!')
      return;
    }
    if(editCustomer) {
      updateCustomer(customerData);
    } else {
      createCustomer(customerData);
    }
    setCustomerData(initialCustomerState);
    setIsVisible(false);
  }

  const dialogFooter = (
    <div className="ui-dialog-buttonpane p-clearfix">
      <Button label={editCustomer?"Deletar":"Cancelar"} icon="pi pi-times" onClick={_deleteCustomer} />
      <Button label={editCustomer?"Salvar":"Criar"} icon="pi pi-check" onClick={saveCustomer} />
    </div>
  )

  const clearSelected = () => {
    setIsVisible(false);
    setCustomerData(initialCustomerState);
  }

  return(
    <Dialog
      visible={isVisible}
      modal={true}
      style={{width:"420px"}}
      contentStyle={{position: "static"}}
      header="Clientes"
      onHide={()=> clearSelected()}
      footer={dialogFooter}
    >
      <div className="p-grid p-fluid">
        <br/>
        <div className="p-float-label">
          <InputText
            value={customerData.nome}
            onChange={(e) => updateField(e.target.value, "nome")}
          />
          <label>Nome:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputText
            value={customerData.endereco}
            onChange={(e) => updateField(e.target.value, "endereco")}
          />
          <label>Endereço:</label>
        </div>
        <br/>
        <div className="p-float-label">
          <InputText
            value={customerData.telefone}
            onChange={(e) => updateField(e.target.value, "telefone")}
          />
          <label>Telefone:</label>
        </div>
      </div>
    </Dialog>
  );
}

export default ClienteForm;