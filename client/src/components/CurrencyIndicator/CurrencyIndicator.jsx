import React from 'react'
import { currencyActions } from '../../_actions';
import { connect } from 'react-redux'

export const CurrencyIndicator = ({ currency, showModal }) => {
    return (
        <button type="button" className="btn btn-info ml-auto" onClick={() => showModal()}>
            Currency: {currency}
        </button>
    )
}


const mapStateToProps = ({ currency }) => { return { currency: currency.currency }}

const mapDispatchToProps = {
    showModal: currencyActions.showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyIndicator);
