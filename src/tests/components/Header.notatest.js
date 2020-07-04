import React, { useContext } from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import { StoreContext } from "../../context/store-context";

test("should render Header correctly", () => {
  const wrapper = shallow(
    <StoreContext.Provider
      value={{
        cart,
        cartDispatch,
        showCart,
        setShowCart
      }}
    >
      <Header />
    </StoreContext.Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
