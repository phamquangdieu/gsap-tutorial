'use client';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import styles from './styles.module.css';

const FirstPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(`.${styles.box}`, { x: 400, y: 100, duration: 2, ease: "power2.inOut" });
    gsap.to(`.${styles.box}:nth-child(2)`, { x: 800, y: 200, duration: 2.5, ease: "power2.inOut" });
    gsap.fromTo(`.${styles.box}:nth-child(3)`, 
      { x: 0, y: -400, rotation: 0 }, 
      { x: 0, y: 0, rotation: 180, duration: 3, ease: "power2.inOut" }
    );
    gsap.from(`.${styles.box}:nth-child(4)`, { x: 400, y: -400, rotation: 0, duration: 3.5, ease: "power2.inOut" });
  });
  return (
    <div>
        <div ref={containerRef} className={styles.container}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
        </div>
    </div>
  )
}

export default FirstPage;