import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/spa">SPA</Link>
      <Link href="/ssr">SSR</Link>
    </div>
  );
}
