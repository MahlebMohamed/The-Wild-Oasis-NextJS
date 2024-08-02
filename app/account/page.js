import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Guest are",
};

export default async function Page() {
  const session = await auth();

  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, {session.user.name.split(" ").at(0)}
    </h2>
  );
}
