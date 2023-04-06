import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./components/Layout";
import Products from "./components/Products";
import CustomerCare from "./components/CustomerCare";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Signin from "./components/Signin";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/signin" element={<Signin />} />
                <Route path="/customercare" element={<CustomerCare />} />
                <Route element={<PrivateRoutes />}>
                  <Route path="/cart" element={<Cart />} />
                </Route>

                <Route
                  path="/productDetails/:id"
                  element={<ProductDetails />}
                />
                <Route path="/" element={<Products />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
