import React, { createContext, useState, useEffect } from 'react';
import { ProductService } from '../services/productService';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const productService = new ProductService();

    const [products, setProducts] = useState([]);
    
    const [editProduct, setEditProduct] = useState(null);

    useEffect(()=>{
        async function callCustomerData() {
            await productService
                .readAll('')
                .then(res => setProducts(res))
        }
        callCustomerData();
    },[]);

    const createProduct = (product) => {
        async function callProductData() {
            await productService
                .create(product)
                .then(res => setProducts([...products, product]))
        }
        
        callProductData();
    }

    const deleteProduct = (id) => {
        async function callProductData() {
            await productService
            .delete(id)
            .then(() => setProducts(products.filter((p) => p.id !== id )));
        }

        callProductData();
    }

    const findProduct = (id) => {
        const product = products.find((p) => p.id === id);

        setEditProduct(product);
    
    }

    const filterProduct = (nome) => {
        async function callProductData() {
            await productService
            .readAll(nome)
            .then(res => setProducts(res));
        }

        callProductData();
    }

    const updateProduct = (product) => {
        productService
        .update(product)
        .then((data) =>
            setProducts(
                products.map((p) => (p.id === product.id ? product : p) )
            )
        );

    }

    return ( 
        <ProductContext.Provider
            value={{
                createProduct,
                deleteProduct,
                findProduct,
                updateProduct,
                filterProduct,
                editProduct,
                setEditProduct,
                products,
                setProducts
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};


export default ProductContextProvider;