"use client";

function increnmentPage() {
  const { count, decrenment, increnment } = useCount();

  return (
    <section className="flex justify-center items-center my-12">
      <div className="flex flex-col">
        <h1 className="text-[2rem] mb-6">Zustand State managment</h1>
        <div className="flex flex-col">
          <h1 className="text-[1.2rem]">Count : {count}</h1>
          <div className="flex space-x-6 mt-6">
            <button
              className="rounded-lg px-4 py-2 border-2"
              onClick={increnment}
            >
              Increnment (+)
            </button>
            <button
              className="rounded-lg px-4 py-2 border-2"
              onClick={decrenment}
            >
              Decrenment (-)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useCount } from "@/app/store/countstore";

export default increnmentPage;
