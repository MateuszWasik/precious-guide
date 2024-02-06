import Link from "next/link";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col space-y-2">
        <Link href={`${params.locale}/poland`}>Zakochaj się w Polsce</Link>
        <Link href={`en/poland`}>Check Poland in English</Link>
      </div>
    </main>
  );
}
