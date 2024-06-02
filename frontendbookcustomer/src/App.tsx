import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import AboutUs from "./pages/AboutUs";

const App: React.FC = () => {
  return (
    <>
      <div className="relative min-h-screen ">
        <Routes>
          <Route path="/login" Component={Login}></Route>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/aboutus" Component={AboutUs} />
          <Route path="/p/:productAlias" Component={DetailProduct} />
          <Route path="/account" Component={Account} />

          <Route Component={ProtectedRoute}>
            <Route path="/cart" Component={Cart} />
            <Route path="/checkout" Component={Checkout} />
            <Route path="/order" Component={Order} />
          </Route>
        </Routes>
      </div>

      <Toaster />
    </>
  );
};

export default App;
