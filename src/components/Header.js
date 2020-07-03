import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/store-context";

const Header = () => {
  const { cart, setShowCart } = useContext(StoreContext);
  const numCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-purple-200">
      <div className="container lg:w-4/5 py-4 px-5 lg:px-16 flex justify-between">
        <div className="hover:text-gray-700">
          <Link className="text-lg" to="/">
            Home
          </Link>
        </div>
        <div>
          <button
            onClick={() => setShowCart(showCart => !showCart)}
            className="focus:outline-none text-lg hover:text-gray-700"
          >
            Cart ({numCartItems} items)
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
