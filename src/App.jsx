import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Layout from "./components/Layout";
import Products from "./components/Products";
import CustomerCare from "./components/CustomerCare";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/customercare" element={<CustomerCare />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/productDetails/:id" element={<ProductDetails />} />
              <Route path="/" element={<Products />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
