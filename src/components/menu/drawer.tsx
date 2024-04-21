import { motion } from "framer-motion";
import navlinks from "@/navlinks";
import Link from "next/link";

interface IProps {
  onClose: () => void;
}

export default function Drawer({ onClose }: Readonly<IProps>) {
  return (
    <motion.div
      className={"fixed font-anton top-0 left-0 w-full h-full bg-white z-50"}
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        x: "100%",
        opacity: 0,
      }}
    >
      <div className={"relative w-full h-full p-10"}>
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[15px] text-primary-blue"
        >
          Fermer
        </button>

        <div>
          <ul
            className={
              "flex flex-col space-y-3 border-b border-primary-blue pb-10"
            }
          >
            {navlinks.map((link) => (
              <Link
                onClick={onClose}
                className={"font-anton uppercase text-[40px]"}
                href={link.url}
                key={link.url}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
