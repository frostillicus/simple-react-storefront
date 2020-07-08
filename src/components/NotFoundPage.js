import React, { useEffect } from "react";
import ProductGrid from "./ProductGrid";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = `Error 404 Page Not Found | StoreCo`;
  });

  return (
    <section className="container px-8 py-12 md:py-20">
      <div className="lg:w-4/5 mx-auto">
        <h1 className="big-display-text">Page Not found</h1>
        <p className="text-gray-700">
          Sorry! We don't seem to have a page here.
        </p>
        <p className="text-gray-700">
          Try viewing one of the products below instead!
        </p>
        <div className="my-10 w-full">
          <ProductGrid columnSize={160} numProducts={10} />
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
