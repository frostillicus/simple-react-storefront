import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import AddToCartButton from "./AddToCartButton";
import { truncate } from "../utils/utils";

const ProductCardH = ({ product }) => {
  return (
    <article className="flex flex-col xs:flex-row">
      <div className="flex-none w-32">
        <Link to={`/product/${product.id}`}>
          <figure className="aspect--square">
            <img
              className="aspect__child rounded border border-gray-200"
              src={product.image}
              alt={product.name}
            />
          </figure>
        </Link>
      </div>
      <div className="flex flex-col justify-between mt-3 xs:mt-0 xs:ml-6">
        <div>
          <p className="text-gray-900 text-xl title-font font-medium -mt-1 mb-2">
            {truncate(product.name, 60)}
          </p>
        </div>
        <div className="mr-auto">
          <p className="title-font text-xl text-gray-900 mb-2">
            {numeral(product.price / 100).format("$0,0.00")}
          </p>
          <AddToCartButton id={product.id}>Add to Cart</AddToCartButton>
        </div>
      </div>
    </article>
  );
};

export default ProductCardH;
