// Import necessary modules
import React from "react";
import Image from "next/image";
import { photo as photos } from "../helper"; // Import the photos array

interface GalleryIDPageProps {
  params: { id: string };
}

async function GalleryIDPage({ params }: GalleryIDPageProps) {
  const product = photos.find((pro) => pro.id === parseInt(params.id));
  if (!product) return <div>Product not found</div>;
  return (
    <section className="">
      <div className="flex justify-center items-center">
        <div className="text-5xl my-6">Gallery</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[20rem] h-[20rem] border-2 rounded-lg">
          <Image src={product.url} alt="" width={500} height={500}></Image>
          <h1 className="text-3xl">{product.author}</h1>
        </div>
      </div>
    </section>
  );
}

export default GalleryIDPage;
