import React from "react";
import { auth, currentUser  } from "@clerk/nextjs/server";
import { SignInButton, UserButton } from "@clerk/nextjs";

function DashBoardPage() {
  const useAuth = auth();
  const user = currentUser();
  console.log(useAuth);
  console.log(user);
  return (
    <section className="my-12">
      <div className="flex justify-end items-center mx-6">
        <UserButton />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="text-5xl">Welcome to Dashboard Page</h1>
        <p></p>
      </div>
      <div className="flex justify-center items-center py-6">
        <div className="border-2 w-[36rem] h-[25rem] rounded-lg"></div>
      </div>
    </section>
  );
}

export default DashBoardPage;
