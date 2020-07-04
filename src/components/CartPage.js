import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { history } from "../routers/AppRouter";
import { StoreContext } from "../context/store-context";
import CartItem from "./CartItem";
import ProductCardGrid from "./ProductCardGrid";

const CartPage = () => {
  const { cart, cartDispatch, setOldCart, productDB } = useContext(
    StoreContext
  );
  const cartInfo = cart.map(item => {
    const dbInfo = productDB.filter(dbItem => dbItem.id === item.id)[0];
    return {
      ...dbInfo,
      quantity: item.quantity
    };
  });
  const subTotal = cartInfo.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );
  const hasItems = cart.length > 0;

  useEffect(() => {
    document.title = `Shopping cart | StoreCo`;
  });

  const handleConfirmOrder = () => {
    setOldCart(cart);
    cartDispatch({
      type: "EMPTY_CART"
    });
    history.push("/thankyou");
  };

  return (
    <section className="container px-8 py-12 md:py-20">
      <div className="lg:w-4/5 mx-auto">
        <h1 className="big-display-text">Shopping cart.</h1>
        <div className="flex flex-wrap">
          {!hasItems && (
            <p className="text-center text-gray-800">Cart is empty.</p>
          )}
          <div className="flex-none w-full md:w-3/5 mb-8">
            {cartInfo.map(item => (
              <div key={item.id}>
                <CartItem product={item} />
                <hr />
              </div>
            ))}
          </div>
          {hasItems && (
            <div className="flex-none w-full md:w-2/5 md:pl-12 py-6">
              <div className="flex flex-col items-center p-8 bg-gray-100">
                <p className="text-lg">Subtotal: </p>
                <p className="text-2xl mb-2">
                  {numeral(subTotal / 100).format("$0,0.00")}
                </p>
                <button
                  onClick={handleConfirmOrder}
                  className="btn btn--primary my-4"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8">
          <ProductCardGrid
            columnSize={600}
            exclude={cart.map(item => item.id)}
            numProducts={4}
            headerText="You might also like:"
          />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
