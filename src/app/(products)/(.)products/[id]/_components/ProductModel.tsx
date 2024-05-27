import React, { ReactNode } from "react";

interface Props {
  onClose: () => void;
  children: ReactNode;
  isVisible: boolean;
}

function ProductModel({ children, onClose, isVisible }: Props) {
  if(!isVisible) return null
  return (
    <section className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
      <div className="bg-white flex flex-col rounded-lg">
        <button className="text-black place-self-end p-2" onClick={onClose}>X</button>
        <div className="text-black  bg-white w-[30rem] h-[20rem] flex justify-center items-center ">
          {children}
        </div>
      </div>
    </section>
  );
}

export default ProductModel;
