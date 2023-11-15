import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { TextTyper } from "~/components/text-typer";
import { loremIpsum } from "~/utilities/lorem-ipsum";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center h-16 px-6 py-4 m-2 border border-stone-500 gap-4">
        <Link href="/" className="grow">
          figrid
        </Link>
        <Link href={"example"}>
          /protected
        </Link>
        <UserButton />
      </div>
      <main className="flex flex-col grow items-center justify-center m-2 border border-stone-500">
        <TextTyper text={loremIpsum} className="p-6" />
      </main>
    </div>
  );
}
