import React, { useContext } from "react";
import { StoreContext } from "../context/store-context";
import CartItem from "./CartItem";
import ProductCardGrid from "./ProductCardGrid";
import numeral from "numeral";

const CartPage = () => {
  const { cart, productDB } = useContext(StoreContext);
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

  return (
    <section className="container px-8 py-12 md:py-20 lg:px-16">
      <h1 className="big-display-text">Shopping cart.</h1>
      <div className="flex flex-wrap">
        <div className="flex-none w-full md:w-2/3 mb-8">
          {cartInfo.map(item => (
            <div key={item.id}>
              <CartItem product={item} />
              <hr />
            </div>
          ))}
        </div>
        <div className="flex-none w-full md:w-1/3 md:pl-12 py-4">
          <div className="flex flex-col items-center p-8 bg-gray-100">
            <p className="text-lg">Subtotal: </p>
            <p className="text-2xl">
              {numeral(subTotal / 100).format("$0,0.00")}
            </p>
            <button className="btn btn--primary my-4">Checkout</button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ProductCardGrid
          columnSize={600}
          exclude={cart.map(item => item.id)}
          numProducts={6}
          headerText="You might also like:"
        />
      </div>
    </section>
  );
};

export default CartPage;
