import Image from "next/image";
import { Separator } from "@/components/ui/Separator";

const text =
  "Je me suis essayé à toute sortes de techniques et toute sorte de pêche aussi j’ai su piocher dans chaque approche de l’eau le meilleur de la technique pour affiner mon savoir faire.\n" +
  "\n" +
  "Après une carrière dans la mécanique, et lors de ma participation à l’école de pêche de l’aappma Nivelle Côte Basque ( APN ) j’ai ouvert les yeux et j’ai choisis de me reconvertir et de faire de ma passion mon métier en transmettant le gout et le respect de la pêche.\n" +
  "\n" +
  "Une véritable révélation pour moi, car j’y ai trouvé une seconde passion, celle de transmettre et d’apprendre l’art et la manière de capturer des poissons tout en gardant une approche respectueuse de la nature";

const insta_images = [
  {
    src: "/about/insta/insta1.png",
    alt: "insta1",
  },
  {
    src: "/about/insta/insta2.png",
    alt: "insta2",
  },
  {
    src: "/about/insta/insta3.png",
    alt: "insta3",
  },
  {
    src: "/about/insta/insta4.png",
    alt: "insta4",
  },
];

export default function About() {
  return (
    <main className={"px-5 md:px-24 space-y-10 pb-24"}>
      <h1 className={"font-bold font-anton text-[40px] md:text-[80px]"}>
        À PROPOS
      </h1>
      <p>
        Pêcheur depuis l’enfance, j’ai commencé la pêche grâce à mon grand père.
      </p>
      <div className={"  ignore relative h-[700px]"}>
        <Image
          quality={100}
          objectFit={"cover"}
          fill
          src={"/about/about1.png"}
          alt={"landing"}
        />
      </div>
      <p>
        Depuis cette époque j’ai gardé la passion de la pêche et je n’ai jamais
        cessé de pêcher et de parcourirs les cours d’eau du pays basque à la
        recherche de truites black basset plus encore...! Je me suis aussi
        naturellement impliqué dans une association de pêche dans laquelle
        j’évolu depuis plusieurs années.
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

      <p className={"whitespace-pre-wrap"}>{text}</p>

      <Separator />

      <div
        className={
          "px-5 md:px-0 py-24 md:pr-24 flex items-center align-middle justify-center"
        }
      >
        <div
          className={
            "w-full z-10 h-full flex  flex-col justify-center items-center align-middle"
          }
        >
          <span className={"  relative  text-[16px] lg:text-[20px]  text-left"}>
            RETROUVEZ MOI SUR INSTAGRAM
          </span>
          <span
            className={
              "absolute font-anton z-0 md:text-[160px] lg:text-[220px] text-[75px] font-bold opacity-5"
            }
          >
            INSTAGRAM
          </span>
          <span
            className={
              "  relative font-arima text-[12px] lg:text-[16px]  text-left"
            }
          >
            @mathieu_bzd_fishing
          </span>
        </div>
      </div>

      <div className={"flex flex-wrap gap-5 w-full"}>
        {insta_images.map((image) => (
          <div key={image.alt} className={"w-full h-[200px] relative md:w-1/4"}>
            <Image
              quality={100}
              objectFit={"cover"}
              fill
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
