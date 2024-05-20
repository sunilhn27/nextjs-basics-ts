import React from "react";
import { Photo } from "./helper";
import Image from "next/image";

function GalleryPage() {
  return (
    <section className="">
      <div className="flex justify-center items-center">
        <div className="text-5xl my-6">Gallery</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-5">
          {Photo.map((pho, index) => (
            <div
              key={index}
              className="w-[20rem] h-[20rem] border-2 rounded-lg "
            >
              <Image src={pho.url} alt={pho.name} height={520} width={320} />
              <h1 className="my-4 flex items-center justify-center text-2xl font-bold">
                {pho.author}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
