import React, { createContext, useState, useEffect } from 'react';
import { SaleService } from '../services/saleService';

export const SaleContext = createContext();

const SaleContextProvider = (props) => {

    const saleService = new SaleService();

    const [sales, setSales] = useState([]);
    
    const [editSale, setEditSale] = useState(null);

    useEffect(()=>{
        async function callSaleData() {
            await saleService
                .readAll('')
                .then(res => setSales(res))
        }
        callSaleData();
    },[]);

    const createSale = (sale) => {
        console.log(sales)
        async function callSaleData() {
            await saleService
                .create(sale)
            await saleService
                .readAll('')
                .then(res => setSales(res))
        }

        callSaleData();
        console.log(sale)
        console.log(sales)
    }

    const deleteSale = (id) => {
        async function callSaleData() {
            await saleService
            .delete(id)
            .then(() => setSales(sales.filter((p) => p.id !== id )));
        }

        callSaleData();
    }

    const findSale = (id) => {
        const sale = sales.find((p) => p.id === id);

        setEditSale(sale);
    
    }

    const filterSale = (nome) => {
        async function callSaleData() {
            await saleService
            .readAll(nome)
            .then(res => setSales(res));
        }

        callSaleData();
    }

    const updateSale = (sale) => {
        async function callSaleData() {
            await saleService
                .update(sale)
            await saleService
                .readAll('')
                .then(res => setSales(res))
        }

        callSaleData();
    }

    return ( 
        <SaleContext.Provider
            value={{
                createSale,
                deleteSale,
                findSale,
                updateSale,
                filterSale,
                editSale,
                setEditSale,
                sales,
                setSales
            }}
        >
            {props.children}
        </SaleContext.Provider>
    );
};


export default SaleContextProvider;