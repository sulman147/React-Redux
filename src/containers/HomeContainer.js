import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart } from "../services/Actions/action";

const mapStateToProps = (state) => ({
  Data: state.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
