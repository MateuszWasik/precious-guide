import PolandLandscape from "@images/transportation/car/car_page.png";
import SpeedLimitTable from "@images/transportation/car/speed_table.png";
import Photoradar from "@images/transportation/car/photoradar.png";
import SpeedControlSign from "@images/transportation/car/speed_control_sign.png";
import VideotoolingSign from "@images/transportation/car/highway_org.png";
import GasStation from "@images/transportation/car/gas_station.png";
import Highway from "@images/transportation/car/highway.png";
import Image from "next/image";
import { HintElement } from "@/components/hint-element";
import { ImageComponent } from "@/components/image-component";

export default function CarPage() {
  return (
    <article>
      <header className="mb-5">
        <p className="text-xs">Kompendium wiedzy</p>
        <h1 className="text-2xl font-bold">Podrózowanie samochodem</h1>
      </header>
      <div className="space-y-6">
        <ImageComponent alt="poland landscape" imageSrc={PolandLandscape} />
        <p>
          Podróżowanie samochodem w Polsce to nadal najczęstszy wybór
          podróżujących, przyciągający elastycznością i niezależnością.
          Nowoczesne autostrady i drogi krajowe umożliwiają wygodne podróżowanie
          między miastami, zapewniając jednocześnie swobodę odkrywania
          różnorodnych krajobrazów.
        </p>
        <p>
          Prywatność, możliwość zatrzymywania się w malowniczych miejscach oraz
          ułatwienia oferowane przez aplikacje, takie jak Autopay czy mapy
          online, sprawiają, że podróżowanie samochodem to nie tylko środek
          transportu, lecz także wyjątkowe doświadczenie podróży, które pozwala
          czerpać radość z odkrywania kraju na własnych warunkach.
        </p>
        <hr className="mx-4"></hr>
        <h3 id="speed-limits">Przepisowe prędkości</h3>
        <p>
          W Polsce aby bezpiecznie poruszać się po drodze należy przestrzegać
          znaków ograniczających predkość oraz wiedzieć jak szybko można
          poruszać się gdy takowych znaków nie ma. Przekraczając naszą granicę,
          przy drodzę możemy spotkać znak informujący o dopuszczalnych
          prędkościach na terenie całej Polski. Zwracamy szczególną uwagę oraz
          przestrzegamy do respektowania tych przepisów gdyż kary nakładane
          przez Policję mogą być dotkliwe.
        </p>
        <ImageComponent alt="speed limit table" imageSrc={SpeedLimitTable} />
        <HintElement
          text={
            <>
              <p className="mb-4">
                Polska Policja na swoim pokładzie posiada juz urządzenia do
                płatności zblizeniowych. Problem pojawia się gdy kierowca jest
                obywatelem innego kraju. W takim wypadku mandat musi zostać
                opłacony <span className="font-bold">na miejscu </span>i
                wyłącznie gotówką.
              </p>
              <p>
                Jezeli kierowca nie posiada przy polskiej waluty, albo nie ma
                wystarczającej ilości wtedy Policja moze pomóc takiej osobie w
                dotarciu do najblizszego bankomatu albo poprosić o to aby ktoś
                znajomy podjechał i opłacił mandat.
              </p>
            </>
          }
        />
        <hr className="mx-4"></hr>
        <h3 id="speed-control">Fotoradary</h3>
        <p>
          W polsce przepisy dotyczące fotoradarów są napisane na korzyść
          kierowców. W przeciwieństwie do wielu innych krajów UE w Polsce każdy
          stacjonarny fotoradar musi być odpowiednio wcześniej oznakowany
          znakiem pionowym.
        </p>
        <ImageComponent alt="photoradar sign" imageSrc={SpeedControlSign} />
        <p>
          Urządzenia służące do robienia zdjęć zbyt szybkim kierowcą według
          przepisów muszą być pomalowane na jaskrawo-żółty kolor. Jeżeli na
          drodze spotkacie urządzenie przypominające fotoradar w innym niż ten
          kolorze, to najprawdopodobniej jest on nieaktywny ale takich jest już
          bardzo mało.
        </p>
        <ImageComponent alt="stationary photoradar" imageSrc={Photoradar} />
        <h3 id="highway">Autostrady</h3>
        <ImageComponent alt="highway" imageSrc={Highway} />
        <p>
          W ciągu ostatnich kilku lat Polska znacząco zainwestowała w rozwijanie
          infrastruktury drogowej. Autostrady i drogi ekspresowe stanowią
          kręgosłup transportu drogowego, łącząc miasta i regiony kraju. Warto
          wspomnieć o dynamicznie rozwijającej się sieci autostrad, takich jak
          A1, A2, A4 czy A6, które umożliwiają szybkie i wygodne podróże między
          największymi miastami.
        </p>
        <h4>Płatne odcinki autostrady</h4>
        <ul className="space-y-5">
          <li>
            <p>
              Autostrada <span className="font-bold text-white">A1</span> na
              odcinku{" "}
              <span className="font-bold text-white">Konin - Świecko</span> - ma
              długość 255 kilometrów. Koszt przejazdu to 40 groszy za kilometr,
              więc aby móc przejechać cały odcinek musimy przygotować{" "}
              <span className="font-bold text-white">102 złote</span>.
            </p>
          </li>
          <li>
            <p>
              Autostrada <span className="font-bold text-white">A1</span> na
              odcinku{" "}
              <span className="font-bold text-white">Konin - Świecko</span> - ma
              długość 255 kilometrów. Koszt przejazdu to 40 groszy za kilometr,
              więc aby móc przejechać cały odcinek musimy przygotować{" "}
              <span className="font-bold text-white">102 złote</span>.
            </p>
          </li>
        </ul>
        <h4>Bezpłatne odcinki autostrady</h4>
        <p>
          Od 1 lipca 2023 w Polsce kierowcy samochodów osobowych do 3.5 tony
          oraz motocykliści nie płacą za przejazd odcinkami:
        </p>
        <ul>
          <li>A2: odcinek Stryków - Konin o długości 99 km</li>
          <li>A4: odcinek Wrocław - Sośnica o długości 162 km</li>
          <li>
            A1: odcinek Rusocin - Nowa Wieś o długości 162 km (od 4 września
            2023 roku).
          </li>
        </ul>
        <h4>Opłaty za przejazd autostradami</h4>
        <h6>Automatyczne</h6>
        <p>
          Od pewnego czasu w Polsce można płacić za przejazd płatnymi odcinkami
          autostrady wykorzystując do tego aplikacje w telefonie oraz nowoczesną
          infrastrukturę w punktach poboru opłat, między innymi videotooling.
        </p>
        <HintElement
          text={
            <>
              <p className="mb-4">
                Aplikację którą szczególnie polecamy ze względu na łatwość w
                obsłudzę oraz za wsparcie kilku języków to Autopay. Przed
                wyruszeniem w drogę z tą aplikacją wymagane jest jednak jej
                skonfigurowanie poprzez podanie numeru rejestracyjnego samochodu
                oraz podpięciu karty płatniczej.
              </p>
              <p>
                Strona aplikacji jest dostępna również w jezyku angielskim.
                Pamietaj jednak aby mieć odpaloną aplikacje w tle ponieważ
                wykorzystuje ona odczyt z GPSa aby móc poprawnie zlokalizować
                pojazd. https://autopay.eu
              </p>
            </>
          }
        />
        <p>
          Videotooling - czyli system odczytujący tablicę rejestracyjną z
          wykorzystaniem między innymi aplikacji Autopay do opłaty za przejazd.
          Ten sposób płatności oraz przejazdu jest najszybszy gdyż nie trzeba
          zatrzymywać się na dłużej niż kilka sekund przed kamerą która pobierze
          numer naszych tablic rejestracyjnych oraz powiążę go z tym
          wprowadzonym wcześniej w aplikacji Autopay. Szlaban otworzy się
          automatycznie a pieniądze zostaną pobranę z naszej karty.
        </p>
        <p>
          System ten jest uzywany na dwóch koncesjonowanych odcinkach autostrad
          - A1 (odcinek Toruń - Gdańsk) oraz A4 (odcinek Kraków - Katowice).
        </p>
        <p>
          Videotooling jest oznakowany czarną kamerką na żółtym tle. Najczęściej
          videotooling działa na najbardziej skrajnych pasach po lewej stronie.
          Warto dodać, że gdyby był problem z aplikacją, na tych pasach zawsze
          jest pracownik w budce który będzie mógł pobrać od nas pieniądze.{" "}
        </p>
        <ImageComponent alt="videotooling_signs" imageSrc={VideotoolingSign} />
        <hr className="mx-4"></hr>
        <h2>Stacje Paliw</h2>
        <ImageComponent alt="gas station" imageSrc={GasStation} />
        <p>
          Podróżując po Polsce możemy minąć wiele różnych stacji paliw, od
          wielkich światowych koncernów po małe lokalne stacje. Mimo, że jakość
          paliw w Polsce jest pod ciągłą kontrolą Inspekcji Handlowej to
          zalecamy tankować samochód na stacjach znanych koncernów.
        </p>
        <p>Najpopularniejsze stacje paliw w Polsce to:</p>
        <ul className="space-y-5">
          <li>Orlen</li>
          <li>BP</li>
          <li>Shell</li>
          <li>Lotos</li>
          <li>Circle K</li>
        </ul>
        <p>
          Od 1 stycznia 2024 na wszystkich stacjach nie zatankujemy już benzyny
          o oznaczeniu Pb95. Zamiast niej pojawi się benzyna o oznaczeniu E10.
        </p>
        <h4>Średnie ceny paliw</h4>
        <p>
          Ceny paliw w Polsce wachają się od kilku do nawet kildziesięciu groszy
          na litrze. Najdrozej wyjdzie nas tankowanie na autostradach, gdyz tam
          ceny sa zazwyczaj największe.
        </p>
        <p>
          Obecnie na stan 1.10.2021 uśrednione ceny paliw w Polsce wyglądają
          następująco:
        </p>
        <ul>
          <li>Benzyna E95 - 6.45 zł/l</li>
          <li>Benzyna E98 - 6.98 zł/l</li>
          <li>Diesel - 6.50 zł/l</li>
          <li>LPG - 3.50 zł/l</li>
        </ul>
        <HintElement
          text={
            <>
              <p className="mb-4">
                Wszystkie wymienione wyżej stacje paliw przyjmują gotówkę oraz
                płatności kartą. Za paliwo w Polsce płaci się po czynności
                tankowania w kasie stacji.
              </p>
              <p className="mb-4">
                Nie na wszystkich stacjach zatankujemy AdBlue.
              </p>
              <p className="mb-4">
                Większość toalet na stacjach paliw są bezpłatne dla klientów.
                Warto jednak posiadać drobne pieniądze gdyż w niektórych
                stacjach, nawet tych popularnych, są pobierane opłaty za
                skorzystanie z WC.
              </p>
              <p className="mb-4">
                Stacje w mniejszych miejscowościach zazwyczaj nie posiadają ani
                toalety ani propozycji gastronomicznych. Warto o tym pamiętać
                zjeżdżając z głównych tras i odpowiednio wcześniej zorganizować
                postój.
              </p>
              <p>
                Na stacjach można bezpłatnie napompować opony kompresorem, oraz
                za niewielką opłatą użyć odkurzacza.
              </p>
            </>
          }
        />
        <hr className="mx-4"></hr>
        <h2>Obowiazkowe wyposażenie samochodu w Polsce</h2>
        <p>
          Podczas kontroli drogowej policjant może skontrolować nasz pojazd pod
          względem posiadania obowiązkowego wyposażenia.
        </p>
        <p>W Polsce obowiązkowym wyposażeniem każdego samochodu musi być:</p>
        <ul>
          <li>
            umiejscowiona w poprawnym miejscu oraz oświetlona tablica
            rejestracyjna
          </li>
          <li>trójkąt ostrzegawczy</li>
          <li>sprawna gaśnica w łatwo dostępnym miejscu</li>
        </ul>

        <p>
          Mimo, że nie mamy takiego obowiązku to jednak z uwagi na
          bezpieczeństwo własne oraz innych kierujących zaleca się posiadanie w
          samochodzie również:
        </p>
        <ul>
          <li>kilku sztuk kamizelek odblaskowych dla siebie oraz pasażerów</li>
          <li>
            ciepły koc na ogrzanie się na wypadek awarii w trudnych warunkach
            atmosferycznych
          </li>
          <li>apteczki</li>
        </ul>
      </div>
    </article>
  );
}
