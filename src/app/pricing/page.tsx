import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathieu Bazard - Guide de pêche",
  description:
    "Depuis 2020 South West Fishing vous propose des stages et séjours de pêches dans la région Pays Basque sud Landes.",
};

const pricing = [
  {
    title: "La demie journée de 5 heures (matinée ou après-midi)",
    subtitle: "4h de pêche",
    price: "125€",
  },
  {
    title: "La journée de 8 heures",
    subtitle: "6h de pêche",
    price: "190€",
  },
  {
    title: "Pour 2 jours",
    price: "345€",
  },
  {
    title: "pour le coup du soir (à partir de 18h, 18h30, horaires variables),",
    price: "60€",
    subtitle:
      " 30 euros si pris en complément d’une demie journée (après-midi)",
  },
  {
    title: "stage truite au toc jeunes",
    price: "190€",
  },
  {
    title: "initiation pêche au coup (min 2 enfants)",
    price: "15 € / h",
  },
];

export default function Pricing() {
  return (
    <main className={"px-5 md:px-24 flex flex-col space-y-4"}>
      <h1
        className={"font-light font-anton text-[40px] md:text-[80px] uppercase"}
      >
        Tarifs
      </h1>

      <h2 className={"font-arima"}>
        Lors des demies journées, sont pris en compte :
      </h2>
      <ul className={"font-arima my-2 list-disc ml-5"}>
        <li>L&apos;enseignement</li>
        <li>L&apos;accompagnement</li>
        <li>Le prêt de matériel ( hors wadders )</li>
        <li>L&apos;assurance</li>
      </ul>

      <p>
        Les prestations ne comprennent ni l’hébergement, ni la carte de pêche.
      </p>

      <div className={"grid font-arima  md:grid-cols-3 grid-cols-2"}>
        {pricing.map((price) => (
          <div
            key={price.title}
            className={
              "my-5 border-l border-r border-primary-blue p-3 flex flex-col text-center justify-center align-middle items-center"
            }
          >
            <h3 className={"text-[16px]"}>{price.title}</h3>
            <p className={"text-[12px]"}>{price.subtitle}</p>
            <p className={"text-[19px]"}>{price.price}</p>
          </div>
        ))}
      </div>

      <div
        className={
          "px-5 md:px-0 py-24 md:pr-24 flex items-center align-middle justify-center"
        }
      >
        <div
          className={
            "w-full z-10 h-full flex  flex-row md:flex-row-reverse font-arima items-center align-middle"
          }
        >
          <span
            className={
              " w-full relative md:w-[60%]  text-[16px] lg:text-[20px]  text-left"
            }
          >
            Le respect du poisson et de la nature sont des éléments essentiels
            du savoir faire que je partage, aussi, tous les poissons devront
            être remis à l’eau dans les meilleures conditions possibles, le
            poisson avant, la photo après !
          </span>
          <span
            className={
              "absolute font-anton z-0 md:text-[160px] lg:text-[220px] text-[75px] font-bold opacity-5"
            }
          >
            SOUTH WEST
          </span>
        </div>
      </div>
    </main>
  );
}
