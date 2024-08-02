import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export const metadata = {
  title: "Guest",
};

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        quality={80}
        placeholder="blur"
        className="object-cover"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-8xl font-normal tracking-tight text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
