import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <div className="site-wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
