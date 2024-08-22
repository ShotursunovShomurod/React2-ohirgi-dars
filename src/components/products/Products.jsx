import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "@/api/index";

const Products = () => {
  const [products, setProducts] = useState(null);
  const offset = 6
  const [limit, setLimit] = useState(2);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
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
    <Card key={e.id} img={e.images[0]} title={e.title} id={e.id} />
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
