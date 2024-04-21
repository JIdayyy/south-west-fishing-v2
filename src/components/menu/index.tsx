"use client";

import { useState } from "react";
import Drawer from "@/components/menu/drawer";
import { AnimatePresence } from "framer-motion";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={"md:invisible"}>
      <button
        onClick={() => setIsOpen(true)}
        className="font-arima text-[15px]"
      >
        Menu
      </button>

      <AnimatePresence>
        {isOpen && <Drawer onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
