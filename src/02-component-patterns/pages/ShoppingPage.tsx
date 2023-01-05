import React from 'react';

import {ProductCard, ProductButtons, ProductImage, ProductTitle} from "../components";

import "./../styles/custom-style.css"

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} className="bg-dark">
                    <ProductImage className="custom-image"/>
                    <ProductTitle title={''} className="text-white text-bold"/>
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductCard.Image/>
                    <ProductCard.Title title={''}/>
                    <ProductCard.Buttons/>
                </ProductCard>

            </div>

        </div>
    );
};

export default ShoppingPage;
