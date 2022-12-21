import React from 'react';

import ProductCard, {ProductButtons, ProductImage, ProductTitle} from "../components/ProductCard";

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
                {/*<ProductCard product={product}>*/}
                {/*    <ProductImage/>*/}
                {/*    <ProductTitle title={''}/>*/}
                {/*    <ProductButtons  increaseBy={function (value:number):void{*/}
                {/*        throw new Error('funcion no implementada')*/}
                {/*    }} counter={10}/>*/}
                {/*</ProductCard>*/}

                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title={''}/>
                    <ProductCard.Buttons />
                </ProductCard>

            </div>

        </div>
    );
};

export default ShoppingPage;
