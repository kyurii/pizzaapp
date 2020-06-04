import config from 'config';
import { handleResponse } from './_helpers'

function getAllPizzas() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/pizzas`, requestOptions).then(handleResponse);
}

export const pizzasService = {
    getAllPizzas
};
