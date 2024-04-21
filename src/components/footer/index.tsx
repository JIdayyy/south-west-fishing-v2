import Link from "next/link";

const sections: ListItemType[] = [
  {
    title: "Accueil",
    items: [
      {
        type: "link",
        text: "Accueil",
        href: "/",
      },
      {
        type: "link",
        text: "À propos",
        href: "/about",
      },
      {
        type: "link",
        text: "Tarifs",
        href: "/pricing",
      },
    ],
  },
  {
    title: "Mes titres",
    items: [
      {
        type: "text",
        text: "n° diplôme: BPALP190299",
      },
      {
        type: "text",
        text: "n° carte professionnelle: 06420ED0154",
      },
      {
        type: "text",
        text: "n° de SIREN: 889 895 876",
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        type: "text",
        text: "Tel: 06.16.74.02.11",
      },
      {
        type: "text",
        text: "Email: southwestfishing64@gmail.com",
      },
    ],
  },
  {
    title: "Partenaires",
    items: [
      {
        type: "link",
        text: "EPF École de pêche française",
        href: "https://smgpf.fr/",
      },
      {
        type: "link",
        text: "StCroix",
        href: "https://stcroixrods.com/blogs/news/making-the-best-rods-on-earth%C2%AE-heritage-only-goes-so-far",
      },
      {
        type: "link",
        text: "Aappma Nivelle Côte Basque",
        href: "https://www.facebook.com/aappmanivelle.cotebasque/",
      },
    ],
  },
];

type ListItemType = {
  title: string;
  items: (
    | {
        type: "link";
        href: string;
        text: string;
      }
    | {
        type: "text";
        text: string;
      }
  )[];
};

const ListItem = ({ item }: { item: ListItemType }) => {
  return (
    <div className={"flex text-[12px] md:text-[15px] flex-col space-y-3 py-10"}>
      <h2 className={"text-white  font-arima font-bold"}>{item.title}</h2>
      <ul className={"flex flex-col space-y-2"}>
        {item.items.map((item, index) => {
          if (item.type === "link") {
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={"text-white font-thin  font-arima"}
                >
                  {item.text}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <p className={"text-white font-thin  font-arima"}>
                  {item.text}
                </p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer
      className={
        "bg-primary-blue flex justify-between flex-wrap lg:flex-row w-full px-5 md:px-24"
      }
    >
      {sections.map((section, index) => (
        <ListItem item={section} key={section.title} />
      ))}
    </footer>
  );
}
