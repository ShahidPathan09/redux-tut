import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/constants";

function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, { cartData: action.payload }]
        case REMOVE_FROM_CART:
            state.pop()
            return [...state,]
        default: return state
    }
}

export default cartItems
