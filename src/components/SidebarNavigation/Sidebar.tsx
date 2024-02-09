import { BasicInformationRoutes } from "@/constants/navigation/routes";
import { Link } from "@navigation/Link";
import { useTranslations } from "next-intl";

export const Sidebar = () => {
  const t = useTranslations("Navigation");
  return (
    <section className="hidden border-r border-slate-400  border-opacity-20 pl-5 md:block lg:block lg:flex-none lg:pl-0 ">
      <div className="w-64 py-16 lg:pr-0">
        <nav>
          <div className="mb-7">
            <ul className="space-y-2">
              <li>
                <h2>{t("BasicInformation.title")}</h2>
              </li>
              <li>
                <ul className="border-l border-slate-400 border-opacity-20 text-gray-400">
                  {BasicInformationRoutes.map(({ name, href }) => (
                    <>
                      <li
                        key={name}
                        className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white"
                      >
                        <Link href={href}>{name}</Link>
                      </li>
                    </>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <ul className="space-y-2">
              <li>
                <h2 className="space-y-2">{t("Transportation.title")}</h2>
              </li>
              <li>
                <ul className="border-l border-slate-400 border-opacity-20 text-gray-400">
                  <li className="relative">
                    <div className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                      <Link href="/poland/transportation/car">
                        {t("Transportation.car")}
                      </Link>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div className="item-center flex">
                      <div className=""></div>
                      <Link href="/poland/transportation/bus">
                        {t("Transportation.bus")}
                      </Link>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div>
                      <Link href="/poland/transportation/train">
                        {t("Transportation.train")}
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <ul className="space-y-2">
              <li>
                <h2>{t("CostOfLiving.title")}</h2>
              </li>
              <li>
                <ul className="border-l border-slate-400 border-opacity-20 text-gray-400">
                  <li className="relative">
                    <div className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                      <Link href="/poland/living-cost/common-products">
                        {t("CostOfLiving.CommonProducts")}
                      </Link>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div className="item-center flex">
                      <div className=""></div>
                      <Link href="/poland/living-cost/flat-rent">
                        {t("CostOfLiving.FlatRent")}
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};
