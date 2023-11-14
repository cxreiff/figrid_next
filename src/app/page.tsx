import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <UserButton afterSignOutUrl="/" />
        <Link href={"example"}>example {"->"}</Link>
      </div>
    </main>
  );
}
