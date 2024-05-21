import React from "react";
import { photo } from "./helper";
import Image from "next/image";
import Link from "next/link";

function GalleryPage() {
  return (
    <section className="">
      <div className="flex justify-center items-center">
        <div className="text-5xl my-6">Gallery</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-5">
          {photo.map((pho, index) => (
            <div
              key={index}
              className="w-[20rem] h-[20rem] border-2 rounded-lg "
            >
              <Link href={`/gallery/${pho.id}`}>
                <Image src={pho.url} alt={pho.name} height={520} width={320} />
              </Link>
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
