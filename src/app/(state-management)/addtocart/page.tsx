"use client";
import React from "react";
import { Products } from "@/app/(state-management)/addtocart/_data";
import { useAddToCart } from "@/app/store/addtocartstore";
function ZustandPage() {
  const { addToCart, clearAll, removeToCart, cart } = useAddToCart();

  return (
    <section className="flex justify-center items-center ">
      <div className="flex flex-col my-12">
        <div className="">
          <h1 className="text-[2rem] mb-4">Add to Cart Page Zustand</h1>
          <div className="flex flex-col space-y-2">
            {Products.map((product) => (
              <div key={product.id}>
                <button
                  className="border-2 px-4 py-1 rounded-lg"
                  onClick={() => addToCart(product)}
                >
                  {product.name} : Add to Cart (+)
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="my-12">
          <div className="flex flex-col">
            <h1 className="text-[2rem]">Inside Cart</h1>

            {cart.map((item) => (
              <div className="flex justify-center items-center space-x-2 py-1 " key={item.id}>
                <h1 className="text-[1.2rem]">{item.name}</h1>
                <button
                  className="border-2 py-1 px-2 rounded-lg"
                  onClick={() => removeToCart(item.id)}
                >
                  RemoveFromCart
                </button>
              </div>
            ))}

            {cart.length > 0 && (
              <button
                className="rounded-lg py-1 px-2 border-2 mt-6"
                onClick={() => clearAll()}
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZustandPage;
