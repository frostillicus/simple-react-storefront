import React, { useContext } from "react";
import ProductGrid from "./ProductGrid";
import { StoreContext } from "../context/store-context";

const StartPage = () => {
  const { productDB } = useContext(StoreContext);
  console.log(productDB[0]);

  return (
    <section className="container lg:w-4/5 px-8 py-12 md:py-20 lg:px-16">
      <h1 className="big-display-text">Something for everyone.</h1>
      <div className="product-grid--xl-enlarge"></div>
      <ProductGrid columnSize={168} />
    </section>
  );
};

export default StartPage;
