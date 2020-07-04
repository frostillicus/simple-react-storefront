import React, { useContext, useEffect } from "react";
import ProductGrid from "./ProductGrid";
import { StoreContext } from "../context/store-context";

const StartPage = () => {
  const { productDB } = useContext(StoreContext);

  useEffect(() => {
    document.title = `StoreCo | Something for everyone`;
  });

  return (
    <section className="container px-5 py-12 md:py-20">
      <div className="lg:w-4/5 mx-auto">
        <h1 className="big-display-text">Something for everyone.</h1>
        <div className="product-grid--xl-enlarge">
          <ProductGrid columnSize={160} />
        </div>
      </div>
    </section>
  );
};

export default StartPage;
