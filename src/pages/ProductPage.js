import { useState } from "react";
import ProductList from "../components/ProductList";
import data from "../data.json";

const ProductPage = () => {
  const [products, setProducts] = useState(data);

  return (
    <div className="product-page">
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default ProductPage;
