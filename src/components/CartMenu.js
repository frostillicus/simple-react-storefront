import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { StoreContext } from "../context/store-context";
import numeral from "numeral";

const CartMenu = () => {
  const { cart, setShowCart, productDB } = useContext(StoreContext);
  const cartInfo = cart.map(item => {
    const dbInfo = productDB.filter(dbItem => dbItem.id === item.id)[0];
    return {
      ...dbInfo,
      quantity: item.quantity
    };
  });
  const hasItems = cart.length > 0;
  const subTotal = cartInfo.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );

  return (
    <div>
      <section
        onClick={() => setShowCart(false)}
        className="absolute top-0 right-0 w-full h-screen"
      ></section>
      <section className="cart-menu__wrapper absolute top-0 right-0 w-full p-8 lg:p-12 bg-gray-100 border-l border-b border-gray-200 z-50 rounded-bl">
        <div className="flex flex-col">
          {!hasItems && (
            <p className="text-center text-gray-800">Cart is empty.</p>
          )}
          <div className="flex-none mb-8">
            {cartInfo.map(item => (
              <div key={item.id}>
                <CartItem product={item} nameTrunc={48} />
                <hr />
              </div>
            ))}
          </div>
          {hasItems && (
            <div className="flex-none pl-8 flex flex-col items-center">
              <p className="text-lg">Subtotal: </p>
              <p className="text-2xl">
                {numeral(subTotal / 100).format("$0,0.00")}
              </p>
              <Link
                onClick={() => setShowCart(showCart => !showCart)}
                to={`${process.env.PUBLIC_URL}/cart`}
                className="btn btn--primary my-4"
              >
                Go to cart
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartMenu;
