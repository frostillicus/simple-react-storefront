import React, { useContext } from "react";
import numeral from "numeral";
import { StoreContext } from "../context/store-context";
import ProductGrid from "./ProductGrid";

const ProductPage = props => {
  const productId = props.match.params.id;
  const { setShowCart, cartDispatch, productDB } = useContext(StoreContext);
  const product = productDB.filter(item => item.id === productId)[0];
  const handleAddToCart = id => {
    setShowCart(true);
    cartDispatch({
      type: "ADD_TO_CART",
      id
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-12 md:py-20 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <h1 className="big-display-text w-full">Take a gander.</h1>
          <div className="w-full sm:w-2/5">
            <figure className="mt-1 mb-6 aspect--square flex-none">
              <img
                alt={product.name}
                className="aspect__child rounded border border-gray-200"
                src={product.image}
              />
            </figure>
          </div>
          <div className="w-full sm:w-3/5 sm:pl-6 md:pl-10 md:pb-6 mt-6 sm:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium leading-9 mb-5">
              {product.name}
            </h1>
            <div className="flex mt-0 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <p className="leading-relaxed">{product.description}</p>
            </div>
            <div className="flex flex-wrap">
              <span className="title-font font-medium text-2xl text-gray-900">
                {numeral(product.price / 100).format("$0,0.00")}
              </span>
              <button
                onClick={() => handleAddToCart(productId)}
                className="btn btn--primary ml-auto"
              >
                Add to cart
              </button>
              <button className="sm:mt-3 md:mt-0 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="my-10 w-full">
            <ProductGrid
              columnSize={160}
              exclude={productId}
              numProducts={10}
              headerText="You might also like:"
              quasiRandomSeed={productId}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
