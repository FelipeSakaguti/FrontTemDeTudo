import React, { createContext, useState, useEffect } from 'react';
import { CustomerService } from '../services/customerService';

export const CustomerContext = createContext();

const CustomerContextProvider = (props) => {

    const customerService = new CustomerService();

    const [customer, setCustomer] = useState([]);
    
    const [editCustomer, setEditCustomer] = useState(null);

    useEffect(()=>{
        async function callCustomerData() {
            await customerService
                .readAll('')
                .then(res => setCustomer(res))
        }
        callCustomerData();
    },[]);

    const createCustomer = (customer) => {
        async function callCustomerData() {
            await customerService
                .create(customer)
                .then(res => setCustomer([...customer, customer]))
        }
        
        callCustomerData();
    }

    const deleteCustomer = (id) => {
        async function callCustomerData() {
            await customerService
            .delete(id)
            .then(() => setCustomer(customer.filter((p) => p.id !== id )));
        }

        callCustomerData();
    }

    const findCustomer = (id) => {
        const customer = customer.find((p) => p.id === id);

        setEditCustomer(customer);
    
    }

    const filterCustomer = (nome) => {
        async function callCustomerData() {
            await customerService
            .readAll(nome)
            .then(res => setCustomer(res));
        }

        callCustomerData();
    }

    const updateCustomer = (customer) => {
        customerService
        .update(customer)
        .then((data) =>
            setCustomer(
                customer.map((p) => (p.id === customer.id ? customer : p) )
            )
        );

    }

    return ( 
        <CustomerContext.Provider
            value={{
                createCustomer,
                deleteCustomer,
                findCustomer,
                updateCustomer,
                filterCustomer,
                editCustomer,
                setEditCustomer,
                customer,
                setCustomer
            }}
        >
            {props.children}
        </CustomerContext.Provider>
    );
};


export default CustomerContextProvider;