import { createStore, action, persist } from "easy-peasy";

export default createStore(
  persist({
    products: [],
    totalPrice: 0,
    savedProducts: [],
    addProduct: action((state, product) => {
      state.products.push(product);
    }),
    addProductFromSavedProducts: action((state, product) => {
      state.savedProducts = [...state.savedProducts].filter(
        (p) => p.id !== product.id
      );
      state.products.push(product);
    }),
    removeProduct: action((state, id) => {
      state.products = [...state.products].filter((p) => p.id !== id);
    }),
    saveForLater: action((state, product) => {
      state.products = [...state.products].filter((p) => p.id !== product.id);
      state.savedProducts.push(product);
    })
  })
);
