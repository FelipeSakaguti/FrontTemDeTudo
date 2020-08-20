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
        async function callSaleData() {
            await saleService
                .create(sale)
                .then(res => setSales([...sales, sale]))
        }
        
        callSaleData();
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
        saleService
        .update(sale)
        .then((data) =>
            setSales(
                sales.map((p) => (p.id === sale.id ? sale : p) )
            )
        );

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