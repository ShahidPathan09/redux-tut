import Main from "../main";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from "../Action/action";

const mapStateToProps = (state) => ({
    data: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeFromCartHandler: (data) => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
