// components/ScrollToTop.jsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop({ behavior = "auto" }) {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const mainEl = document.querySelector("main") || document.getElementById("__next");

    if (mainEl) {
      const top = Math.max(0, mainEl.getBoundingClientRect().top + window.pageYOffset - headerHeight);
      window.scrollTo({ top, left: 0, behavior });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, [pathname, behavior]);

  return null;
}
