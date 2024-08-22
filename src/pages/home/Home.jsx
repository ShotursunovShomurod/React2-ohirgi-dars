import Categories from "@/components/categories/Categories";
import Delivery from "@/components/category/Category";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ReclamaImg from "@/components/ReclamaIg/ReclamaIg";
import Products from "@/components/products/Products";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <ReclamaImg title="Fresh Vegetables Big discount" />
      <Categories />
      <Products />
      <Delivery />
      <Footer />
    </>
  );
};

export default Home;
