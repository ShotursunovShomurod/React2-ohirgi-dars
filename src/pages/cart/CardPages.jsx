import React from "react";
import { Cart, Empty } from "@/components";
import { useStateValue } from "@/components/context/Index";
import Card from '@/assets/image.png'
const CardPages = () => {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart); 

  let content;
  if (cart.length > 0) {
    content = <Cart data={cart} />;
  } else {
    content = (
      <Empty
        url={Card}
        title="Haridingiz aniqlanmagan"
      />
    );
  }

  return <div>{content}</div>;
};

export default CardPages;
