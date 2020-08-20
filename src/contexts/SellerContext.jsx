import React, { createContext, useState, useEffect } from 'react';
import { SellerService } from '../services/sellerService';

export const SellerContext = createContext();

const SellerContextProvider = (props) => {

    const sellerService = new SellerService();

    const [sellers, setSeller] = useState([]);
    
    const [editSeller, setEditSeller] = useState(null);

    useEffect(()=>{
        async function callCustomerData() {
            await sellerService
                .readAll('')
                .then(res => setSeller(res))
        }
        callCustomerData();
    },[]);

    const createSeller = (seller) => {
        async function callSellerData() {
            await sellerService
                .create(seller)
                .then(res => setSeller([...sellers, seller]))
        }
        
        callSellerData();
    }

    const deleteSeller = (id) => {
        async function callSellerData() {
            await sellerService
            .delete(id)
            .then(() => setSeller(sellers.filter((p) => p.id !== id )));
        }

        callSellerData();
    }

    const findSeller = (id) => {
        const seller = sellers.find((p) => p.id === id);

        setEditSeller(seller);
    
    }

    const filterSeller = (nome) => {
        async function callSellerData() {
            await sellerService
            .readAll(nome)
            .then(res => setSeller(res));
        }

        callSellerData();
    }

    const updateSeller = (seller) => {
        sellerService
        .update(seller)
        .then((data) =>
            setSeller(
                sellers.map((p) => (p.id === seller.id ? seller : p) )
            )
        );

    }

    return ( 
        <SellerContext.Provider
            value={{
                createSeller,
                deleteSeller,
                findSeller,
                updateSeller,
                filterSeller,
                editSeller,
                setEditSeller,
                sellers,
                setSeller
            }}
        >
            {props.children}
        </SellerContext.Provider>
    );
};


export default SellerContextProvider;