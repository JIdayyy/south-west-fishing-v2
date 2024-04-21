import Image from "next/image";
import { Separator } from "@/components/ui/Separator";
import Section from "@/components/ui/Section";

const sections = [
  {
    title: "LA NIVE",
    text:
      "Elle nait des torrents de Béhérobie (Estérençuby) auxquels viennent se greffer le Laurhibar en rive droite ainsi que la Nive d'Arnéguy en rive gauche près de St Jean Pied de Port.\n" +
      "\n" +
      "Elle est ensuite rejointe par la Nive des Aldudes à St Martin d'Arrossa, le Laka à Ossès, le Baztan à Bidarray, la Mouline à Louhossoa, le Laxia à Itxassou, le Latsa à Espelette...\n" +
      "\n" +
      "La Nive termine son périple à Bayonne pour se jeter dans l'Adour D'une longueur d'environ 80km, La Nive est très prisée pour la pêche des salmonidés.",
    image: "/fishing-zone/nive2.png",
  },
  {
    title: "Secteur sud Landes",
    text:
      "VL’étang Blanc est un des lieux mythique de la pêche du brochet dans le sud ouest. Ce lac naturel d’1,8 km² offre un cadre exceptionnel. Typique du littoral landais, il est peut profond, ses fonds sablonneux et la végétation aquatique y est abondante.\n" +
      "\n" +
      "\n" +
      "On y retrouve les pins et chênes lièges de la foret Landaise en arrière plan. Des tonnes de chasse sont réparties sur quasiment toute la superficie du lac.L’étang blanc déverse ses eaux dans l’étang de Hardy, son voisin, par un petit canal. Ce second plan d’eau, aux caractéristiques semblables, est également un très bon site pour la pêche du brochet. \n" +
      "\n" +
      "Un peut plus au nord se trouve l’étang de Souston, toutes les espèces de carnassiers y sont représentés dans ce lac de 3,8km².Son biotope est lui aussi typique des lacs côtiers landais (fonds sablonneux, peu profond…) cet étang est parfait pour l’apprentissage de la pêche du Black-Bass, tous les modes de pêches y sont réalisables, la pêche en surface à la « frog » au « Texas Rig » etc ..",
    image: "/fishing-zone/nive.png",
  },
];

export default function FishingZone() {
  return (
    <main className={"px-5 md:px-24 space-y-10 pb-24"}>
      <h1 className={"font-bold font-anton text-[40px] md:text-[80px]"}>
        LES ZONES DE PÊCHES
      </h1>
      <p>
        Le secteur Pays Basque sud Landes est très propice pour la pêche de tout
        type de carnassiers.
      </p>
      <div className={"  ignore relative h-[700px]"}>
        <Image
          quality={100}
          objectFit={"cover"}
          fill
          src={"/fishing-zone/blue.png"}
          alt={"landing"}
        />
      </div>
      <p>
        Le réseau hydrographique en premère catégorie y est particulièrement
        étendu avec pas moins de 7000 km de cours d’eau dont 5200 km de parcours
        de pêche en 1ère catégorie et 1800 km en 2ème catégorie.
      </p>
      <Separator />
      <div className={"relative h-[500px]"}>
        <Image
          quality={100}
          objectFit={"cover"}
          fill
          src={"/about/about.png"}
          alt={"landing"}
        />
      </div>

      <div
        className={
          " md:px-0 py-24  w-full flex items-center align-middle justify-center"
        }
      >
        <div
          className={
            "w-full z-10 h-full flex flex-col justify-center items-center align-middle"
          }
        >
          <span
            className={
              "font-arima  relative  text-[16px] lg:text-[20px]  text-left"
            }
          >
            En France on les appelles rivières, ici on parle de gave, nive et
            autre nivelle ... Sur ce terrain de jeux évoluent truites, saumons
            et anguilles qui vous donneront du fils à retordre lors de vos
            sessions
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

      <Separator />

      <div className={"flex flex-col space-y-14 lg:space-y-28  w-full"}>
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
    </main>
  );
}
