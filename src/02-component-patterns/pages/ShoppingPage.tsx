import React, {useState} from 'react';

import {ProductCard, ProductButtons, ProductImage, ProductTitle} from "../components";

import "./../styles/custom-style.css"
import {Product} from "../interfaces/interfaces";

const product1 = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]


interface ProductInCard extends Product {
    count: number
}

export const ShoppingPage = () => {
    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCard }>({});

    const onProdcutCountChange = () => {
        console.log("cambio")
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard product={product} className="bg-dark" key={product.id} onChange={()=>onProdcutCountChange()}>
                            <ProductImage className="custom-image"/>
                            <ProductTitle title={''} className="text-white text-bold"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                <ProductCard product={product2} className="bg-dark">
                    <ProductImage className="custom-image"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product1} className="bg-dark">
                    <ProductImage className="custom-image"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
            </div>

        </div>
    );
};

export default ShoppingPage;
