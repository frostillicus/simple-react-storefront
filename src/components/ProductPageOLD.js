import React, { useContext } from "react";
import { StoreContext } from "../store/store";
import ProductGrid from "./ProductGrid";
import numeral from "numeral";

const ProductPage = (props) => {
  const productId = props.match.params.id;
  const { handleAddToCart, productDB } = useContext(StoreContext);
  const product = productDB.filter(item => item.id === productId)[0];
  return (
    <section className="container py-8 px-8 lg:px-16">
      <h1 className="big-display-text">Take a gander.</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 lg:w-2/5 xl:w-1/3">
          <figure className="sm:mr-8 mb-6 aspect--square">
            <img className="aspect__child" src={product.image} alt={product.name} />
          </figure>
        </div>
        <div className="w-full sm:w-1/2 lg:3/5 xl:w-2/3">

          <h2 className="text-xl">{product.name}</h2>
          <p>{numeral(product.price / 100).format("$0,0.00")}</p>
          <button
            className="btn btn--primary mt-4 hover:bg-purple-200 focus:bg-purple-200 focus:outline-purple-500"
            onClick={() => handleAddToCart(productId)}>Add to cart</button>
        </div>
      </div>
      <div className="my-8">
        <ProductGrid columns={4} exclude={productId} headerText="You might also like:" />
      </div>
    </section>
  );
};

export default ProductPage;

// focus:outline-none focus:shadow-outline focus:bg-purple-200