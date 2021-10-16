import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/constants"

// ********INCREMENT/DECREMENT COUNTER********

export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNumber = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}


// *********SHOPPING CART********

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
    }
}