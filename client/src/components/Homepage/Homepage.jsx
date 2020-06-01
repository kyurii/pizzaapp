import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PizzaCardList from '../PizzaCardList';

import './Homepage.scss';

const Homepage = () => {
    return (
        <div>
            <PizzaCardList />
        </div>
    )
}

// Homepage.propTypes = {
//     prop: PropTypes
// }

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

