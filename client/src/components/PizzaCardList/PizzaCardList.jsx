import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { pizzasActions } from '../../_actions';

import PizzaCard from '../PizzaCard';

export const PizzaCardList = ({ pizzas, getAllPizzas }) => {
    const pizzaCards = pizzas.items.length > 0 && pizzas.items.map(item => {
        return (
            <PizzaCard item={ item } key={ item.name } />
        )
    })

    useEffect(() => {
        getAllPizzas()
    }, [getAllPizzas])

    if (pizzas.loading) {
        return (
            <h2>Please wait... Server is preparing pizzas for you</h2>
        )
    }

    if (pizzas.items.length > 0) {
        return (
            <div className="mt-5">
                <h2 className="text-center"> List of Pizzas <span role="img" aria-label="list">📜</span></h2>
                <div className="row mt-4 justify-content-center">
                    { pizzaCards }
                </div>
            </div>
        )
    }

    if (pizzas.error) {
        return (
            <span className="text-danger">ERROR: { pizzas.error }</span>
        )
    }

}

const mapStateToProps = ({pizzas}) => ({
    pizzas
})

const mapDispatchToProps = {
    getAllPizzas: pizzasActions.getAllPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCardList)

