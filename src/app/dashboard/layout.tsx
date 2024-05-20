import React, { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
  sales?: ReactNode;
  revenue?: ReactNode;
  profit?: ReactNode;
}

function DashBoardPage({
  children,
  sales,
  revenue,
  profit,
}: Readonly<DashboardProps>) {
  return (
    <section className="my-12">
      <div className="flex justify-center items-center">
      {children}
      </div>
      <div className="flex justify-center items-center ">{profit}</div>
      <div className="mt-6">
        <div className="flex mx-2 gap-5">
          {revenue}
          {sales}
        </div>
      </div>
    </section>
  );
}

export default DashBoardPage;
