import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/store-context";

const Header = () => {
  const { cart, setShowCart } = useContext(StoreContext);
  const numCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="text-gray-100 bg-brand-blue">
      <div className="container">
        <div className="lg:w-4/5 mx-auto py-4 px-5 flex justify-between">
          <div className="hover:text-gray-300">
            <Link
              onClick={() => setShowCart(false)}
              className="text-lg"
              to={"/"}>
              StoreCo
            </Link>
          </div>
          <div>
            <button
              onClick={() => setShowCart(showCart => !showCart)}
              className="focus:outline-none text-lg hover:text-gray-300">
              Cart ({numCartItems} items)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
