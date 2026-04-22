'use client';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import styles from './styles.module.css';

const FirstPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    gsap.set(`.${styles.box}:nth-child(1)`, { yPercent: -100 });
    const tween = gsap.to(`.test`, { yPercent: 100, ease: "none", repeat: 6 });
    tl.add(tween, 0);
    gsap.to(tl, { progress: 1, duration: 5, ease: "power4.inOut" });
    // gsap.to(`.${styles.box}:nth-child(2)`, { x: 800, y: 200, duration: 2.5, ease: "power2.inOut" });
    // gsap.fromTo(`.${styles.box}:nth-child(3)`, 
    //   { x: 0, y: -400, rotation: 0 }, 
    //   { x: 0, y: 0, rotation: 180, duration: 3, ease: "power2.inOut" }
    // );
    // gsap.from(`.${styles.box}:nth-child(4)`, { x: 400, y: -400, rotation: 0, duration: 3.5, ease: "power2.inOut" });
  });
  return (
    <div>
        <div ref={containerRef} className={styles.container}>
            <div className="test ">
              <div className={styles.box}>L</div>
              <div className={`${styles.box} absolute top-0 left-0`}>L</div>
            </div>
            {/* <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div> */}
        </div>
    </div>
  )
}

export default FirstPage;