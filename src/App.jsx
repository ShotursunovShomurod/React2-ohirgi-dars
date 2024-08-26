import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home.jsx";
import Layout from "@/layout/Layout";
import SingleProduct from "./pages/home/singleProduct/SingleProduct";
import { Account, NewCart, Wishlist } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="Cart" element={<NewCart />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
