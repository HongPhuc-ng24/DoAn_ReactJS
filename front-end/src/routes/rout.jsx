import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/UserPage/Home/Home";
import Product from "../pages/UserPage/Product/Product";
import Cart from "../pages/UserPage/Cart/Cart";
import Contact from "../pages/UserPage/Contact/Contact";
import Login from "../pages/UserPage/Login/Login";
import Signup from "../pages/UserPage/SignUp/SignUp";
import AdminUserPage from '../pages/AdminPage/UserManagement/Users';
import AdminLayout from "../layouts/Admin/AdminLayout";
import PrivateRoute from "./PrivateRoute";
import Loginadmin from "../pages/AdminPage/UserManagement/Login"

const Rout = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  cart,
  setCart,
  addtocart,
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              addtocart={addtocart}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Product
              product={product}
              setProduct={setProduct}
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              addtocart={addtocart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/login" element={<Loginadmin />} />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute>
              <AdminLayout>
                <AdminUserPage />
              </AdminLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Rout;
