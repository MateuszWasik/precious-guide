import Link from "next/link";
import initTranslations from '../i18n';

type AppProps = {
  params: {
    lng: string;
  };
}

export default async function App({params}: AppProps) {
  console.log(params.lng);
  const { t } = await initTranslations(params.lng, [params.lng]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>{t('CarPage.h1')}</h1>
        <Link href="/poland">Click to Go to Poland</Link>
      </div>
    </main>
  );
}
