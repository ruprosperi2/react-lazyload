import React, {createContext, ReactElement} from 'react';

import styles from '../styles/styles.module.css'

import {useProduct} from "../hooks/useProduct";
import {OnChangeArgs, Product, ProductContextProps} from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps)

const {Provider} = ProductContext

export interface Props {
    children?: ReactElement | ReactElement[]
    product: Product,
    className?: string
    onChange?: (arg: OnChangeArgs, count: number) => void
}


export const ProductCard = ({children, product, className, onChange}: Props) => {

    const {counter, increaseBy} = useProduct({onChange, product})

    return (

        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>

    );
};

export default ProductCard;
