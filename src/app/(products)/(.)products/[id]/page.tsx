"use client";
import React, { useState } from "react";
import ProductModel from "./_components/ProductModel";
import { photo as products } from "../../helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface Props {
  params: { id: string };
}

function InterceptedRoute({ params }: Props) {
  const [showModel, setShowModel] = useState(true);
  const router = useRouter();

  const closeModel = async () => {
    setShowModel(false);
    router.push("/products");
  };

  const product = products.find((pro) => pro.id === parseInt(params.id));

  if (!product) return <div>Product Not Found</div>;
  
  return (
    <div>
      <ProductModel isVisible={showModel} onClose={() => closeModel()}>
        <Image src={product.url} alt=""></Image>
      </ProductModel>
    </div>
  );
}

export default InterceptedRoute;
