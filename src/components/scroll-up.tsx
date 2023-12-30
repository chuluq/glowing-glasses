"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Icons } from "@/components/icons";

export const ScrollUp = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollUp = document.querySelector(".scrollup");
      if (scrollY >= 560) {
        scrollUp?.classList.add("show-scroll");
      } else {
        scrollUp?.classList.remove("show-scroll");
      }
    });
  }, []);

  return (
    <Link href="#home" className="scrollup">
      <Icons.arrowUp className="scrollup__icon" />
    </Link>
  );
};
