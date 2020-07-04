import React, { useState, useReducer, useEffect } from "react";
import { StoreContext } from "../context/store-context";
import AppRouter from "../routers/AppRouter";
import { cartReducer } from "../reducers/cart";
import { likesReducer } from "../reducers/likes";
import { productDB, initCart } from "../fixtures/fixtures";

const StoreApp = () => {
  const [cart, cartDispatch] = useReducer(cartReducer, initCart);
  const [likes, likesDispatch] = useReducer(likesReducer, []);
  const [showCart, setShowCart] = useState(false);
  const [oldCart, setOldCart] = useState([]);

  useEffect(() => {
    try {
      const json = localStorage.getItem("cart");
      const newCart = JSON.parse(json);
      if (newCart) {
        cartDispatch({
          type: "LOAD_CART",
          newCart
        });
      }
    } catch (e) {}
    try {
      const json = localStorage.getItem("likes");
      const newLikes = JSON.parse(json);
      if (newLikes) {
        likesDispatch({
          type: "LOAD_LIKES",
          newLikes
        });
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cart);
    localStorage.setItem("cart", json);
  }, [cart]);

  useEffect(() => {
    const json = JSON.stringify(likes);
    localStorage.setItem("likes", json);
  }, [likes]);

  return (
    <>
      <StoreContext.Provider
        value={{
          cart,
          cartDispatch,
          likes,
          likesDispatch,
          showCart,
          setShowCart,
          oldCart,
          setOldCart,
          productDB
        }}
      >
        <AppRouter />
      </StoreContext.Provider>
    </>
  );
};

export default StoreApp;
