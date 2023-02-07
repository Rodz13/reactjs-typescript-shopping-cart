import { useState } from 'react';

import CartLineItem from '../CartLineItem/CartLineItem';

import useCart from '../../hooks/useCart';

import './cart.css';

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmit = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  }

  const pageContent = confirm
    ? <h2>Thank you for your order</h2>
    : <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item, index) => {
          return (
            <CartLineItem
              key={index}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          )
        })}
      </ul>
      <div className="cart__totals">
        <p>Total Items: {totalItems} </p>
        <p>Total Price: {totalPrice} </p>
        <button 
          className="cart__submit"
          disabled={!totalItems}
          onClick={onSubmit}>
            Place Order
        </button>
      </div>
    </>

  return (
    <main className="main main--cart">
      {pageContent}
    </main>
  )
  
}

export default Cart;
