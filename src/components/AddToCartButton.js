import React, { useContext } from "react";
import { StoreContext } from "../context/store-context";

const AddToCartButton = ({ id, openCartMenu, scrollToTop, children }) => {
  const { setShowCart, cartDispatch } = useContext(StoreContext);

  const handleAddToCart = id => {
    if (openCartMenu) setShowCart(true);
    cartDispatch({
      type: "ADD_TO_CART",
      id
    });
    if (scrollToTop)
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  };

  return (
    <button onClick={() => handleAddToCart(id)} className="btn btn--primary">
      {children}
    </button>
  );
};

export default AddToCartButton;
