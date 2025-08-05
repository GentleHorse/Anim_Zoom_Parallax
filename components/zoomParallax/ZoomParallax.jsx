import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ZoomParallax.module.scss";
import Picture1 from "../../public/images/1.jpeg";
import Picture2 from "../../public/images/2.jpeg";
import Picture3 from "../../public/images/3.jpg";
import Picture4 from "../../public/images/4.jpg";
import Picture5 from "../../public/images/5.jpg";
import Picture6 from "../../public/images/6.jpg";
import Picture7 from "../../public/images/7.jpeg";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scaleA = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scaleB = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scaleC = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scaleD = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scaleE = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scaleA },
    { src: Picture2, scale: scaleB },
    { src: Picture3, scale: scaleC },
    { src: Picture4, scale: scaleB },
    { src: Picture5, scale: scaleC },
    { src: Picture6, scale: scaleD },
    { src: Picture7, scale: scaleE },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, i) => (
          <motion.div style={{ scale }} className={styles.el}>
            <div className={styles.imageContainer}>
              <Image src={src} fill alt="image" placeholder="blur" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
