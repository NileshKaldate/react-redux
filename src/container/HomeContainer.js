import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart } from "../services/actions/Actions";
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatchEvent(addToCart(data)),
});
export default connect(mapDispatchToProps, mapStateToProps)(Home);
