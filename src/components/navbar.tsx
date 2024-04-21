"use client";
import Menu from "@/components/menu";
import navlinks from "@/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const isSelected = (url: string) => {
    return pathName === url;
  };

  return (
    <nav className="w-full p-10 relative lg:px-24 lg:py-10 flex justify-end">
      <Menu />

      <ul className={"md:flex hidden space-x-6"}>
        {navlinks.map((link) => (
          <Link href={link.url} key={link.url}>
            <li
              className={`${
                isSelected(link.url) ? "font-bold underline" : "font-light"
              } text-[16px] font-arima hover:underline`}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
