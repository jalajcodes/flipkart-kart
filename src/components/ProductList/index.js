import Card from "./Card";
import "./productlist.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <div className="header">
        <h4>Clothing and Accessories</h4>
        <span>(Showing 1 – 10 products of 1,00,302 products)</span>
      </div>
      <div className="products">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
