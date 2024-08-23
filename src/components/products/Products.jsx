import axios from "@/api/index";
import React, { useEffect, useState } from "react";
import Card from "../ProductsCard/ProductsCard";

const Products = () => {
  const [limit, setLimit] = useState(2);
  const offset = 6
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("category-list");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products`, {
        params: {
          limit: offset * limit,
        },
      })

      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [limit]);

  useEffect(() => {
    axios
      .get(`/products/${sort}`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(categories);

  const items = products?.map((e) => (
    <div className="relative">
      <Card key={e.id} img={e.images[0]} title={e.title} id={e.id} />
      <button className="absolute top-0 left-0 w-16 text-white font-bold text-1xl flex items-center justify-center px-2 py-2 rounded-[10px_0px_20px_0px] bg-blue-500">Sale</button>
    </div>
  ));
  return (
    <div>
      <div className="title flex container mx-auto my-5 justify-between ">
        <div className="w-1/2">
          <h3 className="text-4xl text-[#253D4E]">Popular Products</h3>
        </div>
      </div>
      <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center">
        {items}
      </div>
      <div className="flex items-center justify-center gap-6 pb-4">
          <div></div>
      </div>
    </div>
  );
};

export default Products;
