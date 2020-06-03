import React from 'react'

const CartProducts = ({ cart, currency, addToCart, removeFromCart }) => {
    const productRows = cart.cartItems.map((item, index) => {
        const currentPrice = item.price[currency.currency];
        const { name, quantity } = item;

        return (
            <div className="row mb-3" key={name }>
                <div className="col-1">{ ++index }</div>
                <div className="col">{ name }</div>
                <div className="col-4 text-center">
                    <div>{ quantity }</div>
                    <div>
                        <button className="btn" type="button" onClick={ () => addToCart(item, currentPrice) }>
                            <span role="img" aria-label="plus button">
                                ➕
                            </span>
                        </button>
                        <button className="btn" type="button" onClick={ () => removeFromCart(item, currentPrice) }>
                            <span role="img" aria-label="minus button">
                                ➖
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-2">{ `${currentPrice} ${currency.currency}`  }</div>
            </div>
        )
    })

    return (
        <div className="cart-products-wrapper">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-1">#</div>
                        <div className="col">Name</div>
                        <div className="col-4 text-center">Quantity</div>
                        <div className="col-2">Price</div>
                    </div>
                </div>
                <div className="card-body">
                    { productRows }
                </div>
            </div>
        </div>
    )
}

export default CartProducts;

