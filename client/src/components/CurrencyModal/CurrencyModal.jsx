import React from 'react';
import { connect } from 'react-redux';
import { currencyActions } from '../../_actions';

import Modal from '../Modal';

const CurrencyModal = ({ showCurrencyModal, currency, availableCurrencies, saveCurrency }) => {
    const buttons = availableCurrencies.map(item => {
        return (
            <button key={item} className="btn btn-outline-dark" onClick={() => saveCurrency(item)} >
                { item }
            </button>
        )
    });

    return (
        <Modal>
            <h1 className="m-4">Choose your currency</h1>
            <div className="buttons">
                { buttons }
            </div>
        </Modal>
    )

}

const mapStateToProps = ({ currency }) => { return currency }


const mapDispatchToProps = {
    saveCurrency: currencyActions.saveCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyModal)
