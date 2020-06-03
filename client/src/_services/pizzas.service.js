import { handleResponse } from './_helpers'

function getAllPizzas() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`https://pizzaappjs.herokuapp.com/api/pizzas`, requestOptions).then(handleResponse);
}

export const pizzasService = {
    getAllPizzas
};
