import { pizzasConstants } from '../_constants';
import { pizzasService } from '../_services';

export const pizzasActions = {
    getAllPizzas,
};

function getAllPizzas() {
    return dispatch => {
        dispatch(request());

        pizzasService.getAllPizzas()
            .then(
                pizzas => {
                    dispatch(success(pizzas))
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: pizzasConstants.GET_ALLPIZZAS_REQUEST } }
    function success(pizzas) { return { type: pizzasConstants.GET_ALLPIZZAS_SUCCESS, pizzas } }
    function failure(error) { return { type: pizzasConstants.GET_ALLPIZZAS_FAILURE, error } }
}
