import React from "react";
import { photo as products } from "../helper";
import Image from "next/image";
import Link from "next/link";

function ProductListPage() {
  return (
    <section className="flex justify-center items-center my-12">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 w-[20rem] h-[15rem] rounded-lg flex flex-col justify-center items-center"
          >
            <Link href={`/products/${product.id}`}>
              <Image src={product.url} alt={product.name} />
            </Link>
            <h1>{product.author}</h1>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default ProductListPage;
