import { currencyConstants } from '../_constants';

const initialState = {
    showCurrencyModal: true,
    currency: undefined,
    availableCurrencies: ['EUR', 'USD']
};

export function currency (state = initialState, action) {
    switch (action.type) {
        case currencyConstants.SAVE_CURRENCY:
            return {
                ...state,
                showCurrencyModal: false,
                currency: action.payload
            };
        case currencyConstants.SHOW_CURRENCY_MODAL:
            return {
                ...state,
                showCurrencyModal: true
            };
        default:
            return state
    }
}
