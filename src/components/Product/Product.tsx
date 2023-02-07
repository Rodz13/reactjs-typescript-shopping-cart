import React, { ReactElement, memo } from 'react';

import { ProductType } from '../../context/ProductsProvider';
import { ReducerActionType, ReducerAction } from '../../context/CartProvider';

import './product.css';

type PropsType = {
    product: ProductType;
    dispatch: React.Dispatch<ReducerAction>;
    REDUCER_ACTIONS: ReducerActionType;
    inCart: boolean;
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }:PropsType): ReactElement => {
    const onAddToCart = () => dispatch({
        type: REDUCER_ACTIONS.ADD,
        payload: { ...product, qty: 1 }
    });

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null;

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="product__img" />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(product.price)}
                {itemInCart}
            </p>
            <button onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

function areProdctsEqual({ product: prevProduct, inCart:prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
    return (
        Object.keys(prevProduct).every(key => {
            return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
        }) && prevInCart === nextInCart
    );
};

const MemoizedProduct = memo<typeof Product>(Product, areProdctsEqual);

export default MemoizedProduct;
