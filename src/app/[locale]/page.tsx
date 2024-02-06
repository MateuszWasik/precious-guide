import { Link } from "@navigation/Link";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home({ params: { locale } }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col space-y-2">
        <Link href={`/poland`} locale="pl">
          Zakochaj się w Polsce
        </Link>
        <Link href={`/poland`} locale="en">
          Check Poland in English
        </Link>
      </div>
    </main>
  );
}
