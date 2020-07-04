import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/store-context";

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
        <div
          className="grid-smart grid-auto grid-gap-15"
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(${columnSize}px, 1fr))`
          }}
        >
          {cutDB
            .filter(product => !exclude.includes(product.id))
            .slice(0, numProducts)
            .map(product => (
              <Link
                key={product.id}
                to={`${process.env.PUBLIC_URL}/product/${product.id}`}
              >
                <figure className="aspect--square">
                  <img
                    className="aspect__child rounded border border-gray-200"
                    src={product.image}
                    alt={product.name}
                  />
                </figure>
              </Link>
            ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductGrid;
