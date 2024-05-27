import React from "react";
import { photo as products } from "../../helper";
import Image from "next/image";

interface Props {
  params: { id: string };
}

function ProductID({ params }: Props) {
  const product = products.find((pro) => pro.id === parseInt(params.id));

  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="border-2 w-[20rem] h-[15rem] rounded-lg flex flex-col justify-center items-center">
        <Image src={product.url} alt=""></Image>
        <h2 className="text-2xl">{product.author}</h2>
      </div>
    </div>
  );
}

export default ProductID;
