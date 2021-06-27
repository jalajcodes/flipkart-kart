import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Products = () => {
  const [value, setValue] = useState(1);
  const products = useStoreState((state) => state.products);
  const savedProducts = useStoreState((state) => state.savedProducts);
  const removeProduct = useStoreActions((action) => action.removeProduct);
  const saveForLater = useStoreActions((action) => action.saveForLater);
  const addProductFromSavedProducts = useStoreActions(
    (action) => action.addProductFromSavedProducts
  );

  const increment = () => {
    setValue((prev) => ++prev);
  };

  const decrement = () => {
    setValue((prev) => --prev);
  };

  const handleRemove = (id) => {
    removeProduct(id);
  };

  return (
    <div className="cart-products">
      <h1>My Cart ({products.length})</h1>
      <div className="list">
        {products.map((p) => {
          return (
            <div className="list-item">
              <div className="item-image">
                <img src={p.image} alt="product" />
              </div>
              <div className="item-info">
                <h4>{p.title}</h4>
                <em>Brand {p.brand}</em>
                <div className="price">
                  <strong>₹{Math.round(p.price * 74)}</strong>
                </div>
                <div className="quantity-input">
                  <button
                    className="quantity-button quantity-button-left"
                    onClick={() => decrement()}
                  >
                    &mdash;
                  </button>
                  <input
                    className="quantity-value"
                    type="text"
                    value={value}
                    readonly
                  />
                  <button
                    className="quantity-button quantity-button-right"
                    onClick={() => increment()}
                  >
                    &#xff0b;
                  </button>
                </div>
                <div className="list-buttons">
                  <button
                    className="save-for-later"
                    onClick={() => saveForLater(p)}
                  >
                    Save for Later
                  </button>
                  <button
                    className="remove-item"
                    onClick={() => handleRemove(p.id)}
                  >
                    Remove Item{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="list">
        <h1>Saved for later ({savedProducts.length})</h1>
        {savedProducts.map((p) => {
          return (
            <div className="list-item">
              <div className="item-image">
                <img src={p.image} alt="product" />
              </div>
              <div className="item-info">
                <h4>{p.title}</h4>
                <em>Brand {p.brand}</em>
                <div className="price">
                  <strong>₹{Math.round(p.price * 74)}</strong>
                </div>
                <div className="list-buttons">
                  <button
                    className="save-for-later"
                    onClick={() => addProductFromSavedProducts(p)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
