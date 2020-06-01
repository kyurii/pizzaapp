import React from 'react'
import { connect } from 'react-redux'

import PizzaCard from '../PizzaCard';

export const PizzaCardList = () => {
    return (
        <div className="mt-5">
            <h2 className="text-center"> List of Pizzas <span role="img" aria-label="list">📜</span></h2>
            <div className="row mt-4 justify-content-center">
                    <PizzaCard />
                    <PizzaCard />
                    <PizzaCard />

                    <PizzaCard />
                    <PizzaCard />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCardList)

