import { cartConstants }  from '../_constants';

const initialState = {
    cartItems: [],
    shippingPrice: 10,
    total: 0,
    totalQuantity: 0
};

export function cart(state = initialState, action) {
    if (action.type === cartConstants.ADD_CART_ITEM) {
        let currentPrice = action.payload.price;
        let item = action.payload.pizza;
        let addedPizza = state.cartItems.find(pizza => pizza.name === item.name);
        let totalQuantity = state.totalQuantity += 1;
        let newTotal = state.total + currentPrice;

        if (addedPizza) {
            const quantity = addedPizza.quantity + 1
            return {
                ...state,
                totalQuantity: totalQuantity,
                total: newTotal,
                cartItems: state.cartItems.map(pizza => pizza.name === addedPizza.name ? { ...pizza, quantity } : pizza)
            };
        } else {
            return {
                ...state,
                totalQuantity: totalQuantity,
                total: newTotal,
                cartItems: [...state.cartItems, { ...item, quantity: 1 }]
            };
        }
    } else if (action.type === cartConstants.REMOVE_CART_ITEM) {
        let item = action.payload.pizza;
        let currentPrice = action.payload.price
        let totalQuantity = state.totalQuantity - 1;
        let addedPizza = state.cartItems.find(pizza => pizza.name === item.name);
        let newTotal = state.total - currentPrice

        //if the qt == 0 then it should be removed
        if (addedPizza.quantity === 1) {
            let newItems = state.cartItems.filter(pizza => pizza.name !== addedPizza.name)
            return {
                ...state,
                cartItems: newItems,
                totalQuantity: totalQuantity,
                total: newTotal
            }
        }
        else {
            const quantity = addedPizza.quantity - 1;
            return {
                ...state,
                cartItems: state.cartItems.map(pizza => pizza.name === addedPizza.name ? { ...pizza, quantity } : pizza),
                totalQuantity: totalQuantity,
                total: newTotal
            }
        }
    } else if (action.type === cartConstants.UPDATE_TOTAL_PRICE) {
        return {
            ...state,
            total: action.payload
        }
    } else {
        return state
    }
}
