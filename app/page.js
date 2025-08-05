"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.scss";
import ZoomParallax from "@/components/zoomParallax/ZoomParallax.jsx";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <ZoomParallax />
    </main>
  );
}
