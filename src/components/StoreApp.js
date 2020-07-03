import React, { useState, useReducer } from "react";
import { StoreContext } from "../context/store-context";
import AppRouter from "../routers/AppRouter";
import { cartReducer } from "../reducers/reducers";
import { productDB, initCart } from "../fixtures/fixtures";

const StoreApp = () => {
  const [cart, cartDispatch] = useReducer(cartReducer, initCart);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <StoreContext.Provider
        value={{ cart, cartDispatch, showCart, setShowCart, productDB }}
      >
        <AppRouter />
      </StoreContext.Provider>
    </>
  );
};

export default StoreApp;
