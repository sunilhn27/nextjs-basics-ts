import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center fixed inset-0">
      <SignUp />
    </section>
  );
}
