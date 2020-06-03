import { pizzasConstants } from '../_constants';

const initialState = {
    items: [],
    loading: true,
    error: null,
};

export function pizzas(state = initialState, action) {
    switch (action.type) {
        case pizzasConstants.GET_ALLPIZZAS_REQUEST:
            return {
                items: [],
                loading: true,
                error: null
            };
        case pizzasConstants.GET_ALLPIZZAS_SUCCESS:
            return {
                items: action.pizzas,
                loading: false,
                error: null
            };
        case pizzasConstants.GET_ALLPIZZAS_FAILURE:
            return {
                items: [],
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}
