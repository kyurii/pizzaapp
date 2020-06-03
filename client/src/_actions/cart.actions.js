import { cartConstants } from "../_constants";
import { alertActions } from '../_actions';

function addToTotal(cart) {
    let total = cart.total;
    if (cart.totalQuantity === 1) {
        total = total + cart.shippingPrice;
    }

    return { type: cartConstants.UPDATE_TOTAL_PRICE, payload: total };
}

function removeFromTotal(cart) {
    let total = cart.total;
    if (cart.totalQuantity === 0) {
        total = total - cart.shippingPrice;
    }

    return { type: cartConstants.UPDATE_TOTAL_PRICE, payload: total };
}


function addToCart(item, price) {
    return (dispatch, getState) => {
        dispatch(addToCart(item, price));
        dispatch(addToTotal(getState().cart));
        dispatch(alertActions.success(`${item.name} added to your cart !`));
    };

    function addToCart(pizza, price) {
        return { type: cartConstants.ADD_CART_ITEM, payload: { pizza, price } };
    }
}

function removeFromCart(item, price) {
    return (dispatch, getState) => {
        dispatch(removeFromCart(item, price));
        dispatch(removeFromTotal(getState().cart));
        dispatch(alertActions.success(`${item.name} removed from your cart !`));
    };

    function removeFromCart(pizza, price) {
        return { type: cartConstants.REMOVE_CART_ITEM, payload: { pizza, price } };
    }
}

export const cartActions = {
    removeFromCart,
    addToCart
};

