import React from 'react'
import { connect } from 'react-redux'

const OrderTotal = ({ cart, currency: { currency } }) => {
    const { total, totalQuantity, shippingPrice} = cart

    return (
        <div className="oder-total">
            <div className="card">
                <div className="card-header">
                    Order Total:
                </div>
                <div className="card-body">
                    <div>{ `Shipping price: ${shippingPrice} ${currency}`}</div>
                    <div>{ `Total quantity: ${totalQuantity} `} </div>
                    <div>{ `Total Price: ${total} ${currency}` }</div>
                    <div></div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-dark btn-block">Place order</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cart, currency}) => ({
    cart, currency
})


export default connect(mapStateToProps, null)(OrderTotal)

