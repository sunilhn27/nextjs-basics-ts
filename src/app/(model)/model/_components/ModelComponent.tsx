import React, { ReactNode } from "react";

interface ModelProps {
  isVisible: boolean;
  onClose: () => void;
  children?: ReactNode;
}

function ModelComponent({ isVisible, onClose, children }: ModelProps) {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "wrapper") onClose();
  };

  return (
    <div className="bg-black">
      <div
        className="fixed inset-0 flex flex-col justify-center items-center bg-black opacity-30"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="bg-white flex flex-col">
          <button className="place-self-end px-2" onClick={onClose}>
            X
          </button>
          <h1 className="text-black w-[25rem] h-[15rem] border-2 flex justify-center items-center text-center px-6">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ModelComponent;
