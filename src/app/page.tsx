import Image from "next/image";
import Link from "next/link";

type Section = {
  title: string;
  text: string;
  image: string;
};

const sections: Section[] = [
  {
    title: "Float tube",
    text:
      "Venez découvrir cette approche de la pêche de façon ludique et sécurisé qui vous ouvrent les portes de nouvelles zones de pêches inaccessibles du bord.\n" +
      "\n" +
      " C’est l’opportunité d’ une expérience de pêche unique, au plus près de la nature avec des émissions de co² proche de zéro. \n" +
      "\n" +
      "Ce type de stage est un bon moyen de vous faire une idée sur l’utilisation d’un float tube avant d’en acheter un.",
    image: "/homepage/floatTube.png",
  },
  {
    title: "Salmonidés",
    text:
      "Venez découvrir ou vous perfectionner aux leurres, au « toc » et à la mouche sur le bassin de la Nivelle et des Nives à la recherche des ses truites sauvages. \n" +
      "\n" +
      "Des stages de pêche sur les lacs de montagne de sont aussi envisageables sur demande.",
    image: "/homepage/salmonidés.png",
  },
  {
    title: "Barque",
    text:
      "A quelques kilomètres de l’océan, non loin de Capbreton, se trouve l’étang blanc . \n" +
      "\n" +
      "Au milieu des Pins maritimes et des tones de chasse je vous propose de venir à la recherche du « maître des lieux », le brochet les meilleurs périodes sont les mois de mai, juin, fin septembre, octobre et novembre.",
    image: "/homepage/barque.png",
  },
];

export default function Home() {
  return (
    <main className="font-anton flex flex-col">
      <div className={"flex flex-col p-5 lg:px-24 lg:py-10"}>
        <h1
          className={
            "font-light leading-[100px] md:leading-[110px] lg:leading-[185px] md:text-[100px] lg:text-[175px] text-[90px]"
          }
        >
          MATHIEU BAZARD
        </h1>
        <h2 className={"text-[40px] lg:text-[80px] uppercase"}>
          Guide de pêche
        </h2>
        <p className={"text-normal lg:text-[25px] font-light"}>
          Depuis 2020 South West Fishing vous propose des stages et séjours de
          pêches dans la région Pays Basque sud Landes.{" "}
        </p>
      </div>
      <div className={"w-full md:px-5 lg:px-24 lg:py-10"}>
        <div className={"w-full  relative h-[700px]"}>
          <Image
            quality={100}
            objectFit={"cover"}
            fill
            src={"/homepage/landing.png"}
            alt={"landing"}
          />
        </div>
      </div>

      <div className={"text-block"}>
        <p>
          Découvrez la pêche dans le sud ouest avec un guide diplômé
          expérimenté. Partir en séjour guidage ou initiation s’est s’assurer
          une journée de pêche dans les meilleures conditions, et la certitude
          de se faire accompagner par un encadrant passionné et expérimenté.
        </p>
      </div>

      <Separator />

      <ValuesBlock />

      <div
        className={
          "flex flex-col space-y-14 lg:space-y-28 px-5 lg:px-24 w-full"
        }
      >
        {sections.map((section, index) => (
          <>
            <Section
              key={index}
              title={section.title}
              text={section.text}
              image={section.image}
              position={index % 2 === 0 ? "left" : "right"}
            />
            <div className={`w-full  relative flex justify-center`}>
              <div
                className={`h-[0.5px] absolute bg-primary-blue ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } w-1/2  `}
              ></div>
            </div>
          </>
        ))}
      </div>

      <EndBlock />

      <ContactBlock />
    </main>
  );
}

const ContactBlock = () => {
  return (
    <div
      className={
        "flex flex-col my-24 md:flex-row justify-between align-middle md:items-center md:space-y-0 space-y-7 font-arima  md:px-24 w-full px-5"
      }
    >
      <h3 className={"uppercase text-[16px] md:text-[25px] lg:text-36px"}>
        PRÊT POUR L’AVENTURE ?{" "}
      </h3>
      <Link href={"/pricing"} className={"underline"}>
        Voir les tarifs
      </Link>
      <Link href={"/"} className={"underline"}>
        Contactez moi
      </Link>
      <p className={""}>Tel: 06.16.74.02.11</p>
    </div>
  );
};

const ValuesBlock = () => {
  return (
    <div
      className={
        "relative md:my-[100px] my-[50px] lg:my-[150px] flex items-center align-middle justify-center"
      }
    >
      <div
        className={
          "w-full z-10 h-full flex  flex-col font-arima items-center align-middle justify-center"
        }
      >
        <span className={"md:text-[35px]  text-[20px] lg:text-[50px]"}>
          “Convivialité partage et aventure !”
        </span>
        <span className={"md:text-[25px]  text-[16px] lg:text-[35px]"}>
          Les valeurs qui nous animent
        </span>
      </div>

      <div
        className={
          "absolute z-0 md:text-[160px] lg:text-[220px] text-[75px] font-bold opacity-5"
        }
      >
        SOUTH WEST
      </div>
    </div>
  );
};

const EndBlock = () => {
  return (
    <div
      className={
        "md:my-[100px] my-[50px] px-5 md:px-0 md:pr-24 lg:my-[150px] flex items-center align-middle justify-center"
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
          `&quot;Que vous soyez débutant ou pêcheur chevroné, nos guidages
          s’adaptent à vos besoins. <br />
          <br />
          Vous êtes plûtot truite ? Enfillez vos wadders et embarquez sur les
          nives qui nous offiront de splendides paysages et des poissons
          joueurs. <br />
          <br />
          Plutot carnassiers ? L’étang blanc et ses 183 Hectares abrite
          Black-Bass Brochet Perches et plus encore ...`&quot;
        </span>
        <span
          className={
            "absolute font-anton z-0 md:text-[160px] lg:text-[220px] text-[75px] font-bold opacity-5"
          }
        >
          FISHING NATURE
        </span>
      </div>
    </div>
  );
};

const Separator = () => {
  return (
    <div className={"w-full relative mt-10 flex justify-center"}>
      <div
        className={`h-[0.5px] absolute bg-primary-blue right-0 w-1/2 lg:right-24 md:right-5 lg:w-[80%]`}
      ></div>
    </div>
  );
};

const Section = ({
  image,
  text,
  title,
  position,
}: {
  image: string;
  text: string;
  title: string;
  position: "left" | "right";
}) => {
  return (
    <div
      className={`flex space-y-5 flex-col justify-between align-middle items-start w-full ${
        position === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`w-full md:w-[50%] md:pl-0 md:pr-10 md:pt-5 md:pb-0`}>
        <h3 className={"text-[40px] uppercase lg:text-[80px] my-5 font-bold"}>
          {title}
        </h3>
        <p className={"whitespace-pre-wrap lg:text-[20px] text-[16px]"}>
          {text}
        </p>
      </div>

      <div className={`w-full  md:w-[40%] h-[400px] md:h-[600px] relative`}>
        <Image quality={100} objectFit={"cover"} fill src={image} alt={title} />
      </div>
    </div>
  );
};
