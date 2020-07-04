import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import AddToCartButton from "./AddToCartButton";

const ProductCardV = ({ product }) => {
  return (
    <article className="w-1/4">
      <Link to={`/product/${product.id}`}>
        <figure className="aspect--5x4">
          <img className="aspect__child" src={product.image} />
        </figure>
      </Link>
      <div className="flex justify-between mt-1 mb-2">
        <p className="text-lg mr-3">{product.name}</p>
        <p className="text-lg">
          {numeral(product.price / 100).format("$0,0.00")}
        </p>
      </div>

      <AddToCartButton id={product.id}>Add to Cart</AddToCartButton>
    </article>
  );
};

export default ProductCardV;
