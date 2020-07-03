import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { StoreContext } from "../context/store-context";

const Header = () => {
  const { cart } = useContext(StoreContext);
  const numCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-purple-200">
      <div className="container py-4 px-8 lg:px-16 flex justify-between">
        <div>
          <Link className="text-lg" to="/">
            Home
        </Link>
        </div>
        <div>
          <Link className="text-lg" to="/cart">Cart ({numCartItems} items)</Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
