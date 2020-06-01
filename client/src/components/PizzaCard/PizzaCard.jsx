import React from 'react';
import { addToCart } from '../../_actions';
import { connect } from 'react-redux';
import { FaCartPlus } from "react-icons/fa";

import variables from '../../styles/_variables.scss'
import './PizzaCard.scss'

export const PizzaCard = ({ item, currency, addToCart }) => {
    const { calories, name, image, description, price } = item;

    return (
        <div className="col-6 col-md-4 mb-5 d-flex justify-content-center">
            <div className="card pizza-card fill-primary">
                <div className="card-body">
                    <div className="pizza-card-header">
                        <div className="pizza-card-calories">
                            <span role="img" aria-label="Calories">🔥</span>
                            <span>{ calories } Calories</span>
                        </div>
                        <button className="btn add-to-cart rounded-circle" onClick={() => addToCart(item) }>
                            <FaCartPlus color={variables.mainBrand}/>
                        </button>
                    </div>
                    <div className="pizza-image-wrapper rounded-circle">
                        <img className="pizza-img" src={ image } alt={ name }/>
                    </div>
                    <div className="pizza-name mt-3">{ name } </div>
                    <div className="pizza-description">Ingredients: { description } </div>
                    <div className="pizza-price mt-1"> { `${price[currency]} ${currency}`} </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({currency}) => ({
    currency: currency.currency
})

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCard)

