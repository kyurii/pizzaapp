

import { alertActions } from '.';
import { currencyConstants } from '../_constants';

function saveCurrency(value) {
    return dispatch => {
        dispatch(save(value));
        dispatch(alertActions.success('Currency saved successfully'));
    };

    function save(value) { return { type: currencyConstants.SAVE_CURRENCY, payload: value } }
}

function showModal() {
    return dispatch => {
        dispatch(show());
    };

    function show() { return { type: currencyConstants.SHOW_CURRENCY_MODAL } }
}

export const currencyActions = {
    saveCurrency,
    showModal
};
