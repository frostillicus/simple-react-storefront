import React, { useContext } from "react";
import ProductGrid from "./ProductGrid";
import { StoreContext } from "../context/store-context";

const ThankYouPage = () => {
  const { oldCart } = useContext(StoreContext);

  return (
    <section className="container px-8 py-12 md:py-20">
      <div className="lg:w-4/5 mx-auto">
        <h1 className="big-display-text">Thanks for your order!</h1>
        <p className="text-gray-700">
          We will charge your credit card when the order ships (just kidding).
        </p>
        <div className="my-10 w-full">
          <ProductGrid
            columnSize={160}
            exclude={oldCart.map(item => item.id)}
            numProducts={10}
            headerText="You might also like:"
          />
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
