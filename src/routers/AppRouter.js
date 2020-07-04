import React, { useContext } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "../components/Header";
import StartPage from "../components/StartPage";
import ProductPage from "../components/ProductPage";
import CartPage from "../components/CartPage";
import CartMenu from "../components/CartMenu";
import ThankYouPage from "../components/ThankYouPage";
import Slide from "../components/Slide";
import ScrollToTop from "../components/ScrollToTop";
import { StoreContext } from "../context/store-context";

export const history = createHistory();

const AppRouter = () => {
  const { showCart } = useContext(StoreContext);

  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <ScrollToTop />
      <div>
        <Header />
        <Slide showCart={showCart}>
          <CartMenu />
        </Slide>
        <div>
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/`}
              component={StartPage}
              exact={true}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/cart`}
              component={CartPage}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/thankyou`}
              component={ThankYouPage}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/product/:id`}
              component={ProductPage}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
