import React, { useContext } from "react";
import { StoreContext } from "../context/store-context";
import ProductCardH from "./ProductCardH";

const ProductGrid = ({
  columnSize = 200,
  numProducts = 100,
  exclude = [],
  headerText,
  quasiRandomSeed = 0
}) => {
  const { productDB } = useContext(StoreContext);
  const recommendedProducts = productDB.filter(
    product => !exclude.includes(product.id)
  );
  const sortedDB = productDB.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  const cutDB = sortedDB
    .filter(({ id }) => id >= quasiRandomSeed)
    .concat(sortedDB.filter(({ id }) => id < quasiRandomSeed));

  if (recommendedProducts.length > 0) {
    return (
      <div>
        {headerText && <p className="big-display-text">{headerText}</p>}
        <div className="">
          {cutDB
            .filter(product => !exclude.includes(product.id))
            .slice(0, numProducts)
            .map(product => (
              <div className="mb-8" key={product.id}>
                <ProductCardH product={product} />
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductGrid;
