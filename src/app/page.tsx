import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href="/poland">Click to Go to Poland</Link>
      </div>
    </main>
  );
}
