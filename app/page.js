"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.scss";

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
      <h1>This is &quot;Home&quot; page</h1>
    </main>
  );
}
