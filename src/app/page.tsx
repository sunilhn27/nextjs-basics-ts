import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex  items-center justify-evenly">
        <nav className="space-x-3 p-6">
          <Link href={"/dashboard"}>DashBoard</Link>

          <Link href={"/form"}>Form</Link>

          <Link href={"/userprofile"}>UserProfile</Link>

          <Link href={"/about"}>About</Link>
        </nav>
      </div>
    </main>
  );
}
