import React from 'react'
import { cartActions } from '../../_actions';
import { connect } from 'react-redux'

import CartProducts from '../CartProducts';
import OrderTotal from '../OrderTotal';

export const Cart = ({ cart, currency, removeFromCart, addToCart }) => {
    if (cart.cartItems.length === 0) {
        return (
            <h2 className="mt-4 text-center">
                Your cart is empty. Please add Pizza !
            </h2>
        )
    }

    return (
        <div className="row mt-4">
            <div className="col-8">
                <CartProducts cart={ cart } currency={ currency } addToCart={ addToCart } removeFromCart={ removeFromCart }/>
            </div>
            <div className="col-4">
                <OrderTotal cart={ cart } currency={ currency }/>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cart, currency }) => ({
    cart, currency
})

const mapDispatchToProps = {
    addToCart: cartActions.addToCart,
    removeFromCart: cartActions.removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

