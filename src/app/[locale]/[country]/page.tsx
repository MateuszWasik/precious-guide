import { useTranslations } from "next-intl";
import PolandLandscape from "@images/poland_welcome_page.jpg";
import { ImageComponent } from "@/components/image-component";
type CountryPageProps = {
  params: {
    country: string;
  };
};

export default function CountryWelcomePage({ params }: CountryPageProps) {
  const t = useTranslations("WelcomePage");

  return (
    <article>
      <header className="mb-5">
        <p className="text-xs">{t("sub_title")}</p>
        <h1 className="text-2xl font-bold">{t("title")}</h1>
      </header>
      <section>
        <div className="space-y-6">
          <ImageComponent alt="poland landscape" imageSrc={PolandLandscape} />

          <p>{t("p1")}</p>

          <hr className="my-4"></hr>

          <h3 id="history">{t("history.title")}</h3>
          <p>{t("history.p1")}</p>

          <hr className="my-4"></hr>

          <h3 id="nature">{t("nature.title")}</h3>
          <p>{t("nature.p1")}</p>

          <hr className="my-4"></hr>

          <h3 id="culture">{t("culture.title")}</h3>
          <p>{t("culture.p1")}</p>

          <hr className="my-4"></hr>

          <h3 id="hospitality">{t("hospitality.title")}</h3>
          <p>{t("hospitality.p1")}</p>

          <hr className="my-4"></hr>

          <h3 id="adventure">{t("adventure.title")}</h3>
          <p>{t("adventure.p1")}</p>

          <hr className="my-4"></hr>

          <h3 id="gate_to_europe">{t("gate_to_europe.title")}</h3>
          <p>{t("gate_to_europe.p1")}</p>

          <hr className="my-4"></hr>

          <h3 id="plan_your_trip">{t("plan_your_trip.title")}</h3>
          <p>{t("plan_your_trip.p1")}</p>

          {t("p2")}
        </div>
      </section>
    </article>
  );
}
