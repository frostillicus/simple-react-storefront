import React, { useContext } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { StoreContext } from "../context/store-context";

const CartItem = ({ product }) => {
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

  const truncName =
    product.name.length > 48 ? product.name.slice(0, 48) + "..." : product.name;

  return (
    <div className="flex items-center my-4">
      <Link to={`/product/${product.id}`} className="flex-none">
        <figure className="mr-4">
          <img
            onClick={() => setShowCart(false)}
            className="h-16 w-16 object-cover"
            src={product.image}
            alt={product.name}
          />
        </figure>
      </Link>
      <div className="mr-4">
        <p className="text-lg">{truncName}</p>
        <div className="text-sm flex flex-wrap items-center">
          <div className="mt-1">
            <button
              className="border px-2 mr-3"
              onClick={() => handleDeleteItem(product.id)}
            >
              Delete
            </button>
          </div>
          <div className="flex flex-no-wrap mt-1">
            <span className="mr-1">Quantity: </span>
            <button
              className="border px-2"
              onClick={() => handleDecItem(product.id)}
            >
              -
            </button>
            <div className="mx-1 font-mono">{product.quantity}</div>
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
