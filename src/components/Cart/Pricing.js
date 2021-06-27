import { useStoreState } from "easy-peasy";

const Pricing = () => {
  const products = useStoreState((state) => state.products);

  const totalPrice = products.reduce((acc, item) => {
    return (acc += Math.round(item.price * 74));
  }, 0);

  const discountedPrice = totalPrice - totalPrice * 0.1;

  return (
    <div className="cart-pricing">
      <h1>Price Details</h1>
      <div className="price-list">
        <div>
          Price ({products.length} Items): ₹{totalPrice}
        </div>
        <div>Price after 10% discount: ₹{discountedPrice}</div>
        <div>Delivery Charge: ₹100</div>
        <h4>Total Price: ₹{discountedPrice + 100}</h4>
      </div>
    </div>
  );
};

export default Pricing;
