"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const session = useSession();
  const router = useRouter();

  const handleSignIn = async () => {
    signIn("github");
  };

  if (session.status === "unauthenticated")
    return (
      <section className="justify-center items-center flex my-12">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-[2rem]"> Please Login</h1>
          <button
            className="w-[9rem] h-[3rem] border-2 bg-blue-600 text-white rounded-lg"
            onClick={() => handleSignIn()}
          >
            Login
          </button>
        </div>
      </section>
    );

  if (session.status === "authenticated")
    return (
      <section className="justify-center items-center flex my-12">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-[2rem]"> Welcome : {session.data.user?.name}</h1>
          <button
            className="w-[9rem] h-[3rem] border-2 bg-blue-600 text-white rounded-lg"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </section>
    );
}

export default LoginPage;
