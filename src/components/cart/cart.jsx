import React from "react";
import { FaStar } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { useStateValue } from "../context/Index";
import {} from "number-brm";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);

  const handleRemoveFromCart = (product) => {
    dispatch({ type: "CART", payload: product });
  };

  return (
    <div className="container mx-auto mt-3">
      <div className="grid gap-7">
        {cart?.map((product) => {
          const discountedPrice =
            product.price - (product.price * product.discountPercentage) / 100;

          return (
            <div
              key={product.id}
              className="rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center border p-5 relative shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-60 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover duration-300 transform hover:scale-105"
                  src={product.images[0]}
                  alt={product.title}
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <h2 className="text-[22px] font-bold text-[#253D4E] leading-tight">
                  {product.title}
                </h2>
                <p className="text-[14px] text-[#777]">{product.description}</p>
                <div className="flex gap-4 items-center">
                  <span className="text-[20px] text-[#3BB77E] font-bold">
                    ${product.price}
                  </span>
                  <span className="line-through text-[14px] text-[#B6B6B6] font-bold">
                    ${discountedPrice.brm()}
                  </span>
                </div>
              </div>
              <div className="flex justify-end p-4">
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className="text-[#ff0000] text-3xl hover:text-red-600 transition-colors"
                >
                  <TbXboxXFilled />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;


// import React from "react";
// import { FaStar } from "react-icons/fa";
// import {} from "number-brm";
// import { useStateValue } from "../context/Index";
// import { TbXboxXFilled } from "react-icons/tb";
// const Cart = () => {
//   const [data, dispatch] = useStateValue();
//   console.log(data);

//   let items = data?.cart.map((product) => {
//     let percentageCount =
//       product.price - (product.price * 100) / product.discountPercentage;
//     return (
//       <>
//         <div
//           className="rounded-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center border mb-7 relative"
//           key={product.id}
//         >
//           <div className="w-full h-60  rounded-lg">
//             <img
//               className="w-full h-full object-contain duration-300 hover:scale-105"
//               src={product.images[0]}
//               alt="Photo"
//             />
//           </div>
//           <div className="flex flex-col gap-2 p-[5px_0_25px_16px] items-start justify-end"> 
//             <p className="text-[20px] font-[700] text-[#253D4E] text-start">
//               {product.title}
//             </p>
//             <div>
//               <div className="flex">
//                 <p className="text-[#B6B6B6] text-[14px] text-start  lg-[500px]">
//                   {product.description}
//                 </p>
//               </div>
//               <div className="flex  gap-[20px]">
//                 <div className="flex gap-2 mt-2 items-center">
//                   <strong className="text-[18px] text-[#3BB77E] font-[700]">
//                     ${product.price}
//                   </strong>
//                   <strong className="line-through text-[12px] text-[#B6B6B6] font-[700] ">
//                     ${percentageCount.brm()}
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col relative gap-2 items-end">
//             <button
//               onClick={() => dispatch({ type: "CART", payload: product })}
//               className=" font-bold text-[#ff0000] text-3xl absolute flex items-center justify-center  ring-0 top-0 rounded-lg h-12 w-[120px]"
//             >
//               {" "}
//               <TbXboxXFilled />
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   });
//   return (
//     <div className="container mx-auto mt-3">
//       <div className="grid grid-cols-1 ">{items}</div>
//     </div>
//   );
// };

// export default Cart;
