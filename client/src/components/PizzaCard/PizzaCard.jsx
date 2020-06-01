import React from 'react'
import { connect } from 'react-redux'
import { FaCartPlus } from "react-icons/fa";
import variables from '../../styles/_variables.scss'

import './PizzaCard.scss'


const calories = "105";
const imgUrl = "https://img.freepik.com/free-vector/pizza-vector-sketch-fast-food_152222-108.jpg?size=338&ext=jpg"
const name = "Some name";
const description = "Some long description";
const price = "$ 6.99"


export const PizzaCard = () => {
    const addToCart = () => { console.log("Pizza added") }

    return (
        <div className="col-6 col-md-4 mb-5 d-flex justify-content-center">
            <div className="card pizza-card fill-primary">
                <div className="card-body">
                    <div className="pizza-card-header">
                        <div className="pizza-card-calories">
                            <span role="img" aria-label="Calories">🔥</span>
                            <span>{ calories } Calories</span>
                        </div>
                        <button className="btn add-to-cart rounded-circle" onClick={() => addToCart() }>
                            <FaCartPlus color={variables.mainBrand}/>
                        </button>
                    </div>
                    <div className="pizza-image-wrapper rounded-circle">
                        <img className="pizza-img" src={ imgUrl } alt={ name }/>
                    </div>
                    <div className="pizza-name mt-3">{ name } </div>
                    <div className="pizza-description">{ description } </div>
                    <div className="pizza-price mt-1"> { price } </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCard)

