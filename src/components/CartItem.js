import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { StoreContext } from "../context/store-context";
import { truncate } from "../utils/utils";

const CartItem = ({ product, nameTrunc = 100 }) => {
  const { setShowCart, cartDispatch } = useContext(StoreContext);
  const handleIncItem = id => {
    cartDispatch({
      type: "INCREMENT_ITEM",
      id
    });
  };
  const handleDecItem = id => {
    cartDispatch({
      type: "DECREMENT_ITEM",
      id
    });
  };
  const handleDeleteItem = id => {
    cartDispatch({
      type: "DELETE_ITEM",
      id
    });
  };

  useEffect(() => {
    if (product.quantity === 0) {
      cartDispatch({
        type: "DELETE_ITEM",
        id: product.id
      });
    }
  }, []);

  return (
    <div className="flex items-center my-4">
      <div className="flex-none hidden xs:block">
        <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
          <figure className="mr-4">
            <img
              onClick={() => setShowCart(false)}
              className="h-16 w-16 object-cover rounded border border-gray-200"
              src={product.image}
              alt={product.name}
            />
          </figure>
        </Link>
      </div>
      <div className="mr-4">
        <p className="text-lg">{truncate(product.name, nameTrunc)}</p>
        <div className="text-sm flex flex-wrap items-center">
          <div className="mt-1">
            <button
              className="border px-2 mr-3"
              onClick={() => handleDeleteItem(product.id)}
            >
              Delete
            </button>
          </div>
          <div className="flex flex-no-wrap items-center mt-1">
            <span className="mr-1">Quantity: </span>
            <button
              className="border px-2"
              onClick={() => handleDecItem(product.id)}
            >
              -
            </button>
            <div className="mx-1 font-mono mt-1">{product.quantity}</div>
            <button
              className="border px-2"
              onClick={() => handleIncItem(product.id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <div className="text-lg m-auto">
          {numeral((product.price * product.quantity) / 100).format("$0,0.00")}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
