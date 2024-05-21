import React from "react";
import { Photo } ,ph from "../helper"; // Assuming Photo is an array of objects
import Image, { StaticImageData } from "next/image";


interface GalleryIDPageProps {
  params: { id: number }; // Interface for props received by the component
}

function GalleryIDPage({ params }: GalleryIDPageProps): JSX.Element {
  // Find the photo that matches the given ID (handle cases where no match found)
  const photo: Photo = photos.find(p => p.id === id)!

  return (
    <section className="">
      <div className="flex justify-center items-center">
        <div className="text-5xl my-6">Gallery</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[20rem] h-[20rem] border-2 rounded-lg ">
          <Image src={url} alt={"alt"} height={320} width={302} />
          <h1 className="my-4 flex items-center justify-center text-2xl font-bold">
            {"author"}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default GalleryIDPage;
