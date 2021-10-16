import changeNumber from "./reducer";
import { combineReducers } from 'redux';
import cartItems from "./reducer2";

const rootReducer = combineReducers({
    changeNumber: changeNumber,
    cart: cartItems,
})

export default rootReducer
