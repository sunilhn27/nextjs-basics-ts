"use client";
import React, { useState } from "react";
import ModelComponent from "./_components/ModelComponent";

function ModelPage() {
  const [model, setModel] = useState<boolean>(false);
  const [model2, setModel2] = useState<boolean>(false);
  const [model3, setModel3] = useState<boolean>(false);

  return (
    <section className="my-12">
      <div className="flex justify-center items-center gap-2">
        <button
          className="bg-blue-500 text-white border-2 w-[9rem] h-[3rem] rounded-md"
          onClick={() => setModel(true)}
        >
          Text Model
        </button>

        <button
          className="bg-blue-500 text-white border-2 w-[9rem] h-[3rem] rounded-md"
          onClick={() => setModel2(true)}
        >
          Video Model
        </button>

        <button
          className="bg-blue-500 text-white border-2 w-[9rem] h-[3rem] rounded-md"
          onClick={() => setModel3(true)}
        >
          Form Model
        </button>
      </div>
      <ModelComponent isVisible={model} onClose={() => setModel(false)}>
        Model Titles
      </ModelComponent>

      <ModelComponent isVisible={model2} onClose={() => setModel2(false)}>
   
      </ModelComponent>
    </section>
  );
}

export default ModelPage;
