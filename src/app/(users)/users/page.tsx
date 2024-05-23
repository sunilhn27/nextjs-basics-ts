import Link from "next/link";
import React, { use } from "react";
import { sort } from "fast-sort";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Template",
};

interface Props {
  searchParams: { sortOrder: string };
}

interface Users {
  name: string;
  email: string;
}

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/register" },
];

async function UserPage({ searchParams }: Props) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await data.json();

  const sortedUser = sort(users).asc(
    searchParams.sortOrder == "email"
      ? (users) => users.email
      : (users) => users.name
  );

  if (users.length < 0) {
    throw new Error("User lenght is  Zero");
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        {navLinks.map((link) => (
          <div className="" key={link.name}>
            <Link  href={link.href} key={link.name}>
              {link.name}
            </Link>
          </div>
        ))}

        <h1 className="text-4xl py-6">User Data</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th className="text-[1.5rem]">
                <Link href={"/users?sortOrder=name"}>UserName</Link>
              </th>
              <th className="text-[1.5rem]">
                <Link href={"/users?sortOrder=email"}>Email</Link>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {sortedUser.map((user) => (
              <tr key={user.name} className="border-2">
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPage;
