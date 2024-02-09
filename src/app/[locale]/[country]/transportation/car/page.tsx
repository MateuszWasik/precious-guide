import PolandLandscape from "@images/transportation/car/car_page.png";
import SpeedLimitTable from "@images/transportation/car/speed_table.png";
import Photoradar from "@images/transportation/car/photoradar.png";
import SpeedControlSign from "@images/transportation/car/speed_control_sign.png";
import VideotoolingSign from "@images/transportation/car/highway_org.png";
import GasStation from "@images/transportation/car/gas_station.png";
import Highway from "@images/transportation/car/highway.png";
import { ImageComponent } from "@/components/ImageComponent";
import { useTranslations } from "next-intl";
import { MessageBubble } from "@/components/MessageBubble/MessageBubble";
import { DynamicSectionHeader } from "@/components/DynamicSectionHeader";

export default function CarPage() {
  const t = useTranslations("CarPage");

  return (
    <article>
      <header className="mb-5">
        <p className="text-xs">{t("sub_h1")}</p>
        <h1 className="text-2xl font-bold">{t("h1")}</h1>
      </header>
      <div className="space-y-6">
        <ImageComponent alt="poland landscape" imageSrc={PolandLandscape} />
        <p>{t("main_description_section.p1")}</p>
        <p>{t("main_description_section.p2")}</p>
        <hr className="mx-4"></hr>
        <DynamicSectionHeader
          translatedText={t("speed_limits_section.title")}
        />
        <p>{t("speed_limits_section.p1")}</p>
        <ImageComponent alt="speed limit table" imageSrc={SpeedLimitTable} />

        <MessageBubble variant="hint">
          <p className="mb-4">{t("speed_limits_section.hint1.p1")}</p>
          <p>{t("speed_limits_section.hint1.p2")}</p>
        </MessageBubble>

        <hr className="mx-4"></hr>
        <DynamicSectionHeader
          translatedText={t("speed_camera_section.title")}
        />
        <p>{t("speed_camera_section.p1")}</p>
        <ImageComponent alt="photoradar sign" imageSrc={SpeedControlSign} />
        <p>{t("speed_camera_section.p2")}</p>
        <ImageComponent alt="stationary photoradar" imageSrc={Photoradar} />
        <DynamicSectionHeader translatedText={t("highway_section.title")} />
        <ImageComponent alt="highway" imageSrc={Highway} />
        <p>{t("highway_section.p1")}</p>
        <p>{t("highway_section.paid_highway_section.p1")}</p>
        <MessageBubble variant="note">
          <p className="mb-4">{t("highway_section.hint.p1")}</p>
          <p>{t("highway_section.hint.p2")}</p>
        </MessageBubble>
        <p>{t("highway_section.videotooling.p1")}</p>
        <p>{t("highway_section.videotooling.p2")}</p>
        <p>{t("highway_section.videotooling.p3")}</p>
        <ImageComponent alt="videotooling_signs" imageSrc={VideotoolingSign} />
        <hr className="mx-4"></hr>
        <h2>{t("gas_stations_section.title")}</h2>
        <ImageComponent alt="gas station" imageSrc={GasStation} />
        <p>{t("gas_stations_section.p1")}</p>
        <p>{t("gas_stations_section.p2")}</p>
        <ul className="space-y-5">
          <li>Orlen</li>
          <li>BP</li>
          <li>Shell</li>
          <li>Lotos</li>
          <li>Circle K</li>
        </ul>
        <p>{t("gas_stations_section.p3")}</p>
        <MessageBubble variant="hint">
          <p className="mb-4">{t("gas_stations_section.hint.p1")}</p>
          <p className="mb-4">{t("gas_stations_section.hint.p2")}</p>
          <p className="mb-4">{t("gas_stations_section.hint.p3")}</p>
          <p className="mb-4">{t("gas_stations_section.hint.p4")}</p>
          <p className="mb-4">{t("gas_stations_section.hint.p5")}</p>
        </MessageBubble>

        <hr className="mx-4"></hr>
        <h2>{t("mandatory_accessories.title")}</h2>
        <p>{t("mandatory_accessories.p1")}</p>
        <p>{t("mandatory_accessories.p2")}</p>
        <ul>
          <li>{t("mandatory_accessories.table_mandatory.p1")}</li>
          <li>{t("mandatory_accessories.table_mandatory.p2")}</li>
          <li>{t("mandatory_accessories.table_mandatory.p3")}</li>
        </ul>

        <p>{t("mandatory_accessories.p3")}</p>
        <ul>
          <li>{t("mandatory_accessories.table_non_mandatory.p1")}</li>
          <li>{t("mandatory_accessories.table_non_mandatory.p2")}</li>
          <li>{t("mandatory_accessories.table_non_mandatory.p3")}</li>
        </ul>
      </div>
    </article>
  );
}
