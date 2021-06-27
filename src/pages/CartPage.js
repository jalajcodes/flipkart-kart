import Products from "../components/Cart/Products";
import Pricing from "../components/Cart/Pricing";
import "../components/Cart/cart.css";

const CartPage = () => {
  return (
    <div className="cart-wrapper">
      <Products />
      <Pricing />
    </div>
  );
};

export default CartPage;
