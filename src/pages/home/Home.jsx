import React, { useState } from "react";
import { BestPrices, Products, Banners, Categories, Needs, Newsletter } from "@/components";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data, loading } = useFetch(
    `/products${selectedCategory ? `/category/${selectedCategory}` : ""}`,
    { limit: 10 },
    [selectedCategory]
  );
  const { data: categoryList } = useFetch("/products/category-list");


  const renderCategoryButtons = () => {
    if (!categoryList || !Array.isArray(categoryList)) {
      return null;
    }

    return (
      <div className="container py-4 mt-10">
        <ul className="flex whitespace-nowrap overflow-x-auto gap-4">
          <li>
            <button
              onClick={() => handleCategoryClick("")}
              className="px-4 py-1 bg-green-500 rounded-3xl text-white"
            >
              All
            </button>
          </li>
          {categoryList.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => handleCategoryClick(cat)}
                className="px-4 py-1 bg-green-500 rounded-3xl text-white"
              >
                {cat.split("-").join(" ")}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Newsletter />
      <Categories />
      <Banners />
      <Products data={data?.products} />
      <Needs />
      <BestPrices />
    </>
  );
};

export default Home;

